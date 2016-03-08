function toTex( node )
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
            group += toTex(node.children[i]);
          }
          ret = group;
          break;
        case OP_SUB:
          ret = toTex( node.children[0] ) + "-" + toTexParenADDSUB( node.children[1] );
          break;
        case OP_DIV:
          ret = "{" + toTex( node.children[0] ) + "}/{" + toTex( node.children[1] ) +"}";
          break;
        case OP_MUL:
          var ChildrenTex = new Array();
          for(var i = 0; i < node.children.length; i++) {
            if(i == 0 && node.children[i].type == NODE_INT && node.children[i].value == -1)
              ChildrenTex.push("-");
            else
            {
              if(i != 0)
              {
                //if(kind(node.children[i-1]) == NODE_INT || is_fraction(node.children[i-1]) && kind(node.children[i]) == NODE_INT || is_fraction(node.children[i]))
                if(kind(node.children[i]) == NODE_INT || is_fraction(node.children[i]))
                {
                  //alert(node.children[i-1].value + " - " + node.children[i].value);
                  ChildrenTex.push("·");
                }
                else
                {
                  //alert(node.children[i-1].value + " - " + node.children[i].value);
                  ChildrenTex.push("\\,");
                }
              }
              var newpush = node.children[i].type == NODE_OP && (node.children[i].value == OP_ADD || node.children[i].value == OP_SUB) ? "(" + toTex( node.children[i] ) + ")" : toTex( node.children[i] );
              ChildrenTex.push(newpush);
            }
          }
          ret = ChildrenTex.join("");
          // Need to develop terms grouping before release this function
          // if(node.children[1].type == NODE_INT)
          // {
          // 	left = node.children[0].type == NODE_OP && (node.children[0].value == OP_ADD || node.children[0].value == OP_SUB) ? "(" + toTex( node.children[0] ) + ")" : toTex( node.children[0] );
          //   ret = left + "·" + toTex( node.children[1] );
          // }else if(node.children[1].type == NODE_SYM){
          //   left = node.children[0].type == NODE_OP && (node.children[0].value == OP_ADD || node.children[0].value == OP_SUB) ? "(" + toTex( node.children[0] ) + ")" : toTex( node.children[0] );
          //   ret = left + "\\," + toTex( node.children[1] );
          // }else{
          //   left = node.children[0].type == NODE_OP && (node.children[0].value == OP_ADD || node.children[0].value == OP_SUB) ? "(" + toTex( node.children[0] ) + ")" : toTex( node.children[0] );
          //   right = node.children[1].type == NODE_OP && (node.children[1].value == OP_ADD || node.children[1].value == OP_SUB) ? "(" + toTex( node.children[1] ) + ")" : toTex( node.children[1] );
          //   ret = left + "\\," + right;
          // }
          break;
        case OP_NEG:
          //ret = node.children[0].type == NODE_OP ? "(-" + toTex( node.children[0] ) + ")" : "-"+ toTex( node.children[0] );
          ret = "-" + toTexParenADDSUB( node.children[0] );
          break;
        case OP_POW:
          if(node.children[0].type == NODE_FUNC)
          {
            ret = toTexPowerFunc(node.children[0], node.children[1]);
          }
          else {
            left = node.children[0].type == NODE_OP ? "(" + toTex( node.children[0] ) + ")" : toTex( node.children[0] );
            ret = left +"^{"+ toTex(node.children[1]) +"}";
          }
          break;
      }
      break;

    case NODE_FUNC:
      switch( node.value )
      {
        case FUNC_SIN:
          ret = "sin(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_COS:
          ret = "cos(" + toTex( node.children[0] ) + ")";
          break;
         case FUNC_ASINH:
          ret = "asinh(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_SINH:
          ret = "sinh(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_ASIN:
          ret = "asin(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_ACOSH:
          ret = "acosh(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_COSH:
          ret = "cosh(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_ACOS:
          ret = "acos(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_ATANH:
          ret = "atanh(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_TANH:
          ret = "tanh(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_ATAN:
          ret = "atan(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_TAN:
          ret = "tan(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_ASECH:
          ret = "asech(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_SECH:
          ret = "sech(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_ASEC:
          ret = "asec(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_SEC:
          ret = "sec(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_ACSCH:
          ret = "acsch(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_CSCH:
          ret = "csch(" + toTex( node.children[0] ) + ")";
          break;
		    case FUNC_ACSC:
          ret = "acsc(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_CSC:
          ret = "csc(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_ACOTH:
          ret = "acoth(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_COTH:
          ret = "coth(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_ACOT:
          ret = "acot(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_COT:
          ret = "cot(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_SQRT:
          ret = "{√{" + toTex( node.children[0] ) + "}}";
          break;
        case FUNC_EXP:
          ret = "exp(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_NLOG:
          ret = "log(" + toTex( node.children[0] ) + ")";
          break;
        case FUNC_BLOG:
          ret = "log_{" + toTex( node.children[0] ) + "}(" + toTex( node.children[1] ) + ")";
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

function toTexParenADDSUB( node )
{
  if(kind(node) == OP_ADD || kind(node) == OP_SUB)
    return "(" + toTex( node ) + ")";
  else
    return toTex( node );
}

function toTexPowerFunc(node, power)
{
    var ret = 0;
    switch( node.value )
    {
      case FUNC_SIN:
        ret = "{sin}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_COS:
        ret = "{cos}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
       case FUNC_ASINH:
        ret = "{asinh}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_SINH:
        ret = "{sinh}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_ASIN:
        ret = "{asin}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_ACOSH:
        ret = "{acosh}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_COSH:
        ret = "{cosh}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_ACOS:
        ret = "{acos}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_ATANH:
        ret = "{atanh}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_TANH:
        ret = "{tanh}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_ATAN:
        ret = "{atan}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_TAN:
        ret = "{tan}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_ASECH:
        ret = "{asech}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_SECH:
        ret = "{sech}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_ASEC:
        ret = "{asec}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_SEC:
        ret = "{sec}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_ACSCH:
        ret = "{acsch}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_CSCH:
        ret = "{csch}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_ACSC:
        ret = "{acsc}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_CSC:
        ret = "{csc}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_ACOTH:
        ret = "{acoth}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_COTH:
        ret = "{coth}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_ACOT:
        ret = "{acot}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_COT:
        ret = "{cot}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_SQRT:
        ret = "{√{" + toTex( node.children[0] ) + "}}";
        break;
      case FUNC_EXP:
        ret = "{exp}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_NLOG:
        ret = "{log}^{" + toTex(power) + "}(" + toTex( node.children[0] ) + ")";
        break;
      case FUNC_BLOG:
        ret = "{log}_{" + toTex( node.children[0] ) + "}^{" + toTex(power) + "}(" + toTex( node.children[1] ) + ")";
        break;
    }
    return ret;
}
