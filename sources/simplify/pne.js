// Power Notation Expressions
// The PNEs are algebraic expressions that have divisions instead of negative powers
// and square roots instead of powers of 1/2
// It works only with ASAEs
function PNE_transform(n)
{
  var ret = 0;
  var node = n;
  switch(node.type)
  {
    case NODE_OP:
      switch(node.value)
      {
        case OP_MUL:
          var quot = form_quotient(node);
          if(kind(quot[1]) == NODE_INT && quot[1].value == 1)
          {
            ret = node;
          }else {
            if(is_fraction(quot[0]))
            {
              var num = createNode(NODE_INT, quot[0].children[0].value);
              var dem = simplify_product(construct(OP_MUL, [createNode(NODE_INT, quot[0].children[1].value)].concat(quot[1])));
              ret = construct(OP_DIV, num, dem);
            }
            else if(kind(quot[0]) == OP_MUL && is_fraction(quot[0].children[0]))
            {
              console.log('here');
              console.log([createNode(NODE_INT, quot[0].children[0].children[1].value)].concat(quot[1].children));
              var num = simplify_product(construct(OP_MUL, [createNode(NODE_INT, quot[0].children[0].children[0].value)].concat(quot[0].children.slice(1))));
              var dem = simplify_product(construct(OP_MUL, [createNode(NODE_INT, quot[0].children[0].children[1].value)].concat(quot[1])));
              ret = construct(OP_DIV, num, dem);
            }
            else
            {
              ret = construct(OP_DIV, quot[0], quot[1]);
            }
          }
          break;
        case OP_POW:
          if(is_fraction(operand(node, 1)) && operand(operand(node, 1), 0).value == 1 && operand(operand(node, 1), 1).value == 2)
          {
            ret = createNode(NODE_FUNC, FUNC_SQRT, operand(node, 0));
          }
          else if(!signal(operand(node, 1)))
          {
            console.log('n', node);
            var quot = form_quotient(node);
            console.log('quo', quot);
            ret = construct(OP_DIV, quot[0], quot[1]);
          }
          else
          {
            ret = node;
          }
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
  var childs = new Array();
  for(var i = 0; i < ret.children.length; i++) {
      childs[i] = PNE_transform(ret.children[i]);
  }
  ret = createNodeWithArray(ret.type, ret.value, childs);
  return ret;
}
