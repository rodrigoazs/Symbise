// Solve Polynomial (node)
// Given any kind of polynomial, returns
// the roots found
function solve_polynomial(node)
{
  var roots = [];
  var coefficients = coefficients_of_polynomial(node);
  while(coefficients != null && coefficients.length > 0)
  {
    var root = get_polynomial_root(coefficients);
    if(root == null) return roots;
    roots = roots.concat(root);
    if(coefficients.length == 2) return roots;
    coefficients = briot_ruffini(coefficients, root);
  }
  return roots;
}

// Form polynomial from coefficients (cf)
// Given an array of coefficients, create back a polynomial
// as ASAE
function form_polynomial_from_coefficients(coefficients)
{
  var operands = [];
  for(var i=0; i<coefficients.length; i++)
  {
    operands.push(construct(OP_MUL, coefficients[i], construct(OP_POW, createSymbol("x"), createInteger(i))));
  }
  return automatic_simplify(construct(OP_ADD, operands));
}

// Get Polynomial Root (cf)
// Given the array of coefficients,
// uses bhaskara if its is quadratic or
// look for a possible root, evaluate and return it
function get_polynomial_root(coefficients)
{
  if(coefficients.length == 3)
  {
    var roots = bhaskara(coefficients[2], coefficients[1], coefficients[0]);
    return roots;
  }
  else
  {
    var possible_roots = possible_roots_of_polynomial(coefficients);
    if(possible_roots != null)
    {
      for(var i=0; i<possible_roots.length; i++)
      {
        var node = form_polynomial_from_coefficients(coefficients);
        var a = automatic_simplify(substitute(node, createSymbol("x"), possible_roots[i]));
        if(compare(a, createInteger(0)) == 0)
        {
          return possible_roots[i];
        }
      }
    }
  }
  return null;
}

// Possible roots of polynomial (cf)
// Given the array of coefficients of a polynomial, find its
// possible roots by guessing divisors of coefficient
// of x^0 and x^N
function possible_roots_of_polynomial(cf)
{
  if(cf != null)
  {
    var first = cf[cf.length-1];
    var last = cf[0];
    if(kind(last) == NODE_INT)
    {
      var d = [];
      var hash = {};
      var divisors = divisors_of(Math.abs(last.value));
      for(var i=0; i<divisors.length; i++)
      {
        var a1 = createInteger(-divisors[i]);
        var a2 = createInteger(divisors[i]);
        hash[stringEquation(a1)] = 1;
        hash[stringEquation(a2)] = 1;
        d.push(createInteger(-divisors[i]));
        d.push(createInteger(divisors[i]));
        var a3 = automatic_simplify(construct(OP_DIV, createInteger(-divisors[i]), createInteger(first.value)));
        var a4 = automatic_simplify(construct(OP_DIV, createInteger(divisors[i]), createInteger(first.value)));
        var s3 = stringEquation(a3);
        var s4 = stringEquation(a4);
        if(!(s3 in hash)) d.push(a3);
        if(!(s4 in hash)) d.push(a4);
      }
    }
    return d;
  }
  return null;

}

// Coefficients of Polynomial (n)
// If it is a valid polynomial returns its array of coefficients
// as ASAE
function coefficients_of_polynomial(node)
{
  var degree = identify_polynomial_degree(node);
  if(degree != null)
  {
    var coefficients = [];
    for(var i=0; i<=degree; i++){ coefficients[i] = []; }
    for(var i=0; i<node.children.length; i++)
    {
      if(free_of_symbol(node.children[i], "x"))
      {
        coefficients[0].push(node.children[i]);
      }
      else
      {
        coefficients[1].push(term_of(node.children[i], createNode(NODE_SYM, "x")));
        for(var j=2; j<=degree; j++)
        {
          coefficients[j].push(term_of(node.children[i], construct(OP_POW, createNode(NODE_SYM, "x"), createNode(NODE_INT, j))));
        }
      }
    }
    for(var i=0; i<=degree; i++){ coefficients[i] = automatic_simplify(construct(OP_ADD, coefficients[i])); }
    return coefficients;
  }
  return null;
}

// Identify Polynomial Degree (n)
// If it is a valid polynomial returns its degree
// otherwise returns null
function identify_polynomial_degree(node)
{
  var degree = 0;
  if(kind(node) == OP_ADD)
  {
    for(var i=0; i<node.children.length; i++)
    {
      var n = operand(node, i);
      var d = identify_polynomial_mul(n);
      if(d == null) return null;
      if(d > degree)
      {
        degree = d;
      }
    }
    return degree;
  }
  return null;
}

// Identify Polynomial Mul (n)
// If it is free of symbol x returns its degree 0,
// if it is product call polynomial power for each one
// otherwise returns null
function identify_polynomial_mul(n)
{
  if(free_of_symbol(n, "x"))
  {
    return 0; // 0 degree
  }
  else if(kind(n) == OP_MUL)
  {
    var d;
    for(var i=0; i<n.children.length; i++)
    {
      d = identify_polynomial_power(n.children[i]);
      if(d != null)
      {
        return d;
      }
    }
  }else{
    var d = identify_polynomial_power(n);
    if(d != null)
    {
      return d;
    }
  }
  return null;
}

// Identify Polynomial Power (n)
// If it is a symbol x returns its degree 1,
// if it is a power of integer returns its exponent
// otherwise returns null
function identify_polynomial_power(n)
{
  if(kind(n) == OP_POW && is_symbol(n.children[0], "x"))
  {
      if(kind(n.children[1]) == NODE_INT && n.children[1].value >= 0)
      {
        return n.children[1].value;
      }else{
        return null;
      }
  }
  else if(is_symbol(n, "x"))
  {
    return 1;
  }else
  {
    return null;
  }
}

// ------------ DEPRECATED FUNCTION ----------------------------
// Univariate Quadratic (u)
// Given an expression ASAE in form o univariate
// quadratic function, returns its roots.
// returns [] if its not quadratic
function univariate_quadratic(node)
{
  if(kind(node) == OP_ADD)
  {
    var a = [];
    var b = [];
    var c = [];
    for(var i=0; i<node.children.length; i++)
    {
      var a_term = term_of(node.children[i], construct(OP_POW, createNode(NODE_SYM, "x"), createNode(NODE_INT, 2)));
      var b_term = term_of(node.children[i], createNode(NODE_SYM, "x"));
      if(!free_of_symbol(a_term, "x") || !free_of_symbol(b_term, "x"))
      {
        return [];
      }
      a.push(a_term);
      b.push(b_term);
      if(kind(a_term) == NODE_INT && a_term.value == 0 && kind(b_term) == NODE_INT && b_term.value == 0)
      {
        c.push(node.children[i]);
      }
    }
    a = construct(OP_ADD, a);
    b = construct(OP_ADD, b);
    c = construct(OP_ADD, c);
  }
  else
  {
    var a = term_of(node, construct(OP_POW, createNode(NODE_SYM, "x"), createNode(NODE_INT, 2)));
    var b = term_of(node, createNode(NODE_SYM, "x"));
    var c = createNode(NODE_INT, 0);
    if(kind(a) == NODE_INT && a.value == 0 && kind(b) == NODE_INT && b.value == 0)
    {
      return [];
    }
  }
  return bhaskara(a, b, c);
}

// Bhaskara (a, b, c)
// Given the terms a, b and c
// returns its roots
function bhaskara(a, b, c)
{
  var l = construct(OP_MUL, createNode(NODE_INT, -1), b);
  var delta = construct(OP_ADD, construct(OP_POW, b, createNode(NODE_INT, 2)), construct(OP_MUL, createNode(NODE_INT, -1), construct(OP_MUL, [createNode(NODE_INT, 4), a, c])));
  var r = construct(OP_POW, delta, construct(OP_DIV, createNode(NODE_INT, 1), createNode(NODE_INT, 2)));
  var d = construct(OP_MUL, createNode(NODE_INT, 2), a);
  var x1 = construct(OP_MUL, construct(OP_ADD, l, r), construct(OP_POW, d, createNode(NODE_INT, -1)));
  var x2 = construct(OP_MUL, construct(OP_ADD, l, construct(OP_MUL, r, createNode(NODE_INT, -1))), construct(OP_POW, d, createNode(NODE_INT, -1)));
  return [automatic_simplify(x1), automatic_simplify(x2)];
}

// Briot-Ruffini (c, r)
// c: array of coefficients (integer nodes)
// r: root found (integer node)
function briot_ruffini(c, r)
{
  var new_c = c.slice();
  var temp = [];
  var new_pol = [];

  new_c.reverse();
  new_pol.push(new_c[0]);
  temp = temp.concat([null, createInteger(new_c[0].value*r.value)]);
  for(var i=1; i<new_c.length; i++)
  {
    var n = createInteger(new_c[i].value + temp[i].value);
    new_pol.push(n);
    temp.push(createInteger(n.value*r.value));
  }

  if(new_pol[new_pol.length-1].value != 0) return null;
  var ret_pol = [];
  for(var i=new_pol.length-2; i>=0; i--) { ret_pol.push(new_pol[i]); }
  return ret_pol;
}
