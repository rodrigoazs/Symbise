
// Evaluate quotient (v,w)
// an integer or a fraction in function notation
function evaluate_quotient(v, w)
{
		return construct(OP_DIV, createNode(NODE_INT, numerator_fun(v) * denominator_fun(w)), createNode(NODE_INT, numerator_fun(w) * denominator_fun(v)));
}

// Evaluate product (v,w)
// an integer or a fraction in function notation
function evaluate_product(v, w)
{
		if(is_fraction(v) || is_fraction(w))
		{
			return construct(OP_DIV, createNode(NODE_INT, numerator_fun(v) * numerator_fun(w)), createNode(NODE_INT, denominator_fun(v) * denominator_fun(w)));
		}	else {
			return createNode(NODE_INT, numerator_fun(v) * numerator_fun(w));
		}
}

// Evaluate sum (v,w)
// an integer or a fraction in function notation
function evaluate_sum(v, w)
{
		if(is_fraction(v) || is_fraction(w))
		{
			return construct(OP_DIV, createNode(NODE_INT, numerator_fun(v) * denominator_fun(w) + numerator_fun(w) * denominator_fun(v)), createNode(NODE_INT, denominator_fun(v) * denominator_fun(w)));
		}	else {
			return createNode(NODE_INT, numerator_fun(v) + numerator_fun(w));
		}
}

// Evaluate power (v, n);
// v : an integer or a fraction in function notation
// n : an integer;
function evaluate_power(v, n)
{
	if(numerator_fun(v) == 0)
	{
		if(n.value > 0)
		{
			return createNode(NODE_INT, 0);
		}
		else {
			return createNode(OP_POW, v, n);
		}
	}
	else
	{
		if(n.value > 0)
		{
			var s = evaluate_power(v, createNode(NODE_INT, n.value-1));
			return evaluate_product(s, v);
		}
		else if(n.value == 0)
		{
			return createNode(NODE_INT, 1);
		}
		else if(n.value == -1)
		{
			// check again in the book [page 42]
			return construct(OP_DIV, createNode(NODE_INT, denominator_fun(v)), createNode(NODE_INT, numerator_fun(v)));
		}
		else if(n.value < -1)
		{
			var s = construct(OP_DIV, createNode(NODE_INT, denominator_fun(v)), createNode(NODE_INT, numerator_fun(v)));
			return evaluate_power(s, createNode(NODE_INT, -n.value));
		}
	}
}
