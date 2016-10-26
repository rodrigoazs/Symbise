// numeric_evaluate (u)
// Given a expression BAE or ASAE and a dictionary of variables with their
// respect values, evaluate the expression and returns a numeric value
function numeric_evaluate(node, sub)
{
  if(sub === undefined) sub = {};
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
            sum += numeric_evaluate(node.children[i], sub);
          }
          ret = sum;
          break;
        case OP_SUB:
          ret = numeric_evaluate(node.children[0], sub) - numeric_evaluate(node.children[1], sub);
          break;
        case OP_DIV:
          ret = numeric_evaluate(node.children[0], sub) / numeric_evaluate(node.children[1], sub);
          break;
        case OP_MUL:
          var prod = 1;
          for(var i = 0; i < node.children.length; i++)
          {
            prod *= numeric_evaluate(node.children[i], sub);
          }
          ret = prod;
          break;
        case OP_NEG:
          ret = -numeric_evaluate(node.children[0], sub);
          break;
        case OP_POW:
          if(kind(node.children[0]) == NODE_SYM && node.children[0].value == SYM_EULER)
          {
            ret = Math.exp(numeric_evaluate(node.children[1], sub));
          }
          else
          {
            ret = Math.pow(numeric_evaluate(node.children[0], sub), numeric_evaluate(node.children[1], sub));
          }
          break;
      }
      break;

    case NODE_FUNC:
      switch(node.value)
      {
        case FUNC_SIN:
          ret = Math.sin(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_COS:
          ret = Math.cos(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_TAN:
          ret = Math.tan(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_SINH:
          ret = Math.sinh(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_COSH:
          ret = Math.cosh(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_TANH:
          ret = Math.tanh(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_ASIN:
          ret = Math.asin(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_ACOS:
          ret = Math.acos(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_ATAN:
          ret = Math.atan(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_ASINH:
          ret = Math.asin(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_ACOSH:
          ret = Math.acosh(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_ATANH:
          ret = Math.atanh(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_CSC:
          ret = 1 / Math.sin(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_SEC:
          ret = 1 / Math.cos(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_COT:
          ret = 1 / Math.tan(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_CSCH:
          ret = 1 / Math.sin(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_SECH:
          ret = 1 / Math.cos(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_COTH:
          ret = 1 / Math.tan(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_ACSC:
          ret = Math.asin(1 / numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_ASEC:
          ret = Math.acos(1 / numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_ACOT:
          ret = Math.atan(1 / numeric_evaluate(node.children[0], sub)) ;
          break;
        case FUNC_ACSCH:
          var func_numeric_evaluated = numeric_evaluate(node.children[0], sub);
          ret = Math.log(1 / func_numeric_evaluated + Maths.sqrt(1 / Math.pow(func_numeric_evaluated, 2) + 1));
          break;
        case FUNC_ASECH:
          var func_numeric_evaluated = numeric_evaluate(node.children[0], sub);
          ret = Math.log(Math.sqrt(1 / Math.pow(func_numeric_evaluated, 2) - 1) + 1 / func_numeric_evaluated);
          break;
        case FUNC_ACOTH:
          var func_numeric_evaluated = numeric_evaluate(node.children[0], sub);
          ret = (Math.log((func_numeric_evaluated+ 1) / func_numeric_evaluated) + Math.log(func_numeric_evaluated/(func_numeric_evaluated-1))) / 2;
          break;
        case FUNC_SQRT:
          ret = Math.sqrt(numeric_evaluate(node.children[0], sub));
          break;
        // case FUNC_EXP:
        //   ret = Math.exp(numeric_evaluate(node.children[0], sub));
        //   break;
        case FUNC_NLOG:
          ret = Math.log(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_BLOG:
          ret = Math.log(numeric_evaluate(node.children[1], sub)) / Math.log(numeric_evaluate(node.children[0], sub));
          break;
      }
      break;

    case NODE_SYM:
      if(node.value == SYM_EULER)
      {
        ret = Math.exp(1);
      }
      else if(node.value == SYM_PI)
      {
        ret = Math.PI;
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
