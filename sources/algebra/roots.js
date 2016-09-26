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
