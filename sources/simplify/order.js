// Compre (u ,v)
// -1 if u < v
// 0 if u == v
// 1 if u > v
// The ✁ order relation defines the actions of the basic commutative trans-
// formations, and, in a simplified sum or product, the operands are ordered
// according to this relation. Since the operands of these expressions are sim-
// plified recursively, it is sufficient to define the order relation for expressions
// that are automatically simplified. [page 84]
function compare(u, v)
{
	// O-1. Suppose that u and v are both constants (integers or fractions). Then,
	// u✁v → u < v
	if((kind(u) == NODE_INT || is_fraction(u)) && (kind(v) == NODE_INT || is_fraction(v)))
	{
		var u_value = is_fraction(u) ? u.children[0].value / u.children[1].value : u.value;
		var v_value = is_fraction(v) ? v.children[0].value / v.children[1].value : v.value;
		if(u_value == v_value)
			return 0;
		else if(u_value < v_value)
			return -1;
		else
			return 1;

	}
	// O-2. Suppose that u and v are both symbols. Then, u✁v is defined by
	// the lexicographical order of the symbols.
	else if(kind(u) == NODE_SYM && kind(v) == NODE_SYM)
	{
		if(u.value == v.value)
			return 0;
		else if(u.value < v.value)
			return -1;
		else
			return 1;
	}
	// 	O-3. Suppose that u and v are either both products or both sums with
	// operands
	else if(kind(u) == OP_ADD && kind(v) == OP_ADD || kind(u) == OP_MUL && kind(v) == OP_MUL)
	{
		var size_u = u.children.length;
		var size_v = v.children.length;
		var size = Math.max(size_u, size_v);
		for(var i=0; i<size; i++)
		{
			if(v.children[size_v-i-1] === undefined)
				// op 3
				return 1;
			else if(u.children[size_u-i-1] === undefined)
				return -1;
			else
			{
				// op 2 and 1
				var comp = compare(u.children[size_u-i-1], v.children[size_v-i-1]);
				if(comp != 0)
					return comp;
			}
		}
		return 0;
	}
	// O-4. In other words, if the bases are different, the order is determined by the
	// order of bases, and if the bases are the same, the order is determined by
	// the order of the exponents.
	else if(kind(u) == OP_POW && kind(v) == OP_POW)
	{
		var comp = compare(u.children[0], v.children[0]);
		if(comp != 0)
			return comp;
		else
			return compare(u.children[1], v.children[1]);
	}
	// O-6. Suppose that u and v are functions
	else if(u.type == NODE_FUNC && v.type == NODE_FUNC)
	{
		if(kind(u) != kind(v))
		{
			if(kind(u) < kind(v))
				return -1;
			else
				return 1;
		}
		else
		{
			var size_u = u.children.length;
			var size_v = v.children.length;
			var size = Math.max(size_u, size_v);
			for(var i=0; i<size; i++)
			{
				if(v.children[i] === undefined)
					// op 3
					return 1;
				else if(u.children[i] === undefined)
					return -1;
				else
				{
					// op 2 and 1
					var comp = compare(u.children[i], v.children[i]);
					if(comp != 0)
						return comp;
				}
			}
			return 0;
		}
	}
	// O-7. If u is an integer or fraction and v is any other type, then u✁v.
	else if((kind(u) == NODE_INT || is_fraction(u)) && kind(v) != NODE_INT && !is_fraction(v))
	{
		return -1;
	}
	// O-8. Suppose that u is a product. If v is a power, sum, factorial, function,
	// or symbol, then 9
	// u✁v → u✁ · v.
	else if(kind(u) == OP_MUL && (kind(v) == OP_POW || kind(v) == OP_ADD || kind(v) == NODE_SYM || v.type == NODE_FUNC))
	{
		return compare(u, construct(OP_MUL, v));
	}
	// O-9. Suppose that u is a power. If v is a sum, factorial, function, or
	// symbol, then
	// u✁v → u✁v 1 .
	else if(kind(u) == OP_POW && (kind(v) == OP_ADD || kind(v) == NODE_SYM || v.type == NODE_FUNC))
	{
		return compare(u, construct(OP_POW, v, createNode(NODE_INT, 1)));
	}
	// O-10. Suppose that u is a sum. If v is a factorial, function, or symbol,
	// then
	// u✁v → u✁ + v.
	else if(kind(u) == OP_ADD && (kind(v) == NODE_SYM || v.type == NODE_FUNC))
	{
		return compare(u, construct(OP_ADD, v));
	}
	// O-11. Suppose that u is a factorial. If v is a function or symbol
	// -----------------------------------------------------------------
	// Not implemented yet. No factorial function was used yet. When implement, also include
	// the factorial cases in the other rules

	// O-12. Suppose that u is a function, and v is a symbol.
	// -----------------------------------------------------------------
	// It is not possible to use non predetermined functions. Because of this, a symbol is always
	// before a function.
	else if(u.type == NODE_FUNC && kind(v) == NODE_SYM)
	{
		return 1;
	}

	// O-13. If u and v do not satisfy the conditions in any of the above rules,
	else
	{
		return -compare(v, u);
	}
}
