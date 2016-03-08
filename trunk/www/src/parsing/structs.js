
//Structs
function NODE()
{
var type;
var value;
var children;
}

//Defines
var NODE_OP = 0;    // Operator
var NODE_SYM = 1;   // Symbol
var NODE_INT = 2;   // Integer
var NODE_FUNC = 3;  // Function

var OP_ADD = 10;    // Addition
var OP_SUB = 11;    // Subtraction
var OP_DIV = 12;    // Division (used for interpreting "/" and for fractions after automatic simplification)
var OP_MUL = 13;    // Multiplication
var OP_NEG = 14;    // Negation
var OP_POW = 15;    // Power

var FUNC_SQRT = 20;
var FUNC_EXP = 21;
var FUNC_NLOG = 22;
var FUNC_BLOG = 23;
var FUNC_SIN = 24;
var FUNC_COS = 25;
var FUNC_TAN = 26;
var FUNC_SINH = 27;
var FUNC_COSH = 28;
var FUNC_TANH = 29;
var FUNC_ASIN = 30;
var FUNC_ACOS = 31;
var FUNC_ATAN = 32;
var FUNC_ASINH = 33;
var FUNC_ACOSH = 34;
var FUNC_ATANH = 35;
var FUNC_SEC = 36;
var FUNC_SECH = 37;
var FUNC_ASEC = 38;
var FUNC_ASECH = 39;
var FUNC_CSC = 40;
var FUNC_CSCH = 41;
var FUNC_ACSC = 42;
var FUNC_ACSCH = 43;
var FUNC_COT = 44;
var FUNC_COTH = 45;
var FUNC_ACOT = 46;
var FUNC_ACOTH = 47;

//Management functions
function createNode( type, value, childs )
{
  var n = new NODE();
  n.type = type;
  n.value = value;
  n.children = new Array();

  for( var i = 2; i < arguments.length; i++ )
  n.children.push( arguments[i] );

  return n;
}

// Same function as createNode instead of using array parameter
function createNodeWithArray(type, value, childs)
{
  var n = new NODE();
  n.type = type;
  n.value = value;
  n.children = new Array();

  for( var i = 0; i < childs.length; i++ )
  	n.children.push( childs[i] );

  return n;
}
