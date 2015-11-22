     
//Structs
function NODE()
{
var type;
var value;
var children;
}

//Defines
var NODE_OP = 0;
var NODE_VAR = 1;
var NODE_CONST = 2;
var NODE_FUNC = 3;

var OP_ADD = 10;
var OP_SUB = 11;
var OP_DIV = 12;
var OP_MUL = 13;
var OP_NEG = 14;
var OP_POW = 15;

var FUNC_SIN = 16;
var FUNC_SINH = 17;
var FUNC_ASIN = 18;
var FUNC_ASINH = 19;
var FUNC_COS = 20;
var FUNC_COSH = 21;
var FUNC_ACOS = 22;
var FUNC_ACOSH = 23;
var FUNC_TAN = 24;
var FUNC_TANH = 25;
var FUNC_ATAN = 26;
var FUNC_ATANH = 27;
var FUNC_SEC = 28;
var FUNC_SECH = 29;
var FUNC_ASEC = 30;
var FUNC_ASECH = 31;
var FUNC_CSC = 32;
var FUNC_CSCH = 33;
var FUNC_ACSC = 34;
var FUNC_ACSCH = 35;
var FUNC_COT = 36;
var FUNC_COTH = 37;
var FUNC_ACOT = 38;
var FUNC_ACOTH = 39;
var FUNC_SQRT = 40;
var FUNC_EXP = 41;
var FUNC_NLOG = 42;
var FUNC_BLOG = 43;

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


function MathSet(type) {
	this.set = new Set();
	this.map = new Map();
	this.type = type;

	this.add = function (type, value)
	{
		var newvalue = value === undefined ? 1 : value;
		var newtype = type;
		if(this.ithas(type))
		{
			if(type.type == OP_ADD || type.type == OP_MUL)
			{
				newtype = this.ithas(type, true);
				printMathSet(newtype);

			}
			newvalue += this.map.get(newtype);
		}
		this.set.add(newtype);
		this.map.set(newtype, newvalue);
	}

	this.get = function (type)
	{
		return this.map.get(type);
	}

	this.ithas = function (valueorset, ret)
	{
		if(valueorset.type == OP_ADD || valueorset.type == OP_MUL)
		{
			var found = false;
			var obj = null;
			this.set.forEach(function(setvalue) {
				if(setvalue.type == valueorset.type && found == false)
				{
					if(setvalue.compare(valueorset))
					{
						found = true;
						obj = setvalue;
					}
				}
			});
			if(ret == true)
				return obj;
			else
				return found;
		}
		else
		{
			return this.set.has(valueorset);
		}
	}

	this.size = function()
	{
		return this.set.size;
	}

	this.compare = function(set2)
	{
		if(this.set.size != set2.size()) return false;
		if(this.type != set2.type) return false;
		this.set.forEach(function(value) {
			if(!set2.ithas(value))
			{
  				return false;
			}
		});
		return true;
	}
}

function printMathSet(vset)
{
	vset.set.forEach(function(value) {
		console.log(value +":"+ vset.get(value));
		if(value.type == OP_MUL)
			{
				console.log("---->"+ printMathSet(value));
			}
	});
}

var rootset = new MathSet(OP_ADD);
rootset.add(NODE_CONST, 5);
rootset.add("x", 2);
rootset.add("y", 1);
var mulset = new MathSet(OP_MUL);
mulset.add("x", 1);
mulset.add("y", 1);
mulset.add("z", 1);
rootset.add(mulset, 1);

rootset.add(NODE_CONST, 3);
rootset.add("y", 1);

var mulset2 = new MathSet(OP_MUL);
mulset2.add("z", 1);
mulset2.add("x", 1);
mulset2.add("y", 1);

rootset.add(mulset2);

//printMathSet(rootset);
alert(rootset.get(mulset));
//alert(rootset.ithas(mulset));