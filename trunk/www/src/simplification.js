// Basic Algebraic Expressions
// The BAEs are similar to conventional algebraic expressions, except now
// products and sums can have one or more operands [page 80]
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
        			ret = node;
        			break;
        	}
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
	if(node.type == NODE_CONST || node.type == NODE_VAR)
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
	if(node.type == NODE_CONST || node.type == NODE_VAR)
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