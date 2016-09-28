function solve_polynomial(node)
{
  var roots = possible_roots_of_polynomial(node);
  if(roots != null)
  {
    for(var i=0; i<roots.length; i++)
    {
      var a = automatic_simplify(substitute(node, createSymbol("x"), roots[i]));
      console.log(stringEquation(roots[i]) + " result: "+ stringEquation(a));
    }
  }
  return null;
}

function possible_roots_of_polynomial(node)
{
  var cf = coeficients_of_polynomial(node);
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

// Coeficients of Polynomial (n)
// If it is a valid polynomial returns its array of coeficients
// as ASAE
function coeficients_of_polynomial(node)
{
  var degree = identify_polynomial_degree(node);
  if(degree != null)
  {
    var coeficients = [];
    for(var i=0; i<=degree; i++){ coeficients[i] = []; }
    for(var i=0; i<node.children.length; i++)
    {
      if(free_of_symbol(node.children[i], "x"))
      {
        coeficients[0].push(node.children[i]);
      }
      else
      {
        coeficients[1].push(term_of(node.children[i], createNode(NODE_SYM, "x")));
        for(var j=2; j<=degree; j++)
        {
          coeficients[j].push(term_of(node.children[i], construct(OP_POW, createNode(NODE_SYM, "x"), createNode(NODE_INT, j))));
        }
      }
    }
    for(var i=0; i<=degree; i++){ coeficients[i] = automatic_simplify(construct(OP_ADD, coeficients[i])); }
    return coeficients;
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
