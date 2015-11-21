function symbolicAdder( nodel, noder )
{
  if( nodel.type == NODE_CONST && noder.type == NODE_CONST && nodel.value == 0 && noder.value == 0 )
    return createNode ( NODE_CONST, 0 );
  else if ( nodel.type == NODE_CONST && nodel.value == 0 )
    return noder;
  else if ( noder.type == NODE_CONST && noder.value == 0 )
    return nodel;
  else if ( nodel.type == NODE_CONST && noder.type == NODE_CONST )
    return createNode( NODE_CONST, Number( nodel.value ) + Number( noder.value ) );
  else
    return createNode( NODE_OP, OP_ADD, nodel, noder );
}

function symbolicMultiplier( nodel, noder )
{
  if( nodel.type == NODE_CONST &&  nodel.value == 0 || noder.type == NODE_CONST  && noder.value == 0 )
    return createNode ( NODE_CONST, 0 );
  else if ( nodel.type == NODE_CONST && nodel.value == 1 )
    return noder;
  else if ( noder.type == NODE_CONST && noder.value == 1 )
    return nodel;
  else if ( nodel.type == NODE_CONST && noder.type == NODE_CONST )
    return createNode( NODE_CONST, Number( nodel.value ) * Number( noder.value ) );
  else
    return createNode( NODE_OP, OP_MUL, nodel, noder );
}

function symbolicSubtractor( nodel, noder )
{
  if( nodel.type == NODE_CONST && noder.type == NODE_CONST && nodel.value == 0 && noder.value == 0 )
    return createNode ( NODE_CONST, 0 );
  else if ( nodel.type == NODE_CONST && nodel.value == 0 )
    return symbolicNegation( noder );
  else if ( nodel.type == NODE_CONST && noder.type == NODE_CONST )
    return createNode( NODE_CONST, Number( nodel.value ) - Number( noder.value ) );
  else
    return createNode( NODE_OP, OP_SUB, nodel, noder );
}

function symbolicNegation( node )
{
  if( node.type == NODE_CONST && node.value == 0)
    return createNode ( NODE_CONST, 0 );
  else if ( node.type == NODE_CONST )
    return createNode( NODE_CONST, Number( node.value ) * -1 );
  else
    return createNode( NODE_OP, OP_NEG, node );
}

function symbolicDivisor( nodel, noder )
{
  // Division by zero
  //if( noder.type == NODE_CONST  && noder.value == 0 )
  //  return createNode ( NODE_CONST, 0 );
  if ( nodel.type == NODE_CONST && nodel.value == 0 )
    return createNode(NODE_CONST, 0 );
  else if ( noder.type == NODE_CONST && noder.value == 1 )
    return nodel;
  else if ( nodel.type == NODE_CONST && noder.type == NODE_CONST && Number( nodel.value ) % Number( noder.value ) == 0 )
    return createNode( NODE_CONST, Number( nodel.value ) / Number( noder.value ) );
  else
    return createNode( NODE_OP, OP_DIV, nodel, noder );
}

function symbolicPower( node, nodep )
{
  if( nodep.type == NODE_CONST &&  nodep.value == 0 )
    return createNode ( NODE_CONST, 1 );
  else if ( nodep.type == NODE_CONST && nodep.value == 1 )
    return node;
  else if ( node.type == NODE_CONST && node.value == 1 )
    return createNode ( NODE_CONST, 1 );
  else if ( node.type == NODE_CONST && node.value == 0 )
    return createNode ( NODE_CONST, 0 );
  else if ( node.type == NODE_CONST && node.type == NODE_CONST && nodep.type == NODE_CONST && nodep.type == NODE_CONST )
    return createNode( NODE_CONST, Math.pow( Number( node.value ),  Number( nodep.value ) ) );
  else
    return createNode( NODE_OP, OP_POW, node, nodep );
}

function stringEquationParen( node )
{
  if(node.type == NODE_OP)
    return "(" + stringEquation( node ) + ")";
  else
    return stringEquation( node );
}


function symbolicDiff( node )
{
  var ret = 0;
  
  if( !node )
    return 0;
    
  switch( node.type )
  {
    case NODE_OP:
      switch( node.value )
      {
        case OP_ADD:
          ret = symbolicAdder( symbolicDiff( node.children[0] ), symbolicDiff( node.children[1] ) );
          break;
        case OP_SUB:
          ret = symbolicSubtractor( symbolicDiff( node.children[0] ), symbolicDiff( node.children[1] ) );
          break;
        case OP_DIV:
          ret = symbolicDivisor(symbolicSubtractor(symbolicMultiplier(symbolicDiff(node.children[0]), node.children[1]), symbolicMultiplier(symbolicDiff(node.children[1]), node.children[0])), symbolicPower(node.children[1], createNode(NODE_CONST, 2)));
          break;
        case OP_MUL:
          ret = symbolicAdder( symbolicMultiplier( symbolicDiff(node.children[0]), node.children[1] ), symbolicMultiplier( symbolicDiff(node.children[1]), node.children[0] ) );
          break;
        case OP_NEG:
          ret = symbolicNegation(symbolicDiff(node.children[0]));
          break;
        case OP_POW:
          ret = symbolicAdder(symbolicMultiplier(symbolicMultiplier(node.children[1], symbolicPower(node.children[0], symbolicSubtractor(node.children[1], createNode(NODE_CONST, 1)))), symbolicDiff(node.children[0])), symbolicMultiplier(symbolicMultiplier(symbolicPower(node.children[0], node.children[1]), createNode(NODE_FUNC, FUNC_NLOG, node.children[0])), symbolicDiff(node.children[1])));
          break;
      }
      break;

    case NODE_FUNC:
      switch( node.value )
      {
        case FUNC_SIN:
          ret = symbolicMultiplier( symbolicDiff(node.children[0]), createNode(NODE_FUNC, FUNC_COS, node.children[0]) );
          break;
        case FUNC_COS:
          ret = symbolicNegation(symbolicMultiplier( symbolicDiff(node.children[0]), createNode(NODE_FUNC, FUNC_SIN, node.children[0]) ));
          break;  
      }
      break;

    case NODE_VAR:
      if( node.value == "x" )
        ret = createNode( NODE_CONST, 1 );
      else
        ret = createNode( NODE_CONST, 0 );
      break;
      
    case NODE_CONST:
      ret = createNode( NODE_CONST, 0 );
      break;
  }
  
  return ret;  
}

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
          ret = stringEquation( node.children[0] ) + "+" + stringEquation( node.children[1] );
          break;
        case OP_SUB:
          ret = stringEquation( node.children[0] ) + "-" + stringEquation( node.children[1] );
          break;
        case OP_DIV:
          ret = stringEquationParen( node.children[0] ) + "/" + stringEquationParen( node.children[1] );
          break;
        case OP_MUL:
          left = node.children[0].type == NODE_OP && (node.children[0].value == OP_ADD || node.children[0].value == OP_SUB) ? "(" + stringEquation( node.children[0] ) + ")" : stringEquation( node.children[0] );
          right = node.children[1].type == NODE_OP && (node.children[1].value == OP_ADD || node.children[1].value == OP_SUB) ? "(" + stringEquation( node.children[1] ) + ")" : stringEquation( node.children[1] );
          ret = left + "*" + right;
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
        case FUNC_NLOG:
          ret = "log(" + stringEquation( node.children[0] ) + ")";
          break;  
      }
      break;

    case NODE_VAR:
      ret = node.value;
      break;
      
    case NODE_CONST:
      ret = node.value;
      break;
  }
  
  return ret;  
}

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
          ret = toTex( node.children[0] ) + "+" + toTex( node.children[1] );
          break;
        case OP_SUB:
          ret = toTex( node.children[0] ) + "-" + toTex( node.children[1] );
          break;
        case OP_DIV:
          ret = "{" + toTex( node.children[0] ) + "}/{" + toTex( node.children[1] ) +"}";
          break;
        case OP_MUL:
          if(node.children[0].type == NODE_CONST && node.children[1].type == NODE_CONST)
            ret = toTex( node.children[0] ) +"·"+ toTex( node.children[1] );
          else if(node.children[1].type == NODE_VAR)
            ret = toTex( node.children[0] ) +"\\,"+ toTex( node.children[1] );
          else{
            left = node.children[0].type == NODE_OP && (node.children[0].value == OP_ADD || node.children[0].value == OP_SUB) ? "(" + toTex( node.children[0] ) + ")" : toTex( node.children[0] );
            right = node.children[1].type == NODE_OP && (node.children[1].value == OP_ADD || node.children[1].value == OP_SUB) ? "(" + toTex( node.children[1] ) + ")" : toTex( node.children[1] );
            ret = left + "\\," + right;
          }
          break;
        case OP_NEG:
          ret = node.children[0].type == NODE_OP ? "(-" + toTex( node.children[0] ) + ")" : "-"+ toTex( node.children[0] );
          break;
        case OP_POW:
          left = node.children[0].type == NODE_OP ? "(" + toTex( node.children[0] ) + ")" : toTex( node.children[0] );
          ret = left +"^{"+ toTex(node.children[1]) +"}";
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
        case FUNC_NLOG:
          ret = "log(" + toTex( node.children[0] ) + ")";
          break;
      }
      break;

    case NODE_VAR:
      ret = node.value;
      break;
      
    case NODE_CONST:
      ret = node.value;
      break;
  }
  
  return ret;  
}

function initparser( node )
{
  var func = stringEquation( node );
  var diff = symbolicDiff( node );
  //alert(toMathML( diff ) );
  $("#console").html("<p>$$d/{dx}("+toTex(node)+") = "+toTex( diff )+"$$</p><br><br>"+toTex( diff )+"<br>"+stringEquation(diff));
  M.parseMath(document.getElementById("console"));
}