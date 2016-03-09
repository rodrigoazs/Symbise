// Automatic Simplifiy (u)
// To begin, since integers and symbols are in simplified form, the pro-
// cedure simply returns the input expression simplified [page 91]
function automatic_simplify(node)
{
	var ret = 0;

	switch(node.type)
	{
		case NODE_INT:
		case NODE_SYM:
			ret = node;
			break;
		case NODE_OP:
			// v := Map(Automatic simplify, u);
			var children = new Array();
			for(var i = 0; i < node.children.length; i++)
			{
				children[i] = automatic_simplify(node.children[i]);
			}
			switch(node.value)
			{
				case OP_DIV:
					// identify fraction
					if(children[0].type == NODE_INT && children[1].type == NODE_INT)
					{
						ret = simplify_rational_number(construct(OP_DIV, children[0], children[1]));
					// identify quotient
					}else{
						ret = simplify_quotient(construct(OP_DIV, children[0], children[1]));
					}
					break;
				case OP_MUL:
					ret = simplify_product(construct(OP_MUL, children));
					break;
				case OP_ADD:
					ret = simplify_sum(construct(OP_ADD, children));
					break;
				case OP_SUB:
					ret = simplify_sum(construct(OP_ADD, children[0], simplify_difference(node.children[1])));
					ret.children.sort(compare);
					break;
				case OP_NEG:
					ret = simplify_difference(children[0]);
					break;
				case OP_POW:
					ret = simplify_power(construct(OP_POW, children[0], children[1]));
					break;
			}
			break;
		case NODE_FUNC:
			// not implemented yet
			var children = new Array();
			for(var i = 0; i < node.children.length; i++) {
				children[i] = automatic_simplify(node.children[i]);
			}
			ret = simplify_function(createNodeWithArray(node.type, node.value, children));
			//ret = node;
			break;
	}
	return ret;
}

// Simplify Rational Number (u)
// Let u be an integer or a fraction with non-zero denominator. The operator
// Simplify rational number(u) transforms u to a rational number in standard form [page 37]
function simplify_rational_number(node)
{
	if(kind(node) == NODE_INT) return node;
	else if(is_fraction(node)){
		var n = operand(node, 0).value;
		var d = operand(node, 1).value;
		if(!!(n % 1) || !!(d % 1)) return createNode(NODE_INT, n/d);
		if(d == 0) return node;
		if(n % d == 0) return createNode(NODE_INT, (n / d) >> 0); // compare remainder and return integer quotient
		else{
			var g = gcd(n, d);
			if(d > 0)
				return createNode(NODE_OP, OP_DIV, createNode(NODE_INT, (n / g) >> 0), createNode(NODE_INT, (d / g) >> 0));
			else
				return createNode(NODE_OP, OP_DIV, createNode(NODE_INT, (-n / g) >> 0), createNode(NODE_INT, (-d / g) >> 0));
		}
	}
}

// Simplify Power (u)
// Definition 3.33. Let u = v^w where the base v = Operand(u, 1) and the
// exponent w = Operand(u, 2) are either ASAEs or the symbol Undefined.
// The operator Simplify power(u) is defined by the following transformation
// rules. [page 94]
function simplify_power(node)
{
	var v = operand(node, 0);
	var w = operand(node, 1);

	if(kind(v) == NODE_INT && v.value == 0)
	{
		if((kind(w) == NODE_INT && w.value > 0) || (is_fraction(w) && operand(w,0).value > 0))
			return createNode(NODE_INT, 0);
		else
			return node;
	}
	else if(kind(v) == NODE_INT && v.value == 1)
	{
		return createNode(NODE_INT, 1);
	}
	else if(kind(w) == NODE_INT || is_fraction(w))
	{
		return simplify_integer_power(v, w);
	}
	else
	{
		return node;
	}
}

// Simplify Integer Power (u)
// Definition 3.34. Consider the expression vn where v != 0 is an ASAE and
// n is an integer. The operator Simplify integer power(v, n) is defined by the
// following transformation rules. [page 95]
function simplify_integer_power(v, n)
{
	if(kind(v) == NODE_INT || is_fraction(v)) //not implemented yet
	{
		return simplify_RNE(construct(OP_POW, v, n));
		//return construct(OP_POW, v, n);
	}
	else if(kind(n) == NODE_INT && n.value == 0)
	{
		return createNode(NODE_INT, 1);
	}
	else if(kind(n) == NODE_INT && n.value == 1)
	{
		return v;
	}
	else if(kind(v) == OP_POW)
	{
		var r = operand(v, 0);
		var s = operand(v, 1);

		// case of x^x^8 != x^(8*x)
		if(kind(s) != NODE_INT) return construct(OP_POW, v, n);
		var p = simplify_product(construct(OP_MUL, s, n));

		if(kind(p) == NODE_INT)
		{
			return simplify_integer_power(r, p);
		}
		else
		{
			return construct(OP_POW, r, p);
		}
	}
	else if(kind(v) == OP_MUL)
	{
		var ret = new Array();
		var r = v.children.slice(0);
		for(var i = 0; i < r.length; i++)
		{
			r[i] = simplify_integer_power(r[i], n);
			ret[i] = simplify_product(r[i]);
		}
		return construct(OP_MUL, ret);
	} else {
		return construct(OP_POW, v, n);
	}
}

// Simplify Sum (u)
// The operator Simplify sum(u)
// In development
function simplify_sum(node)
{
	if(kind(node) == OP_ADD){
		if(node.children.length == 1)
			return node.children[0];
		else {
			var v = simplify_sum_rec(node.children);
			if(v.length == 1)
				return v[0];
			else if(v.length >= 2)
			{
				if(v[0].type == NODE_INT && v[0].value == 0)
					return construct(OP_ADD, v.slice(1));
				else
					return construct(OP_ADD, v);
			}
			else if(v.length == 0)
				return createNode(NODE_INT, 0);
		}
	}
	else {
		return node;
	}
}

// Simplify Sum Recursive (u)
// Function responsible to bring children up if the node is a sum
// Also calls the function group_all_sum_terms that groups terms in the sum
function simplify_sum_rec(children)
{
	var ret = 0;
	var new_children = new Array();
	for(var i = 0; i < children.length; i++) {
		var simplified = kind(children[i]) == OP_ADD ? simplify_sum_rec(children[i].children) : children[i];
		if(Array.isArray(simplified))
		{
			new_children = new_children.concat(simplified);
		} else {
			new_children.push(simplified);
		}
	}
	ret = group_all_sum_terms(new_children);
	ret.sort(compare);
	//ret.reverse();
	return ret;
}

// Group Sum Terms (l, r)
// If possible, group the terms transforming them into multiples, adding integers and so on
function group_sum_terms(left, right)
{
	if(kind(left) == NODE_INT && left.value == 0)
	{
		return right;
	}
	else if(kind(right) == NODE_INT && right.value == 0)
	{
		return left;
	}
	else if((kind(left) == NODE_INT && kind(right) == NODE_INT) || (is_fraction(left) && is_fraction(right)) || (kind(left) == NODE_INT && is_fraction(right)) ||  (is_fraction(left) && kind(right) == NODE_INT))
	{
		return simplify_rational_number(evaluate_sum(left, right));
	}
	else
	{
		var l = term(left);
		var r = term(right);
		if(l !== undefined && r !== undefined && compare(term(left), term(right)) == 0)
			return simplify_product(construct(OP_MUL, simplify_sum(construct(OP_ADD, constant(left), constant(right))), term(left)));
	}
}

// Group All Sum Terms (u)
// Responsible for grouping all the children of a sum
function group_all_sum_terms(arg)
{
	var children = arg.slice(0); // copy array
	var i = 0;
	while(i < children.length - 1)
	{
		var new_children = new Array(children[i]);
		for(var j=i+1; j < children.length; j++)
		{
			var n = group_sum_terms(new_children[0], children[j]);
			if(n === undefined)
			{
				new_children.push(children[j]);
			}
			else
			{
				new_children[0] = n;
			}
		}
		var left = children.slice(0, i);
		var right = new_children.slice(0);
		var total = left.concat(right);
		children = total.slice(0);
		i++;
	}

	return children;
}

// Simplify Product (u)
// The operator Simplify product(u)
// Let u be a product with one or more operands that
// are ASAEs, and let L = [u 1 , . . . , u n ] be the list of the operands of u.
// The Simplify product (u) operator is defined by the following transforma-
// tion rules. [page 98]
function simplify_product(node)
{
	if(kind(node) == OP_MUL){
		for(var i = 0; i < node.children.length; i++)
		{
			if(kind(node.children[i]) == NODE_INT && node.children[i].value == 0)
					return createNode(NODE_INT, 0);
		}
		if(node.children.length == 1)
			return node.children[0];
		else {
			var v = simplify_product_rec(node.children);
			if(v.length == 1)
				return v[0];
			else if(v.length >= 2)
			{
				if(v[0].type == NODE_INT && v[0].value == 1)
					return construct(OP_MUL, v.slice(1));
				else
					return construct(OP_MUL, v);
			}
			else if(v.length == 0)
				return createNode(NODE_INT, 1);
		}
	}
	else {
		return node;
	}
}

// Simplify Product Recursive (u)
// Function responsible to bring children up if the node is a product
// Also calls the function group_all_product_terms that groups terms in the product
function simplify_product_rec(children)
{
	var ret = 0;
	var new_children = new Array();
	for(var i = 0; i < children.length; i++) {
		var simplified = kind(children[i]) == OP_MUL ? simplify_product_rec(children[i].children) : children[i];
		if(Array.isArray(simplified))
		{
			new_children = new_children.concat(simplified);
		} else {
			new_children.push(simplified);
		}
	}
	ret = group_all_product_terms(new_children);
	ret.sort(compare);
	return ret;
}

// Group Product Terms (l, r)
// If possible, group the terms transforming them into a power, multiplying integers and so on
function group_product_terms(left, right)
{
	// if(kind(left) == NODE_INT && kind(right) == NODE_INT)
	// {
	// 	return createNode(NODE_INT, left.value * right.value);
	// }
	//else if(kind(left) == NODE_INT && left.value == 1)
	if(kind(left) == NODE_INT && left.value == 1)
	{
		return right;
	}
	else if(kind(right) == NODE_INT && right.value == 1)
	{
		return left;
	}
	//else if((is_fraction(left) && is_fraction(right)) || (kind(left) == NODE_INT && is_fraction(right)) ||  (is_fraction(left) && kind(right) == NODE_INT))
	else if((kind(left) == NODE_INT && kind(right) == NODE_INT) || (is_fraction(left) && is_fraction(right)) || (kind(left) == NODE_INT && is_fraction(right)) ||  (is_fraction(left) && kind(right) == NODE_INT))
	{
		// var left_num = is_fraction(left) ? left.children[0].value : left.value;
		// var left_den = is_fraction(left) ? left.children[1].value : 1;
		// var right_num = is_fraction(right) ? right.children[0].value : right.value;
		// var right_den = is_fraction(right) ? right.children[1].value : 1;
		// var num = left_num * right_num;
		// var den = left_den * right_den;
		return simplify_rational_number(evaluate_product(left, right));
		//return simplify_rational_number(construct(OP_DIV, createNode(NODE_INT, num), createNode(NODE_INT, den)));
	}
	else if(compare(base(left), base(right)) == 0)
	{
		return simplify_power(construct(OP_POW, base(left), simplify_sum(construct(OP_ADD, exponent(left), exponent(right)))));
	}
}

// Group All Product Terms (u)
// Responsible for grouping all the children of a product
function group_all_product_terms(arg)
{
	var children = arg.slice(0); // copy array
	var i = 0;
	while(i < children.length - 1)
	{
		var new_children = new Array(children[i]);
		for(var j=i+1; j < children.length; j++)
		{
			var n = group_product_terms(new_children[0], children[j]);
			if(n === undefined)
			{
				new_children.push(children[j]);
			}
			else
			{
					new_children[0] = n;
			}
		}
		var left = children.slice(0, i);
		var right = new_children.slice(0);
		var total = left.concat(right);
		children = total.slice(0);
		i++;
	}

	return children;
}

// Simplify Difference (u)
// The operator Simplify difference(u) is based on the basic difference
// transformations −u = (−1) · u and u − v = u + (−1) · v. [page 106]
function simplify_difference(node)
{
	if(node.type == NODE_INT)
		return createNode(NODE_INT, -node.value);
	else
		return simplify_product(construct(OP_MUL, createNode(NODE_INT, -1), node));
}

// Simplify Quotient (u)
// The operator Simplify quotient, which simplifies quotients, is based on the
// basic quotient transformation u/v = u · v −1 [page 106]
function simplify_quotient(node)
{
	return simplify_product(construct(OP_MUL, node.children[0], construct(OP_POW, node.children[1], createNode(NODE_INT, -1))));
}

// Simplify RNE (u)
// [page 40]
function simplify_RNE(node)
{
	var v = simplify_RNE_rec(node);
	if(v !== undefined)
	{
		return simplify_rational_number(v);
	}
}

// Simplify RNE rec(u)
// [page 41]
function simplify_RNE_rec(node)
{
	if(kind(node) == NODE_INT) return node;
	else if(is_fraction(node))
	{
		//if Denominator fun(u) = 0 then Return(Undefined)
		return node;
	}
	else if(number_of_operands(node) == 1)
	{
		var v = simplify_RNE_rec(operand(node, 0));
		return v;
	}
	else if(number_of_operands(node) == 2)
	{
		if(kind(node) == OP_POW)
		{
			var v = simplify_RNE_rec(operand(node, 0));
			return evaluate_power(v, operand(node, 1));
		}	else {
			var v = simplify_RNE_rec(operand(node, 0));
			var w = simplify_RNE_rec(operand(node, 1));
			if(kind(node) == OP_ADD)
				return evaluate_sum(v, w);
			else if(kind(node) == OP_MUL)
				return evaluate_product(v, w);
			else if(kind(node) == OP_DIV)
				return evaluate_quotient(v, w);
		}
	}
}

// Simplify Function (u)
function simplify_function(node)
{
	if(kind(node) == FUNC_SQRT)
	{
		return simplify_power(construct(OP_POW, operand(node, 0), construct(OP_DIV, createNode(NODE_INT, 1), createNode(NODE_INT, 2))));
	}
	else if(kind(node) == FUNC_SIN && kind(operand(node, 0)) == NODE_INT && operand(node, 0).value == 0)
	{
		return createNode(NODE_INT, 0);
	}
	else if(kind(node) == FUNC_TAN && kind(operand(node, 0)) == NODE_INT && operand(node, 0).value == 0)
	{
		return createNode(NODE_INT, 0);
	}
	else if(kind(node) == FUNC_COS && kind(operand(node, 0)) == NODE_INT && operand(node, 0).value == 0)
	{
		return createNode(NODE_INT, 1);
	}
	else if(kind(node) == FUNC_SEC && kind(operand(node, 0)) == NODE_INT && operand(node, 0).value == 0)
	{
		return createNode(NODE_INT, 1);
	}
	else {
		return node;
	}
}
