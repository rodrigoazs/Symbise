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
			// var children = node.children.slice(0);
			// for(var i = 0; i < children.length; i++)
			// {
			// 	children[i] = automatic_simplify(children[i]);
			// }
			switch(node.value)
			{
				case OP_DIV:
					var left = automatic_simplify(node.children[0]);
					var right = automatic_simplify(node.children[1]);
					// identify fraction
					if(left.type == NODE_INT && right.type == NODE_INT)
					{
						ret = simplify_rational_number(construct(OP_DIV, left, right));
					// identify quotient
					}else{
						ret = simplify_quotient(node);
					}
					break;
				case OP_MUL:
					// not implemented yet
					ret = construct(OP_MUL, simplify_product(automatic_simplify(node.children[0])), simplify_product(automatic_simplify(node.children[1])));
					ret.children.sort(compare);
					break;
				case OP_ADD:
					ret = construct(OP_ADD, simplify_sum(automatic_simplify(node.children[0])), simplify_sum(automatic_simplify(node.children[1])));
					ret.children.sort(compare);
					break;
				case OP_SUB:
					ret = construct(OP_ADD, automatic_simplify(node.children[0]), simplify_difference(automatic_simplify(node.children[1])));
					break;
				case OP_NEG:
					ret = simplify_difference(automatic_simplify(node.children[0]));
					break;
				case OP_POW:
					// not implemented yet
					ret = construct(OP_POW, automatic_simplify(node.children[0]), automatic_simplify(node.children[1]));
					break;
			}
			break;
		case NODE_FUNC:
			// not implemented yet
			var new_children = new Array();
			for(var i = 0; i < node.children.length; i++) {
				new_children[i] = automatic_simplify(node.children[i]);
			}
			ret = createNodeWithArray(node.type, node.value, new_children);
			break;
	}
	return ret;
}

// Simplify Rational Number (u)
// Let u be an integer or a fraction with non-zero denominator. The operator
// Simplify rational number(u) transforms u to a rational number in standard form [page 37]
function simplify_rational_number(node)
{
	var n = node.children[0].value;
	var d = node.children[1].value;
	if(n % d == 0) return createNode(NODE_INT, (n / d) >> 0); // compare remainder and return integer quotient
	else{
		var g = gcd(n, d);
		if(d > 0)
			return createNode(NODE_OP, OP_DIV, createNode(NODE_INT, (n / g) >> 0), createNode(NODE_INT, (d / g) >> 0));
		else
			return createNode(NODE_OP, OP_DIV, createNode(NODE_INT, (-n / g) >> 0), createNode(NODE_INT, (-d / g) >> 0));
	}
}

// Simplify Sum (u)
// The operator Simplify sum(u)
// In development
function simplify_sum(node)
{
	if(kind(node) == OP_ADD)
	{
		ret = node.children;
	}else{
		ret = node;
	}
	return ret;
}

// Simplify Product (u)
// The operator Simplify product(u)
// In development
function simplify_product(node)
{
	if(kind(node) == OP_MUL)
	{
		ret = node.children;
	}else{
		ret = node;
	}
	return ret;
}

// Simplify Difference (u)
// The operator Simplify difference(u) is based on the basic difference
// transformations −u = (−1) · u and u − v = u + (−1) · v. [page 106]
function simplify_difference(node)
{
	if(node.type == NODE_INT)
		return createNode(NODE_INT, -node.value);
	else
		return construct(OP_MUL, createNode(NODE_INT, -1), node);
}

// Simplify Quotient (u)
// The operator Simplify quotient, which simplifies quotients, is based on the
// basic quotient transformation u/v = u · v −1 [page 106]
function simplify_quotient(node)
{
	return construct(OP_MUL, simplify_product(automatic_simplify(node.children[0])), construct(OP_POW, automatic_simplify(node.children[1]), createNode(NODE_INT, -1)));
}

// Basic Algebraic Expressions
// The BAEs are similar to conventional algebraic expressions, except now
// products and sums can have one or more operands [page 80]
// BAE was created to transform a whole expression into BAE. However, in the automatic_simplify this simplification
// is already pro
function BAE_transform(node)
{
	var ret = 0;

	switch(node.type)
  	{
    	case NODE_OP:
    		switch(node.value)
    		{
        		case OP_ADD:
        			var left = BAE_transform(node.children[0]);
        			var right = BAE_transform(node.children[1]);
        			var left_op = kind(left) == OP_ADD ? operands(left) : left;
        			var right_op = kind(right) == OP_ADD ? operands(right) : right;
        			ret = construct(OP_ADD, left_op, right_op);
        			break;
        		case OP_MUL:
        			var left = BAE_transform(node.children[0]);
        			var right = BAE_transform(node.children[1]);
        			var left_op = kind(left) == OP_MUL ? operands(left) : left;
        			var right_op = kind(right) == OP_MUL ? operands(right) : right;
        			ret = construct(OP_MUL, left_op, right_op);
        			break;
        		default:
							var new_childs = new Array();
							for(var i = 0; i < node.children.length; i++) {
								new_childs[i] = BAE_transform(node.children[i]);
							}
							ret = createNodeWithArray(node.type, node.value, new_childs);
        			break;
        	}
        	break;
				case NODE_FUNC:
					var new_childs = new Array();
					for(var i = 0; i < node.children.length; i++) {
						new_childs[i] = BAE_transform(node.children[i]);
					}
					ret = createNodeWithArray(node.type, node.value, new_childs);
					break;
        default:
        	ret = node;
        	break;
    }
    return ret;
}


// Kind (u)
// This operator returns the type of expression (e.g., symbol,
// integer, fraction, +, ∗, ∧, and function names). For example, Kind (m ∗ x + b) → +. [page 8]
function kind(node)
{
	if(node.type == NODE_INT || node.type == NODE_SYM)
		return node.type;
	else
		return node.value;
}

// Number_of_operands(u)
// This operator returns the number of operands
// of the main operator of u. For example,
// Number of operands(a ∗ x + b ∗ x + c) → 3 [page 8]
function number_of_operands(node)
{
	return node.children.length;
}

// Operand (u, i)
// This operator returns the ith operand of the main
// operator of u. For example, Operand (m ∗ x + b, 2) → b [page 9]
function operand(node, pos)
{
	return node.children[pos];
}

// Operands (u)
// This operator returns all the operands of the main
function operands(node)
{
	if(node.type == NODE_INT || node.type == NODE_SYM)
		return node;
	else
		return node.children;
}

// Construct(f, L)
// Let f be an operator (+, ∗, =, etc.) or a symbol,
// and let L = [a, b, . . . , c] be a list of expressions. This operator returns
// an expression with main operator f and operands a, b, . . . , c. For
// example, Construct (” + ”, [a, b, c]) → a + b + c. [page 9]
function construct(operator, expressions)
{
	var n = new NODE();
	n.type = NODE_OP;
	n.value = operator;
	n.children = new Array();


	if(expressions instanceof NODE)
	{
		n.children.push(expressions);
	}else{
		for(var i = 0; i < expressions.length; i++)
		{
			n.children.push( expressions[i] );
		}
	}

	if(arguments.length == 3)
	{
		if(arguments[2] instanceof NODE)
		{
			n.children.push(arguments[2]);
		}else{
			for(var i = 0; i < arguments[2].length; i++)
			{
				n.children.push( arguments[2][i] );
			}
		}
	}

	return n;
}

// Same function as createNode instead of using array parameter
function createNodeWithArray(type, value, childs)
{
  var n = new NODE();
  n.type = type;
  n.value = value;
  n.children = new Array();

  for( var i = 0; i < childs.length; i++ )
  	n.children.push( childs[i] );

  return n;
}

// Returns the GCD of the given integers. Each input will be transformer into non-negative.
function gcd(a, b)
{
	a = Math.abs(a);
	b = Math.abs(b);
    if (!a) return b;
    if (!b) return a;

    while (1) {
        a%= b;
        if (!a) return b;
        b%= a;
        if (!b) return a;
    }
}
