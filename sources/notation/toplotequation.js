function plotEquation(node)
{
  var n = PNE_transform(node);
  return plotEquation_rec(n);
}

function plotEquation_rec( node )
{
  var ret = 0;
  var left = 0;
  var right = 0;

  if( !node )
    return 0;

  switch( node.type )
  {
    case NODE_OP:
      switch( node.value )
      {
        case OP_ADD:
          var group = "";
          for(var i = 0; i < node.children.length; i++) {
            if(signal(node.children[i]) && i > 0) {
              group += "+";
            }
            group += plotEquation_rec(node.children[i]);
          }
          ret = group;
          break;
        case OP_SUB:
          ret = plotEquation_rec( node.children[0] ) + "-" + plotEquation_rec( node.children[1] );
          break;
        case OP_DIV:
          ret = plotEquationParen( node.children[0] ) + "/" + plotEquationParen( node.children[1] );
          break;
        case OP_MUL:
          var ChildrenTex = new Array();
          var first = "";
          for(var i = 0; i < node.children.length; i++) {
            if(i == 0 && node.children[i].type == NODE_INT && node.children[i].value == -1)
              first = "-";
            else
            {
              var newpush = node.children[i].type == NODE_OP && (node.children[i].value == OP_ADD || node.children[i].value == OP_SUB) ? "(" + plotEquation_rec( node.children[i] ) + ")" : plotEquation_rec( node.children[i] );
              ChildrenTex.push(newpush);
            }
          }
          ret = first + ChildrenTex.join("*");
          break;
        case OP_NEG:
          ret = node.children[0].type == NODE_OP ? "(-" + plotEquation_rec( node.children[0] ) + ")" : "-"+ plotEquationParen( node.children[0] );
          break;
        case OP_POW:
          left = node.children[0].type == NODE_OP ? "(" + plotEquation_rec( node.children[0] ) + ")" : plotEquation_rec( node.children[0] );
          right = node.children[1].type == NODE_OP ? "(" + plotEquation_rec( node.children[1] ) + ")" : plotEquation_rec( node.children[1] );
          ret = left +"^"+ right;
          break;
      }
      break;

    case NODE_FUNC:
      switch( node.value )
      {
        case FUNC_SIN:
          ret = "sin(" + plotEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_COS:
          ret = "cos(" + plotEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_ASINH:
          ret = "log((" + plotEquation_rec( node.children[0] ) + ") + sqrt((" + plotEquation_rec( node.children[0] ) + ")^2 + 1))";
          break;
        case FUNC_SINH:
          ret = "(1/2 * (exp((" + plotEquation_rec( node.children[0] ) + ")) - exp(-(" + plotEquation_rec( node.children[0] ) + ")))";
          break;
        case FUNC_ASIN:
          ret = "asin(" + plotEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_ACOSH:
          ret = "log(sqrt((" + plotEquation_rec( node.children[0] ) + ")^2 - 1) + (" + plotEquation_rec( node.children[0] ) + "))";
          break;
        case FUNC_COSH:
          ret = "(1/2 * (exp((" + plotEquation_rec( node.children[0] ) + ")) + exp(-(" + plotEquation_rec( node.children[0] ) + "))))";
          break;
        case FUNC_ACOS:
          ret = "acos(" + plotEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_ATANH:
          ret = "(log((1 + (" + plotEquation_rec( node.children[0] ) + "))/(1 - (" + plotEquation_rec( node.children[0] ) + "))) / 2)";
          break;
        case FUNC_TANH:
          ret = "((exp(2 * (" + plotEquation_rec( node.children[0] ) + ")) - 1) / (exp(2 * (" + plotEquation_rec( node.children[0] ) + ")) + 1))";
          break;
        case FUNC_ATAN:
          ret = "atan(" + plotEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_TAN:
          ret = "tan(" + plotEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_ASECH:
          ret = "(log(sqrt(1/(" + plotEquation_rec( node.children[0] ) + ")^2 - 1) + 1/(" + plotEquation_rec( node.children[0] ) + ")))";
          break;
        case FUNC_SECH:
          ret = "(1/(1/2 * (exp((" + plotEquation_rec( node.children[0] ) + ")) + exp(-(" + plotEquation_rec( node.children[0] ) + ")))))";
          break;
        case FUNC_ASEC:
          ret = "acos(1/(" + plotEquation_rec( node.children[0] ) + "))";
          break;
        case FUNC_SEC:
          ret = "(1/cos(" + plotEquation_rec( node.children[0] ) + "))";
          break;
        case FUNC_ACSCH:
          ret = "(log(1/(" + plotEquation_rec( node.children[0] ) + ") + sqrt(1/(" + plotEquation_rec( node.children[0] ) + ")^2 + 1)))";
          break;
        case FUNC_CSCH:
          ret = "(1/(1/2 * (exp((" + plotEquation_rec( node.children[0] ) + ")) - exp(-(" + plotEquation_rec( node.children[0] ) + "))))";
          break;
		    case FUNC_ACSC:
          ret = "asin(1/(" + plotEquation_rec( node.children[0] ) + "))";
          break;
        case FUNC_CSC:
          ret = "(1/sin(" + plotEquation_rec( node.children[0] ) + "))";
          break;
        case FUNC_ACOTH:
          ret = "((log(((" + plotEquation_rec( node.children[0] ) + ")+1)/(" + plotEquation_rec( node.children[0] ) + ")) + ln((" + plotEquation_rec( node.children[0] ) + ")/((" + plotEquation_rec( node.children[0] ) + ")-1))) / 2)";
          break;
        case FUNC_COTH:
          ret = "(1/((exp(2 * (" + plotEquation_rec( node.children[0] ) + ")) - 1) / (exp(2 * (" + plotEquation_rec( node.children[0] ) + ")) + 1)))";
          break;
        case FUNC_ACOT:
          ret = "atan(1/(" + plotEquation_rec( node.children[0] ) + "))";
          break;
        case FUNC_COT:
          ret = "(1/tan(" + plotEquation_rec( node.children[0] ) + "))";
          break;
        case FUNC_SQRT:
          ret = "sqrt(" + plotEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_EXP:
          ret = "exp(" + plotEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_NLOG:
          ret = "log(" + plotEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_BLOG:
          ret = "(log(" + plotEquation_rec( node.children[1] ) + "))/(log(" + plotEquation_rec( node.children[0] ) + "))";
          break;
        case FUNC_DIFF:
          ret = "diff(" + toTex_rec( node.children[0] ) + ")";
          break;
      }
      break;

    case NODE_SYM:
      ret = node.value;
      break;

    case NODE_INT:
      ret = node.value;
      break;
  }

  return ret;
}

function plotEquationParen( node )
{
  if(node.type == NODE_OP)
    return "(" + plotEquation_rec( node ) + ")";
  else
    return plotEquation_rec( node );
}
