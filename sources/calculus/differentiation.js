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
            ret = construct(OP_DIV, construct(OP_SUB, construct(OP_MUL, symbolic_diff(node.children[0]), node.children[1]), construct(OP_MUL, symbolic_diff(node.children[1]), node.children[0])), construct(OP_POW, node.children[1], createNode(NODE_INT, 2)));
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
          ret = construct(OP_ADD, construct(OP_MUL, construct(OP_MUL, node.children[1], construct(OP_POW, node.children[0], construct(OP_SUB, node.children[1], createNode(NODE_INT, 1)))), symbolic_diff(node.children[0])), construct(OP_MUL, construct(OP_MUL, construct(OP_POW, node.children[0], node.children[1]), createNode(NODE_FUNC, FUNC_NLOG, node.children[0])), symbolic_diff(node.children[1])));
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
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD,createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))));
          break;
        case FUNC_SINH:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_COSH, node.children[0]));
          break;
        case FUNC_ASIN:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))));
          break;
        case FUNC_ACOSH:
          //ret = construct(OP_DIV, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, construct(OP_POW, node.children[0], createNode(NODE_INT, 2)), createNode(NODE_INT, 1))));
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_MUL, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, node.children[0], createNode(NODE_INT, 1))), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD, node.children[0], createNode(NODE_INT, 1)))));
          break;
        case FUNC_COSH:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SINH, node.children[0]));
          break;
        case FUNC_ACOS:
          ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))));
          break;
        case FUNC_ATANH:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_SUB, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_TANH:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), construct(OP_POW, createNode(NODE_FUNC, FUNC_SECH, node.children[0]), createNode(NODE_INT, 2)));
          break;
        case FUNC_ATAN:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_ADD,createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_TAN:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), construct(OP_POW, createNode(NODE_FUNC, FUNC_SEC, node.children[0]), createNode(NODE_INT, 2)));
          break;
        case FUNC_ASECH:
          ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL, construct(OP_MUL, node.children[0], createNode(NODE_FUNC, FUNC_SQRT, construct(OP_DIV, construct(OP_SUB, createNode(NODE_INT, 1), node.children[0]), construct(OP_ADD, createNode(NODE_INT, 1), node.children[0])))), construct(OP_ADD, createNode(NODE_INT, 1), node.children[0])));
          break;
        case FUNC_SECH:
          ret = construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL, createNode(NODE_FUNC, FUNC_TANH, node.children[0]), createNode(NODE_FUNC, FUNC_SECH, node.children[0])));
          break;
        case FUNC_ASEC:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_MUL, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, createNode(NODE_INT, 1), construct(OP_DIV, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))))), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
          //ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_MUL,node.children[0], createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, construct(OP_POW, node.children[0], createNode(NODE_INT, 2)), createNode(NODE_INT, 1)))));
          break;
        case FUNC_SEC:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), construct(OP_MUL,createNode(NODE_FUNC, FUNC_TAN, node.children[0]), createNode(NODE_FUNC, FUNC_SEC, node.children[0])));
          break;
        case FUNC_ACSCH:
          ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL,createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD,createNode(NODE_INT, 1), construct(OP_DIV, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))))), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_CSCH:
          ret = construct(OP_MUL,construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), createNode(NODE_FUNC, FUNC_COTH, node.children[0])), createNode(NODE_FUNC, FUNC_CSCH, node.children[0]));
          break;
		    case FUNC_ACSC:
          ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, createNode(NODE_INT, 1), construct(OP_DIV, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))))), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
          //ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL,node.children[0], createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, construct(OP_POW, node.children[0], createNode(NODE_INT, 2)), createNode(NODE_INT, 1)))));
          break;
        case FUNC_CSC:
          ret = construct(OP_MUL,construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), createNode(NODE_FUNC, FUNC_COT, node.children[0])), createNode(NODE_FUNC, FUNC_CSC, node.children[0]));
          break;
        case FUNC_ACOTH:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_SUB, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_COTH:
          ret = construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_POW, createNode(NODE_FUNC, FUNC_CSCH, node.children[0]), createNode(NODE_INT, 2)));
          break;
        case FUNC_ACOT:
          ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_ADD,createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_COT:
          ret = construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_POW, createNode(NODE_FUNC, FUNC_CSC, node.children[0]), createNode(NODE_INT, 2)));
          break;
        case FUNC_SQRT:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_MUL,createNode(NODE_INT, 2), createNode(NODE_FUNC, FUNC_SQRT, node.children[0])));
          break;
        // case FUNC_EXP:
        //   ret = construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_EXP, node.children[0]));
        //   break;
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

// Automatic Diff (u)
// Given an expression BAE or ASAE and a dictionary of variables with their
// respect values, including the value of the derivative point,
// derivate and evaluate the expression
// The output is a numeric value
function automatic_diff(node, sub={})
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
          var sum = 0;
          for(var i = 0; i < node.children.length; i++)
          {
            sum += automatic_diff(node.children[i], sub);
          }
          ret = sum;
          break;
        case OP_SUB:
          ret = automatic_diff(node.children[0], sub) - automatic_diff(node.children[1], sub);
          break;
        case OP_DIV:
          if(is_fraction(node))
          {
            ret = 0;
          }
          else
          {
            ret = (automatic_diff(node.children[0], sub) * numeric_evaluate(node.children[1], sub) - automatic_diff(node.children[1], sub) * numeric_evaluate(node.children[0], sub)) / Math.pow(numeric_evaluate(node.children[1], sub), 2);
          }
          break
        case OP_MUL:
          if(node.children.length == 2)
          {
            ret = automatic_diff(node.children[0], sub) * numeric_evaluate(node.children[1], sub) + numeric_evaluate(node.children[0], sub) * automatic_diff(node.children[1], sub);
          }
          else
          {
            var children = node.children.slice(1);
            ret = automatic_diff(node.children[0], sub) * numeric_evaluate(construct(OP_MUL, children), sub) + numeric_evaluate(node.children[0], sub) * automatic_diff(construct(OP_MUL, children), sub);
          }
          break;
        case OP_NEG:
          ret = - automatic_diff(node.children[0], sub);
          break;
        case OP_POW:
          // prevents NaN in log(). It happens because 0*NaN = NaN instead of 0.
          var term1 = Math.pow(numeric_evaluate(node.children[0], sub),numeric_evaluate(node.children[1], sub));
          var term2 = Math.log(numeric_evaluate(node.children[0], sub));
          var term3 = automatic_diff(node.children[1], sub);
          if(term1 == 0 || term2 == 0 || term3 == 0)
          {
            term1 = term2 = term3 = 0;
          }
          ret = (numeric_evaluate(node.children[1], sub)*Math.pow(numeric_evaluate(node.children[0], sub),(numeric_evaluate(node.children[1], sub)-1))*automatic_diff(node.children[0], sub))+(term1 * term2 * term3);
          break;
      }
      break;

    case NODE_FUNC:
      switch(node.value)
      {
        case FUNC_SIN:
          ret = automatic_diff(node.children[0], sub) * Math.cos(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_COS:
          ret = - automatic_diff(node.children[0], sub) * Math.sin(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_ASINH:
          ret = automatic_diff(node.children[0], sub) / (Math.sqrt(Math.pow(numeric_evaluate(node.children[0], sub), 2) + 1));
          break;
        case FUNC_SINH:
          ret = automatic_diff(node.children[0], sub) * Math.cosh(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_ASIN:
          ret = automatic_diff(node.children[0], sub) / Math.sqrt(1 - Math.pow(numeric_evaluate(node.children[0], sub), 2));
          break;
        case FUNC_ACOSH:
          var ex = numeric_evaluate(node.children[0], sub);
          ret = automatic_diff(node.children[0], sub) / (Math.sqrt(ex - 1) * Math.sqrt(ex + 1));
          break;
        case FUNC_COSH:
          ret = automatic_diff(node.children[0], sub) * Math.sinh(numeric_evaluate(node.children[0], sub));
          break;
        case FUNC_ACOS:
          ret = - automatic_diff(node.children[0], sub) / Math.sqrt(1 - Math.pow(numeric_evaluate(node.children[0], sub), 2));
          break;
        case FUNC_ATANH:
          ret = automatic_diff(node.children[0], sub) / (1 - Math.pow(numeric_evaluate(node.children[0], sub), 2));
          break;
        case FUNC_TANH:
          ret = automatic_diff(node.children[0], sub) * (1 / Math.pow(Math.cosh(numeric_evaluate(node.children[0], sub)), 2));
          break;
        case FUNC_ATAN:
          ret = automatic_diff(node.children[0], sub) / Math.sqrt(1 + Math.pow(numeric_evaluate(node.children[0], sub), 2));
          break;
        case FUNC_TAN:
          ret = automatic_diff(node.children[0], sub) / (1 / Math.pow(Math.cos(numeric_evaluate(node.children[0], sub)), 2));
          break;
        case FUNC_ASECH:
          var ex = numeric_evaluate(node.children[0], sub);
          ret = - automatic_diff(node.children[0], sub) / (ex * Math.sqrt((1-ex)/(1+ex)) * (1+x));
          break;
        case FUNC_SECH:
          var ex = numeric_evaluate(node.children[0], sub);
          ret = - automatic_diff(node.children[0], sub) * Math.tanh(ex) * (1/Math.cosh(ex));
          break;
        case FUNC_ASEC:
          var ex = numeric_evaluate(node.children[0], sub);
          ret = automatic_diff(node.children[0], sub) * (1/(Math.sqrt(1-1/Math.pow(ex, 2)) * Math.pow(ex, 2)));
          break;
        case FUNC_SEC:
          var ex = numeric_evaluate(node.children[0], sub);
          ret = automatic_diff(node.children[0], sub) * Math.tan(ex) * (1/Math.cos(ex));
          break;
        case FUNC_ACSCH:
          var ex = numeric_evaluate(node.children[0], sub);
          ret = - automatic_diff(node.children[0], sub) / (Math.sqrt(1+1/Math.pow(ex, 2)) * Math.pow(ex, 2));
          break;
        case FUNC_CSCH:
          var ex = numeric_evaluate(node.children[0], sub);
          ret = - automatic_diff(node.children[0], sub) * (1/Math.sinh(ex)) * (1/Math.tanh(ex));
          break;
		    case FUNC_ACSC:
          var ex = numeric_evaluate(node.children[0], sub);
          ret = - automatic_diff(node.children[0], sub) / (Math.sqrt(1-1/Math.pow(ex, 2)) * Math.pow(ex, 2));
          break;
        case FUNC_CSC:
          var ex = numeric_evaluate(node.children[0], sub);
          ret = - automatic_diff(node.children[0], sub) * (1/Math.sin(ex)) * (1/Math.tan(ex));
          break;
        case FUNC_ACOTH:
          ret = automatic_diff(node.children[0], sub) / (1- Math.pow(numeric_evaluate(node.children[0], sub), 2));
          break;
        case FUNC_COTH:
          ret = - automatic_diff(node.children[0], sub) * Math.pow(1/Math.sinh(numeric_evaluate(node.children[0], sub)), 2);
          break;
        case FUNC_ACOT:
          ret = - automatic_diff(node.children[0], sub) / (1 + Math.pow(numeric_evaluate(node.children[0], sub), 2));
          break;
        case FUNC_COT:
          ret = - automatic_diff(node.children[0], sub) * Math.pow(1/Math.sin(numeric_evaluate(node.children[0], sub)), 2);
          break;
        case FUNC_SQRT:
          ret = automatic_diff(node.children[0], sub) / (2 * Math.sqrt(numeric_evaluate(node.children[0], sub)));
          break;
        // case FUNC_EXP:
        //   break;
        case FUNC_NLOG:
          ret = automatic_diff(node.children[0], sub) / numeric_evaluate(node.children[0], sub);
          break;
        case FUNC_BLOG:
          ret = automatic_diff(node.children[1], sub) / (numeric_evaluate(node.children[1], sub) * Math.log(numeric_evaluate(node.children[0], sub)));
          break;
      }
      break;

    case NODE_SYM:
      if(node.value == "x")
        ret = 1;
      else
        ret = 0;
      break;

    case NODE_INT:
      ret = 0;
      break;
  }

  return ret;
}
