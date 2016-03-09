// Power Notation Expressions
// The PNEs are algebraic expressions that have divisions instead of negative powers
// and square roots instead of powers of 1/2
function PNE_transform(n)
{
  var ret = 0;
  var childs = new Array();
  for(var i = 0; i < n.children.length; i++) {
    if(kind(n) != OP_MUL)
      childs[i] = PNE_transform(n.children[i]);
    else
      childs[i] = n.children[i];
  }
  var node = createNodeWithArray(n.type, n.value, childs);
  switch(node.type)
  {
    case NODE_OP:
      switch(node.value)
      {
        case OP_MUL:
          var positives = new Array();
          var negatives = new Array();
          for(var i = 0; i < node.children.length; i++) {
            if(kind(node.children[i]) != OP_POW)
            {
                positives.push(node.children[i]);
            }
            else // OP_POW
            {
              if(signal(operand(node.children[i], 1)))
              {
                positives.push(node.children[i]);
              }
              else
              {
                var base = operand(node.children[i], 0);
                var exponent = operand(node.children[i], 1);
                if(kind(exponent) == NODE_INT)
                {
                  negatives.push(simplify_power(construct(OP_POW, base, createNode(NODE_INT, -1*exponent.value))));
                } else {
                  exponent.children[0].value = -1*exponent.children[0].value;
                  negatives.push(simplify_power(construct(OP_POW, base, simplify_product(construct(OP_MUL, exponent.children)))));
                }
              }
            }
          }
          if(negatives.length)
          {
            if(positives.length == 0)
            {
              positives.push(createNode(NODE_INT, 1));
            }
            ret = construct(OP_DIV, construct(OP_MUL, positives), construct(OP_MUL, negatives));
          }else{
            ret = construct(OP_MUL, positives);
          }
          break;
        case OP_POW:
          if(is_fraction(operand(node, 1)) && operand(operand(node, 1), 0).value == 1 && operand(operand(node, 1), 1).value == 2)
          {
            ret = createNode(NODE_FUNC, FUNC_SQRT, operand(node, 0));
          }
          else if(is_fraction(operand(node, 1)) && operand(operand(node, 1), 0).value == -1 && operand(operand(node, 1), 1).value == 2)
          {
            ret = construct(OP_DIV, createNode(NODE_INT, 1), createNode(NODE_FUNC, FUNC_SQRT, operand(node, 0)));
          }
          else if(signal(operand(node, 1)) == false)
          {
            var base = operand(node, 0);
            var exponent = operand(node, 1);
            if(kind(exponent) == NODE_INT)
            {
              ret = construct(OP_DIV, createNode(NODE_INT, 1), simplify_power(construct(OP_POW, base, createNode(NODE_INT, -1*exponent.value))));
            } else {
              exponent.children[0].value = -1*exponent.children[0].value;
              ret = construct(OP_DIV, createNode(NODE_INT, 1), simplify_power(construct(OP_POW, base, simplify_product(construct(OP_MUL, exponent.children)))));
            }
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
  return ret;
}
