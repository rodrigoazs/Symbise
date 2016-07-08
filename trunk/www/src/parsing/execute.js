// Execute (u)
// Given a expression BAE or ASAE and a dictionary of variables with their
// respect values, evaluate the expression and returns a numeric value
function execute(node, sub)
{
  var ret = 0;

  if(!node)
  return 0;

  switch( node.type)
  {
    case NODE_OP:
      switch(node.value)
      {
        case OP_ADD:
          var sum = 0;
          for(var i = 0; i < node.children.length; i++)
          {
            sum += execute(node.children[i], sub);
          }
          ret = sum;
          break;
        case OP_SUB:
          ret = execute(node.children[0], sub) - execute(node.children[1], sub);
          break;
        case OP_DIV:
          ret = execute(node.children[0], sub) / execute(node.children[1], sub);
          break;
        case OP_MUL:
          var prod = 1;
          for(var i = 0; i < node.children.length; i++)
          {
            prod *= execute(node.children[i], sub);
          }
          ret = prod;
          break;
        case OP_NEG:
          ret = -execute(node.children[0], sub);
          break;
        case OP_POW:
          if(kind(node.children[0], sub) == NODE_SYM && node.children[0].value == "e")
          {
            ret = Math.exp(execute(node.children[1], sub));
          }
          else
          {
            ret = Math.pow(execute(node.children[0], sub), execute(node.children[1], sub));
          }
          break;
      }
      break;

    case NODE_FUNC:
      switch(node.value)
      {
        case FUNC_SIN:
          ret = Math.sin(execute(node.children[0], sub));
          break;
        case FUNC_COS:
          ret = Math.cos(execute(node.children[0], sub));
          break;
        case FUNC_TAN:
          ret = Math.tan(execute(node.children[0], sub));
          break;
        case FUNC_SINH:
          ret = Math.sinh(execute(node.children[0], sub));
          break;
        case FUNC_COSH:
          ret = Math.cosh(execute(node.children[0], sub));
          break;
        case FUNC_TANH:
          ret = Math.tanh(execute(node.children[0], sub));
          break;
        case FUNC_ASIN:
          ret = Math.asin(execute(node.children[0], sub));
          break;
        case FUNC_ACOS:
          ret = Math.acos(execute(node.children[0], sub));
          break;
        case FUNC_ATAN:
          ret = Math.atan(execute(node.children[0], sub));
          break;
        case FUNC_ASINH:
          ret = Math.asin(execute(node.children[0], sub));
          break;
        case FUNC_ACOSH:
          ret = Math.acosh(execute(node.children[0], sub));
          break;
        case FUNC_ATANH:
          ret = Math.atanh(execute(node.children[0], sub));
          break;
        case FUNC_CSC:
          ret = 1 / Math.sin(execute(node.children[0], sub));
          break;
        case FUNC_SEC:
          ret = 1 / Math.cos(execute(node.children[0], sub));
          break;
        case FUNC_COT:
          ret = 1 / Math.tan(execute(node.children[0], sub));
          break;
        case FUNC_CSCH:
          ret = 1 / Math.sin(execute(node.children[0], sub));
          break;
        case FUNC_SECH:
          ret = 1 / Math.cos(execute(node.children[0], sub));
          break;
        case FUNC_COTH:
          ret = 1 / Math.tan(execute(node.children[0], sub));
          break;
        case FUNC_ACSC:
          ret = Math.asin(1 / execute(node.children[0], sub));
          break;
        case FUNC_ASEC:
          ret = Math.acos(1 / execute(node.children[0], sub));
          break;
        case FUNC_ACOT:
          ret = Math.atan(1 / execute(node.children[0], sub)) ;
          break;
        case FUNC_ACSCH:
          var func_executed = execute(node.children[0], sub);
          ret = Math.log(1 / func_executed + Maths.sqrt(1 / Math.pow(func_executed, 2) + 1));
          break;
        case FUNC_ASECH:
          var func_executed = execute(node.children[0], sub);
          ret = Math.log(Math.sqrt(1 / Math.pow(func_executed, 2) - 1) + 1 / func_executed);
          break;
        case FUNC_ACOTH:
          var func_executed = execute(node.children[0], sub);
          ret = (Math.log((func_executed+ 1) / func_executed) + Math.log(func_executed/(func_executed-1))) / 2;
          break;
        case FUNC_SQRT:
          ret = Math.sqrt(execute(node.children[0], sub));
          break;
        // case FUNC_EXP:
        //   ret = Math.exp(execute(node.children[0], sub));
        //   break;
        case FUNC_NLOG:
          ret = Math.log(execute(node.children[0], sub));
          break;
        case FUNC_BLOG:
          ret = Math.log(execute(node.children[1], sub)) / Math.log(execute(node.children[0], sub));
          break;
      }
      break;

    case NODE_SYM:
      if(node.value == "e")
      {
        ret = Math.exp(1);
      }
      else
      {
        ret = sub[node.value];
      }
      break;

    case NODE_INT:
      ret = Number(node.value);
      break;
  }

  return ret;
}
