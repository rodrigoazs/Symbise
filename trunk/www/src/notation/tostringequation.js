function stringEquation(node)
{
  var n = PNE_transform(node);
  return stringEquation_rec(n);
}

function stringEquation_rec( node )
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
            group += stringEquation_rec(node.children[i]);
          }
          ret = group;
          break;
        case OP_SUB:
          ret = stringEquation_rec( node.children[0] ) + "-" + stringEquation_rec( node.children[1] );
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
              var newpush = node.children[i].type == NODE_OP && (node.children[i].value == OP_ADD || node.children[i].value == OP_SUB) ? "(" + stringEquation_rec( node.children[i] ) + ")" : stringEquation_rec( node.children[i] );
              ChildrenTex.push(newpush);
            }
          }
          ret = first + ChildrenTex.join("*");
          break;
        case OP_NEG:
          ret = node.children[0].type == NODE_OP ? "(-" + stringEquation_rec( node.children[0] ) + ")" : "-"+ stringEquationParen( node.children[0] );
          break;
        case OP_POW:
          left = node.children[0].type == NODE_OP ? "(" + stringEquation_rec( node.children[0] ) + ")" : stringEquation_rec( node.children[0] );
          right = node.children[1].type == NODE_OP ? "(" + stringEquation_rec( node.children[1] ) + ")" : stringEquation_rec( node.children[1] );
          ret = left +"^"+ right;
          break;
      }
      break;

    case NODE_FUNC:
      switch( node.value )
      {
        case FUNC_SIN:
          ret = "sin(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_COS:
          ret = "cos(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_ASINH:
          ret = "asinh(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_SINH:
          ret = "sinh(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_ASIN:
          ret = "asin(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_ACOSH:
          ret = "acosh(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_COSH:
          ret = "cosh(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_ACOS:
          ret = "acos(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_ATANH:
          ret = "atanh(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_TANH:
          ret = "tanh(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_ATAN:
          ret = "atan(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_TAN:
          ret = "tan(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_ASECH:
          ret = "asech(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_SECH:
          ret = "sech(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_ASEC:
          ret = "asec(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_SEC:
          ret = "sec(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_ACSCH:
          ret = "acsch(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_CSCH:
          ret = "csch(" + stringEquation_rec( node.children[0] ) + ")";
          break;
		    case FUNC_ACSC:
          ret = "acsc(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_CSC:
          ret = "csc(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_ACOTH:
          ret = "acoth(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_COTH:
          ret = "coth(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_ACOT:
          ret = "acot(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_COT:
          ret = "cot(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_SQRT:
          ret = "sqrt(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_EXP:
          ret = "exp(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_NLOG:
          ret = "log(" + stringEquation_rec( node.children[0] ) + ")";
          break;
        case FUNC_BLOG:
          ret = "log" + stringEquation_rec( node.children[0] ) + "(" + stringEquation_rec( node.children[1] ) + ")";
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
    return "(" + stringEquation_rec( node ) + ")";
  else
    return stringEquation_rec( node );
}
