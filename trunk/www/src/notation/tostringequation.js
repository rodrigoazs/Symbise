function stringEquation( node )
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
            group += stringEquation(node.children[i]);
          }
          ret = group;
          break;
        case OP_SUB:
          ret = stringEquation( node.children[0] ) + "-" + stringEquation( node.children[1] );
          break;
        case OP_DIV:
          ret = stringEquationParen( node.children[0] ) + "/" + stringEquationParen( node.children[1] );
          break;
        case OP_MUL:
          var ChildrenTex = new Array();
          var first = "";
          for(var i = 0; i < node.children.length; i++) {
            if(i == 0 && node.children[i].type == NODE_INT && node.children[i].value == -1)
              first = "-";
            else
            {
              var newpush = node.children[i].type == NODE_OP && (node.children[i].value == OP_ADD || node.children[i].value == OP_SUB) ? "(" + stringEquation( node.children[i] ) + ")" : stringEquation( node.children[i] );
              ChildrenTex.push(newpush);
            }
          }
          ret = first + ChildrenTex.join("*");
          break;
        case OP_NEG:
          ret = node.children[0].type == NODE_OP ? "(-" + stringEquation( node.children[0] ) + ")" : "-"+ stringEquationParen( node.children[0] );
          break;
        case OP_POW:
          left = node.children[0].type == NODE_OP ? "(" + stringEquation( node.children[0] ) + ")" : stringEquation( node.children[0] );
          right = node.children[1].type == NODE_OP ? "(" + stringEquation( node.children[1] ) + ")" : stringEquation( node.children[1] );
          ret = left +"^"+ right;
          break;
      }
      break;

    case NODE_FUNC:
      switch( node.value )
      {
        case FUNC_SIN:
          ret = "sin(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_COS:
          ret = "cos(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_ASINH:
          ret = "asinh(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_SINH:
          ret = "sinh(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_ASIN:
          ret = "asin(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_ACOSH:
          ret = "acosh(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_COSH:
          ret = "cosh(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_ACOS:
          ret = "acos(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_ATANH:
          ret = "atanh(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_TANH:
          ret = "tanh(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_ATAN:
          ret = "atan(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_TAN:
          ret = "tan(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_ASECH:
          ret = "asech(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_SECH:
          ret = "sech(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_ASEC:
          ret = "asec(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_SEC:
          ret = "sec(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_ACSCH:
          ret = "acsch(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_CSCH:
          ret = "csch(" + stringEquation( node.children[0] ) + ")";
          break;
		    case FUNC_ACSC:
          ret = "acsc(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_CSC:
          ret = "csc(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_ACOTH:
          ret = "acoth(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_COTH:
          ret = "coth(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_ACOT:
          ret = "acot(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_COT:
          ret = "cot(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_SQRT:
          ret = "sqrt(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_EXP:
          ret = "exp(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_NLOG:
          ret = "log(" + stringEquation( node.children[0] ) + ")";
          break;
        case FUNC_BLOG:
          ret = "log" + stringEquation( node.children[0] ) + "(" + stringEquation( node.children[1] ) + ")";
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

function stringEquationParen( node )
{
  if(node.type == NODE_OP)
    return "(" + stringEquation( node ) + ")";
  else
    return stringEquation( node );
}
