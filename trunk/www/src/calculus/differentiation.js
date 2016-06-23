// Symbolic Diff (u)
// Given an expression BAE or ASAE returns the derivative
// The output is an expression not simplified
function symbolic_diff(node)
{
  var ret = 0;

  if(!node)
    return 0;

  switch(node.type)
  {
    case NODE_OP:
      switch(node.value)
      {
        case OP_ADD:
          var children = new Array();
          for(var i = 0; i < node.children.length; i++)
          {
            children[i] = symbolic_diff(node.children[i]);
          }
          ret = construct(OP_ADD, children);
          //ret = construct(OP_ADD, symbolic_diff(node.children[0]), symbolic_diff(node.children[1]));
          break;
        case OP_SUB:
          ret = construct(OP_SUB, symbolic_diff(node.children[0]), symbolic_diff(node.children[1]));
          break;
        case OP_DIV:
          if(is_fraction(node))
          {
            ret = createNode(NODE_INT, 0);
          }
          else
          {
            ret = construct(OP_DIV, construct(OP_SUB, construct(OP_MUL, symbolic_diff(node.children[0]), node.children[1]), construct(OP_MUL, symbolic_diff(node.children[1]), node.children[0])), symbolicPower(node.children[1], createNode(NODE_INT, 2)));
          }
          break;
        case OP_MUL:
          if(node.children.length == 2)
          {
            ret = construct(OP_ADD, construct(OP_MUL, symbolic_diff(node.children[0]), node.children[1]), construct(OP_MUL, node.children[0], symbolic_diff(node.children[1])));
          }
          else
          {
            var children = node.children.slice(1);
            ret = construct(OP_ADD, construct(OP_MUL, symbolic_diff(node.children[0]), construct(OP_MUL, children)), construct(OP_MUL, node.children[0], symbolic_diff(construct(OP_MUL, children))));
          }
          //ret = construct(OP_ADD, construct(OP_MUL, symbolic_diff(node.children[0]), node.children[1]), construct(OP_MUL, symbolic_diff(node.children[1]), node.children[0]));
          break;
        case OP_NEG:
          ret = construct(OP_NEG, symbolic_diff(node.children[0]));
          break;
        case OP_POW:
          ret = construct(OP_ADD, construct(OP_MUL, construct(OP_MUL, node.children[1], symbolicPower(node.children[0], construct(OP_SUB, node.children[1], createNode(NODE_INT, 1)))), symbolic_diff(node.children[0])), construct(OP_MUL, construct(OP_MUL, symbolicPower(node.children[0], node.children[1]), createNode(NODE_FUNC, FUNC_NLOG, node.children[0])), symbolic_diff(node.children[1])));
          break;
      }
      break;

    case NODE_FUNC:
      switch(node.value)
      {
        case FUNC_SIN:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_COS, node.children[0]));
          break;
        case FUNC_COS:
          ret = construct(OP_NEG, construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SIN, node.children[0])));
          break;
        case FUNC_ASINH:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD,createNode(NODE_INT, 1), symbolicPower(node.children[0], createNode(NODE_INT, 2)))));
          break;
        case FUNC_SINH:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_COSH, node.children[0]));
          break;
        case FUNC_ASIN:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, createNode(NODE_INT, 1), symbolicPower(node.children[0], createNode(NODE_INT, 2)))));
          break;
        case FUNC_ACOSH:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, symbolicPower(node.children[0], createNode(NODE_INT, 2)), createNode(NODE_INT, 1))));
          break;
        case FUNC_COSH:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SINH, node.children[0]));
          break;
        case FUNC_ACOS:
          ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, 1, symbolicPower(node.children[0], createNode(NODE_INT, 2)))));
          break;
        case FUNC_ATANH:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_SUB, createNode(NODE_INT, 1), symbolicPower(node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_TANH:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), symbolicPower(createNode(NODE_FUNC, FUNC_SECH, node.children[0]), createNode(NODE_INT, 2)));
          break;
        case FUNC_ATAN:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_ADD,createNode(NODE_INT, 1), symbolicPower(node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_TAN:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), symbolicPower(createNode(NODE_FUNC, FUNC_SEC, node.children[0]), createNode(NODE_INT, 2)));
          break;
        case FUNC_ASECH:
          ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL,construct(OP_MUL,node.children[0], creteNode(NODE_FUNC, FUNC_SQRT, construct(OP_DIV, construct(OP_SUB, createNode(NODE_INT, 1), node.children[0]), construct(OP_ADD,1, node.children[0])))), construct(OP_ADD,1, node.children[0])));
          break;
        case FUNC_SECH:
          ret = construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL,createNode(NODE_FUNC, FUNC_SECH, node.children[0]), createNode(NODE_FUNC, FUNC_TANH, node.children[0])));
          break;
        case FUNC_ASEC:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_MUL,node.children[0], createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, symbolicPower(node.children[0], createNode(NODE_INT, 2)), createNode(NODE_INT, 1)))));
          break;
        case FUNC_SEC:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), construct(OP_MUL,createNode(NODE_FUNC, FUNC_TAN, node.children[0]), createNode(NODE_FUNC, FUNC_SEC, node.children[0])));
          break;
        case FUNC_ACSCH:
          ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL,createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD,createNode(NODE_INT, 1), construct(OP_DIV, createNode(NODE_INT, 1), symbolicPower(node.children[0], createNode(NODE_INT, 2))))), symbolicPower(node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_CSCH:
          ret = construct(OP_MUL,construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), createNode(NODE_FUNC, FUNC_COTH, node.children[0])), createNode(NODE_FUNC, FUNC_CSCH, node.children[0]));
          break;
		    case FUNC_ACSC:
          ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL,node.children[0], createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, symbolicPower(node.children[0], createNode(NODE_INT, 2)), createNode(NODE_INT, 1)))));
          break;
        case FUNC_CSC:
          ret = construct(OP_MUL,construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), createNode(NODE_FUNC, FUNC_COT, node.children[0])), createNode(NODE_FUNC, FUNC_CSC, node.children[0]));
          break;
        case FUNC_ACOTH:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_SUB, createNode(NODE_INT, 1), symbolicPower(node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_COTH:
          ret = construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), symbolicPower(createNode(NODE_FUNC, FUNC_CSCH, node.children[0]), createNode(NODE_INT, 2)));
          break;
        case FUNC_ACOT:
          ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_ADD,createNode(NODE_INT, 1), symbolicPower(node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_COT:
          ret = construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), symbolicPower(createNode(NODE_FUNC, FUNC_CSC, node.children[0]), createNode(NODE_INT, 2)));
          break;
        case FUNC_SQRT:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_MUL,createNode(NODE_INT, 2), createNode(NODE_FUNC, FUNC_SQRT, node.children[0])));
          break;
        case FUNC_EXP:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_EXP, node.children[0]));
          break;
        case FUNC_NLOG:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), node.children[0]);
          break;
        case FUNC_BLOG:
          ret = construct(OP_DIV, symbolic_diff(node.children[1]), construct(OP_MUL,node.children[1], createNode(NODE_FUNC, FUNC_NLOG, node.children[0])));
          break;
      }
      break;

    case NODE_SYM:
      if(node.value == "x")
        ret = createNode(NODE_INT, 1);
      else
        ret = createNode(NODE_INT, 0);
      break;

    case NODE_INT:
      ret = createNode(NODE_INT, 0);
      break;
  }

  return ret;
}
