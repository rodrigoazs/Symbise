
// Numerator Fun (v)
// Returns the own integer
function numerator_fun(v)
{
	if(kind(v) == NODE_INT)
	{
		return v.value;
	}
	else if(is_fraction(v))
	{
		return operand(v, 0).value;
	}
}

// Denominator Fun (v)
// Returns the own integer
function denominator_fun(v)
{
	if(kind(v) == NODE_INT)
	{
		return 1;
	}
	else if(is_fraction(v))
	{
		return operand(v, 1).value;
	}
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

// Base (u)
// This operator returns the base of an ASAE
function base(node)
{
	if(kind(node) == OP_POW)
		return operand(node, 0);
	else
		return node;
}

// Term (u)
// [page 83]
function term(node)
{
	if(kind(node) == NODE_SYM || kind(node) == OP_ADD || kind(node) == OP_POW || node.type == NODE_FUNC)
	{
		return construct(OP_MUL, node);
	}
	else if(kind(node) == OP_MUL )
	{
		if(kind(operand(node, 0)) == NODE_INT || is_fraction(kind(operand(node, 0))))
			return construct(OP_MUL, node.children.slice(1));
		else
			return node;
	}
}

// Constant (u)
// [page 83]
function constant(node)
{
	if(kind(node) == NODE_SYM || kind(node) == OP_ADD || kind(node) == OP_POW || node.type == NODE_FUNC)
	{
		return createNode(NODE_INT, 1);
	}
	else if(kind(node) == OP_MUL )
	{
		if(kind(operand(node, 0)) == NODE_INT || is_fraction(kind(operand(node, 0))))
			return operand(node, 0);
		else
			return createNode(NODE_INT, 1);
	}
}

// Exponent (u)
// This operator returns the exponent of an ASAE
function exponent(node)
{
	if(kind(node) == OP_POW)
		return operand(node, 1);
	else
		return createNode(NODE_INT, 1);
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

// Returns the signal of a term. The node needs to be simplified.
// false: < 0
// true: >= 0
function signal(term)
{
	if(kind(term) == NODE_INT)
	{
		return term.value >= 0;
	}else if(kind(term) == OP_MUL)
	{
		if(kind(term.children[0]) == NODE_INT)
		{
			return term.children[0].value >= 0;
		}
		else return true;
	}else return true;
}

// Is Fraction (u)
// Return if the node is a fraction or not
function is_fraction(u)
{
	return u.type == NODE_OP && u.value == OP_DIV && u.children[0].type == NODE_INT && u.children[1].type == NODE_INT;
}

// Free of Symbol (u, s)
// Return true if the node u does not contain a certain symbol s, otherwise returns false
function free_of_symbol(node, symbol)
{
	if(kind(node) == NODE_SYM && node.value == symbol)
	{
		return false;
	}
	else if(kind(node) == NODE_SYM && node.value != symbol)
	{
		return true;
	}
	else
	{
		var ret = true;
		for(var i = 0; i < node.children.length; i++)
		{
			ret = ret && free_of_symbol(node.children[i], symbol);
			if(!ret) return ret;
		}
		return ret;
	}
}

// Factor Out (u, s)
// Factor out constants and variables from an ASAE u checking for
// a symbol s and so returning two products
// [constants, variables]
// returns undefined if does not contain constants or variables
function factor_out(node, symbol)
{
	if(kind(node) == OP_MUL)
	{
		var constants = new Array();
		var variables = new Array();
		for(var i = 0; i < node.children.length; i++)
		{
			if(free_of_symbol(node.children[i], symbol))
			{
				constants.push(node.children[i]);
			}
			else
			{
				variables.push(node.children[i]);
			}
		}
		return [constants.length > 1 ? construct(OP_MUL, constants) : constants[0], variables.length > 1 ? construct(OP_MUL, variables) : variables[0]];
	}
	else
	{
		if(free_of_symbol(node, symbol))
		{
			return [node, undefined];
		}
		else
		{
			return [undefined, node];
		}
	}
}
