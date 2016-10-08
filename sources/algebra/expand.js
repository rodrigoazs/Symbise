// Algebraic Expand (u)
// u : an algebraic expression where all exponents of powers are integers;
function algebraic_expand(u)
{
  if(kind(u) == OP_ADD)
  {
    var v = operand(u, 0);
    var p = u.children.slice(1);
    var r = p.length == 1? p[0] : construct(OP_ADD, p);
    return construct(OP_ADD, algebraic_expand(v), algebraic_expand(r));
  }
  else if(kind(u) == OP_MUL)
  {
    var v = operand(u, 0);
    var p = u.children.slice(1);
    var r = p.length == 1? p[0] : construct(OP_MUL, p);
    return expand_product(algebraic_expand(v), algebraic_expand(r));
  }
  else if(kind(u) == OP_POW)
  {
    var base = operand(u, 0);
    var exponent = operand(u, 1);
    if(kind(exponent) == NODE_INT && exponent.value >= 2)
    {
      return expand_power(algebraic_expand(base), exponent.value);
    }
  }
  return u;
}

// Expand Product (r, s)
// r,s : expanded algebraic expressions, where all exponents of powers are
// integers;
function expand_product(r, s)
{
  if(kind(r) == OP_ADD)
  {
    var f = operand(r, 0);
    var p = r.children.slice(1);
    var t = p.length == 1? p[0] : construct(OP_ADD, p);
    return construct(OP_ADD, expand_product(f, s), expand_product(t, s));
  }
  else if(kind(s) == OP_ADD)
  {
    return expand_product(s, r);
  }
  else
  {
    return construct(OP_MUL, r, s);
  }
}

// Expand Power (u)
// u : an expanded algebraic expression where all exponents of powers are
// integers;
// n : a non-negative integer;
function expand_power(u, n)
{
  if(kind(u) == OP_ADD)
  {
    var f = operand(u, 0);
    var p = u.children.slice(1);
    var r = p.length == 1? p[0] : construct(OP_ADD, p);
    var s = createNode(NODE_INT, 0);
    for(var i=0; i <= n; i++)
    {
      //var fat=n=>(n<2)?1:fat(n-1)*n;
      var c = combination(n, i); //fat(n) / (fat(i) * fat(n-i));
      s = construct(OP_ADD, s, expand_product(construct(OP_MUL, c, construct(OP_POW, f, createInteger(n-i))), expand_power(r, i)));
    }
    return s;
  }
  else
  {
    return construct(OP_POW, u, createInteger(n));
  }
}
