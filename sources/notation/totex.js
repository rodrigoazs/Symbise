function toTex(node)
{
  var n = PNE_transform(node);
  return toTex_rec(n);
}

function toTex_rec( node )
{
  var ret = 0;
  var left = 0;
  var right = 0;

  if( !node )
    return 0;

  if(node.type == "STEP_DIFF_BOX")
  {
    return "\\cl\"mathbox\"{"+toTex_rec(node.children[0])+"}";
  }

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
            group += toTex_rec(node.children[i]);
          }
          ret = group;
          break;
        case OP_SUB:
          ret = toTex_rec( node.children[0] ) + "-" + toTex_recParenADDSUB( node.children[1] );
          break;
        case OP_DIV:
          ret = "{" + toTex_rec( node.children[0] ) + "}/{" + toTex_rec( node.children[1] ) +"}";
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
              var newpush = (node.children[i].type == NODE_OP && (node.children[i].value == OP_ADD || node.children[i].value == OP_SUB)) || (node.children[i].type == "STEP_DIFF_BOX") ? "(" + toTex_rec( node.children[i] ) + ")" : toTex_rec( node.children[i] );
              ChildrenTex.push(newpush);
            }
          }
          ret = ChildrenTex.join("");
          // Need to develop terms grouping before release this function
          // if(node.children[1].type == NODE_INT)
          // {
          // 	left = node.children[0].type == NODE_OP && (node.children[0].value == OP_ADD || node.children[0].value == OP_SUB) ? "(" + toTex_rec( node.children[0] ) + ")" : toTex_rec( node.children[0] );
          //   ret = left + "·" + toTex_rec( node.children[1] );
          // }else if(node.children[1].type == NODE_SYM){
          //   left = node.children[0].type == NODE_OP && (node.children[0].value == OP_ADD || node.children[0].value == OP_SUB) ? "(" + toTex_rec( node.children[0] ) + ")" : toTex_rec( node.children[0] );
          //   ret = left + "\\," + toTex_rec( node.children[1] );
          // }else{
          //   left = node.children[0].type == NODE_OP && (node.children[0].value == OP_ADD || node.children[0].value == OP_SUB) ? "(" + toTex_rec( node.children[0] ) + ")" : toTex_rec( node.children[0] );
          //   right = node.children[1].type == NODE_OP && (node.children[1].value == OP_ADD || node.children[1].value == OP_SUB) ? "(" + toTex_rec( node.children[1] ) + ")" : toTex_rec( node.children[1] );
          //   ret = left + "\\," + right;
          // }
          break;
        case OP_NEG:
          //ret = node.children[0].type == NODE_OP ? "(-" + toTex_rec( node.children[0] ) + ")" : "-"+ toTex_rec( node.children[0] );
          ret = "-" + toTex_recParenADDSUB( node.children[0] );
          break;
        case OP_POW:
          if(node.children[0].type == NODE_FUNC)
          {
            ret = toTex_recPowerFunc(node.children[0], node.children[1]);
          }
          else {
            left = node.children[0].type == NODE_OP ? "(" + toTex_rec( node.children[0] ) + ")" : toTex_rec( node.children[0] );
            ret = left +"^{"+ toTex_rec(node.children[1]) +"}";
          }
          break;
      }
      break;

    case NODE_FUNC:
      switch( node.value )
      {
        case FUNC_SIN:
          ret = "sin(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_COS:
          ret = "cos(" + toTex_rec( node.children[0] ) + ")";
          break;
         case FUNC_ASINH:
          ret = "asinh(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_SINH:
          ret = "sinh(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_ASIN:
          ret = "asin(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_ACOSH:
          ret = "acosh(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_COSH:
          ret = "cosh(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_ACOS:
          ret = "acos(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_ATANH:
          ret = "atanh(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_TANH:
          ret = "tanh(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_ATAN:
          ret = "atan(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_TAN:
          ret = "tan(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_ASECH:
          ret = "asech(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_SECH:
          ret = "sech(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_ASEC:
          ret = "asec(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_SEC:
          ret = "sec(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_ACSCH:
          ret = "acsch(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_CSCH:
          ret = "csch(" + toTex_rec( node.children[0] ) + ")";
          break;
		    case FUNC_ACSC:
          ret = "acsc(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_CSC:
          ret = "csc(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_ACOTH:
          ret = "acoth(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_COTH:
          ret = "coth(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_ACOT:
          ret = "acot(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_COT:
          ret = "cot(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_SQRT:
          ret = "{√{" + toTex_rec( node.children[0] ) + "}}";
          break;
        case FUNC_EXP:
          ret = "exp(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_NLOG:
          ret = "log(" + toTex_rec( node.children[0] ) + ")";
          break;
        case FUNC_BLOG:
          ret = "log_{" + toTex_rec( node.children[0] ) + "}(" + toTex_rec( node.children[1] ) + ")";
          break;
        case FUNC_DIFF:
          ret = "d/{dx}(" + toTex_rec( node.children[0] ) + ")";
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

function toTex_recParenADDSUB( node )
{
  if(kind(node) == OP_ADD || kind(node) == OP_SUB)
    return "(" + toTex_rec( node ) + ")";
  else
    return toTex_rec( node );
}

function toTex_recPowerFunc(node, power)
{
    var ret = 0;
    switch( node.value )
    {
      case FUNC_SIN:
        ret = "{sin}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_COS:
        ret = "{cos}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
       case FUNC_ASINH:
        ret = "{asinh}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_SINH:
        ret = "{sinh}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_ASIN:
        ret = "{asin}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_ACOSH:
        ret = "{acosh}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_COSH:
        ret = "{cosh}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_ACOS:
        ret = "{acos}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_ATANH:
        ret = "{atanh}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_TANH:
        ret = "{tanh}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_ATAN:
        ret = "{atan}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_TAN:
        ret = "{tan}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_ASECH:
        ret = "{asech}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_SECH:
        ret = "{sech}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_ASEC:
        ret = "{asec}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_SEC:
        ret = "{sec}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_ACSCH:
        ret = "{acsch}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_CSCH:
        ret = "{csch}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_ACSC:
        ret = "{acsc}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_CSC:
        ret = "{csc}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_ACOTH:
        ret = "{acoth}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_COTH:
        ret = "{coth}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_ACOT:
        ret = "{acot}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_COT:
        ret = "{cot}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_SQRT:
        ret = "{√{" + toTex_rec( node.children[0] ) + "}}";
        break;
      case FUNC_EXP:
        ret = "{exp}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_NLOG:
        ret = "{log}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[0] ) + ")";
        break;
      case FUNC_BLOG:
        ret = "{log}_{" + toTex_rec( node.children[0] ) + "}^{" + toTex_rec(power) + "}(" + toTex_rec( node.children[1] ) + ")";
        break;
    }
    return ret;
}
