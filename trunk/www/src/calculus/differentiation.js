function symbolicAdder( nodel, noder )
{
  if( nodel.type == NODE_INT && noder.type == NODE_INT && nodel.value == 0 && noder.value == 0 )
    return createNode ( NODE_INT, 0 );
  else if ( nodel.type == NODE_INT && nodel.value == 0 )
    return noder;
  else if ( noder.type == NODE_INT && noder.value == 0 )
    return nodel;
  else if ( nodel.type == NODE_INT && noder.type == NODE_INT )
    return createNode( NODE_INT, Number( nodel.value ) + Number( noder.value ) );
  else
    return createNode( NODE_OP, OP_ADD, nodel, noder );
}

function symbolicMultiplier( nodel, noder )
{
  if( nodel.type == NODE_INT &&  nodel.value == 0 || noder.type == NODE_INT  && noder.value == 0 )
    return createNode ( NODE_INT, 0 );
  else if ( nodel.type == NODE_INT && nodel.value == 1 )
    return noder;
  else if ( noder.type == NODE_INT && noder.value == 1 )
    return nodel;
  else if ( nodel.type == NODE_INT && noder.type == NODE_INT )
    return createNode( NODE_INT, Number( nodel.value ) * Number( noder.value ) );
  else
    return createNode( NODE_OP, OP_MUL, nodel, noder );
}

function symbolicSubtractor( nodel, noder )
{
  // case both are consts 0
  if( nodel.type == NODE_INT && noder.type == NODE_INT && nodel.value == 0 && noder.value == 0 )
    return createNode ( NODE_INT, 0 );
  // case left is const 0
  else if ( nodel.type == NODE_INT && nodel.value == 0 )
    return symbolicNegation( noder );
  // case both are consts 0 and left is smaller than right
  else if ( nodel.type == NODE_INT && noder.type == NODE_INT  && Number( nodel.value ) < Number( noder.value ))
  	return symbolicNegation(createNode( NODE_INT, -(Number( nodel.value ) - Number( noder.value ))));
  // case both are consts 0 and rifht is smaller than left or equal
  else if ( nodel.type == NODE_INT && noder.type == NODE_INT )
    return createNode( NODE_INT, Number( nodel.value ) - Number( noder.value ) );
  // case both sides are negations
  else if ( nodel.type == NODE_OP && nodel.value == OP_NEG && noder.type == NODE_OP && noder.value == OP_NEG )
  	return symbolicSubtractor( noder.children[0], nodel.children[0]);
  // case right side is a negation
  else if ( noder.type == NODE_OP && noder.value == OP_NEG )
  	return symbolicAdder( nodel.children[0], noder);
  // case left sides is a negation and both sides are consts
  else if ( nodel.type == NODE_OP && nodel.value == OP_NEG && nodel.children[0].type == NODE_INT && noder.type == NODE_INT )
  	return symbolicNegation( createNode(NODE_INT, Number( nodel.children[0].value ) + Number( noder.value )) );
  else
    return createNode( NODE_OP, OP_SUB, nodel, noder );
}

function symbolicNegation( node )
{
  if( node.type == NODE_INT && node.value == 0)
    return createNode ( NODE_INT, 0 );
  else if ( node.type == NODE_INT )
    return createNode( NODE_INT, Number( node.value ) * -1 );
  else
    return createNode( NODE_OP, OP_NEG, node );
}

function symbolicDivisor( nodel, noder )
{
  // Division by zero
  //if( noder.type == NODE_INT  && noder.value == 0 )
  //  return createNode ( NODE_INT, 0 );
  if ( nodel.type == NODE_INT && nodel.value == 0 )
    return createNode(NODE_INT, 0 );
  else if ( noder.type == NODE_INT && noder.value == 1 )
    return nodel;
  else if ( nodel.type == NODE_INT && noder.type == NODE_INT && Number( nodel.value ) % Number( noder.value ) == 0 )
    return createNode( NODE_INT, Number( nodel.value ) / Number( noder.value ) );
  else
    return createNode( NODE_OP, OP_DIV, nodel, noder );
}

function symbolicPower( node, nodep )
{
  if( nodep.type == NODE_INT &&  nodep.value == 0 )
    return createNode ( NODE_INT, 1 );
  else if ( nodep.type == NODE_INT && nodep.value == 1 )
    return node;
  else if ( node.type == NODE_INT && node.value == 1 )
    return createNode ( NODE_INT, 1 );
  else if ( node.type == NODE_INT && node.value == 0 )
    return createNode ( NODE_INT, 0 );
  else if ( node.type == NODE_INT && node.type == NODE_INT && nodep.type == NODE_INT && nodep.type == NODE_INT )
    return createNode( NODE_INT, Math.pow( Number( node.value ),  Number( nodep.value ) ) );
  else
    return createNode( NODE_OP, OP_POW, node, nodep );
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
          ret = symbolicDivisor(symbolicSubtractor(symbolicMultiplier(symbolicDiff(node.children[0]), node.children[1]), symbolicMultiplier(symbolicDiff(node.children[1]), node.children[0])), symbolicPower(node.children[1], createNode(NODE_INT, 2)));
          break;
        case OP_MUL:
          ret = symbolicAdder( symbolicMultiplier( symbolicDiff(node.children[0]), node.children[1] ), symbolicMultiplier( symbolicDiff(node.children[1]), node.children[0] ) );
          break;
        case OP_NEG:
          ret = symbolicNegation(symbolicDiff(node.children[0]));
          break;
        case OP_POW:
          ret = symbolicAdder(symbolicMultiplier(symbolicMultiplier(node.children[1], symbolicPower(node.children[0], symbolicSubtractor(node.children[1], createNode(NODE_INT, 1)))), symbolicDiff(node.children[0])), symbolicMultiplier(symbolicMultiplier(symbolicPower(node.children[0], node.children[1]), createNode(NODE_FUNC, FUNC_NLOG, node.children[0])), symbolicDiff(node.children[1])));
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
        case FUNC_ASINH:
          ret = symbolicDivisor(symbolicDiff(node.children[0]), createNode(NODE_FUNC, FUNC_SQRT, symbolicAdder(createNode(NODE_INT, 1), symbolicPower(node.children[0], createNode(NODE_INT, 2)))));
          break;
        case FUNC_SINH:
          ret = symbolicMultiplier(symbolicDiff(node.children[0]), createNode(NODE_FUNC, FUNC_COSH, node.children[0]));
          break;
        case FUNC_ASIN:
          ret = symbolicDivisor(symbolicDiff(node.children[0]), createNode(NODE_FUNC, FUNC_SQRT, symbolicSubtractor(createNode(NODE_INT, 1), symbolicPower(node.children[0], createNode(NODE_INT, 2)))));
          break;
        case FUNC_ACOSH:
          ret = symbolicDivisor(symbolicDiff(node.children[0]), createNode(NODE_FUNC, FUNC_SQRT, symbolicSubtractor(symbolicPower(node.children[0], createNode(NODE_INT, 2)), createNode(NODE_INT, 1))));
          break;
        case FUNC_COSH:
          ret = symbolicMultiplier(symbolicDiff(node.children[0]), createNode(NODE_FUNC, FUNC_SINH, node.children[0]));
          break;
        case FUNC_ACOS:
          ret = symbolicDivisor(symbolicNegation(symbolicDiff(node.children[0])), createNode(NODE_FUNC, FUNC_SQRT, symbolicSubtractor(1, symbolicPower(node.children[0], createNode(NODE_INT, 2)))));
          break;
        case FUNC_ATANH:
          ret = symbolicDivisor(symbolicDiff(node.children[0]), symbolicSubtractor(createNode(NODE_INT, 1), symbolicPower(node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_TANH:
          ret = symbolicMultiplier(symbolicDiff(node.children[0]), symbolicPower(createNode(NODE_FUNC, FUNC_SECH, node.children[0]), createNode(NODE_INT, 2)));
          break;
        case FUNC_ATAN:
          ret = symbolicDivisor(symbolicDiff(node.children[0]), symbolicAdder(createNode(NODE_INT, 1), symbolicPower(node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_TAN:
          ret = symbolicDivisor(symbolicDiff(node.children[0]), symbolicPower(createNode(NODE_FUNC, FUNC_SEC, node.children[0]), createNode(NODE_INT, 2)));
          break;
        case FUNC_ASECH:
          ret = symbolicDivisor(symbolicNegation(symbolicDiff(node.children[0])), symbolicMultiplier(symbolicMultiplier(node.children[0], creteNode(NODE_FUNC, FUNC_SQRT, symbolicDivisor(symbolicSubtractor(1, node.children[0]), symbolicAdder(1, node.children[0])))), symbolicAdder(1, node.children[0])));
          break;
        case FUNC_SECH:
          ret = symbolicMultiplier(symbolicNegation(symbolicDiff(node.children[0])), symbolicMultiplier(createNode(NODE_FUNC, FUNC_SECH, node.children[0]), createNode(NODE_FUNC, FUNC_TANH, node.children[0])));
          break;
        case FUNC_ASEC:
          ret = symbolicDivisor(symbolicDiff(node.children[0]), symbolicMultiplier(node.children[0], createNode(NODE_FUNC, FUNC_SQRT, symbolicSubtractor(symbolicPower(node.children[0], createNode(NODE_INT, 2)), createNode(NODE_INT, 1)))));
          break;
        case FUNC_SEC:
          ret = symbolicMultiplier(symbolicDiff(node.children[0]), symbolicMultiplier(createNode(NODE_FUNC, FUNC_TAN, node.children[0]), createNode(NODE_FUNC, FUNC_SEC, node.children[0])));
          break;
        case FUNC_ACSCH:
          ret = symbolicDivisor(symbolicNegation(symbolicDiff(node.children[0])), symbolicMultiplier(createNode(NODE_FUNC, FUNC_SQRT, symbolicAdder(createNode(NODE_INT, 1), symbolicDivisor(createNode(NODE_INT, 1), symbolicPower(node.children[0], createNode(NODE_INT, 2))))), symbolicPower(node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_CSCH:
          ret = symbolicMultiplier(symbolicMultiplier(symbolicNegation(symbolicDiff(node.children[0])), createNode(NODE_FUNC, FUNC_COTH, node.children[0])), createNode(NODE_FUNC, FUNC_CSCH, node.children[0]));
          break;
		    case FUNC_ACSC:
          ret = symbolicDivisor(symbolicNegation(symbolicDiff(node.children[0])), symbolicMultiplier(node.children[0], createNode(NODE_FUNC, FUNC_SQRT, symbolicSubtractor(symbolicPower(node.children[0], createNode(NODE_INT, 2)), createNode(NODE_INT, 1)))));
          break;
        case FUNC_CSC:
          ret = symbolicMultiplier(symbolicMultiplier(symbolicNegation(symbolicDiff(node.children[0])), createNode(NODE_FUNC, FUNC_COT, node.children[0])), createNode(NODE_FUNC, FUNC_CSC, node.children[0]));
          break;
        case FUNC_ACOTH:
          ret = symbolicDivisor(symbolicDiff(node.children[0]), symbolicSubtractor(createNode(NODE_INT, 1), symbolicPower(node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_COTH:
          ret = symbolicMultiplier(symbolicNegation(symbolicDiff(node.children[0])), symbolicPower(createNode(NODE_FUNC, FUNC_CSCH, node.children[0]), createNode(NODE_INT, 2)));
          break;
        case FUNC_ACOT:
          ret = symbolicDivisor(symbolicNegation(symbolicDiff(node.children[0])), symbolicAdder(createNode(NODE_INT, 1), symbolicPower(node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_COT:
          ret = symbolicMultiplier(symbolicNegation(symbolicDiff(node.children[0])), symbolicPower(createNode(NODE_FUNC, FUNC_CSC, node.children[0]), createNode(NODE_INT, 2)));
          break;
        case FUNC_SQRT:
          ret = symbolicDivisor(symbolicDiff(node.children[0]), symbolicMultiplier(createNode(NODE_INT, 2), createNode(NODE_FUNC, FUNC_SQRT, node.children[0])));
          break;
        case FUNC_EXP:
          ret = symbolicMultiplier(symbolicDiff(node.children[0]), createNode(NODE_FUNC, FUNC_EXP, node.children[0]));
          break;
        case FUNC_NLOG:
          ret = symbolicDivisor(symbolicDiff(node.children[0]), node.children[0]);
          break;
        case FUNC_BLOG:
          ret = symbolicDivisor(symbolicDiff(node.children[1]), symbolicMultiplier(node.children[1], createNode(NODE_FUNC, FUNC_NLOG, node.children[0])));
          break;
      }
      break;

    case NODE_SYM:
      if( node.value == "x" )
        ret = createNode( NODE_INT, 1 );
      else
        ret = createNode( NODE_INT, 0 );
      break;

    case NODE_INT:
      ret = createNode( NODE_INT, 0 );
      break;
  }

  return ret;
}
