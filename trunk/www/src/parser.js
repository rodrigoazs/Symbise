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

var OP_ADD = 16;
var OP_SUB = 17;
var OP_DIV = 18;
var OP_MUL = 19;
var OP_NEG = 20;
var OP_POW = 15;

var OP_SIN = 21;
var OP_COS = 22;
var OP_LOG = 23;

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

function execute( node )
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
ret = execute( node.children[0] ) + execute( node.children[1] );
break;
case OP_SUB:
ret = execute( node.children[0] ) - execute( node.children[1] );
break;
case OP_DIV:
ret = execute( node.children[0] ) / execute( node.children[1] );
break;
case OP_MUL:
ret = execute( node.children[0] ) * execute( node.children[1] );
break;
case OP_NEG:
ret = execute( node.children[0] ) * -1;
break;
case OP_POW:
ret = Math.pow(execute( node.children[0] ), execute( node.children[1] ));
case OP_SIN:
ret = Math.sin( execute( node.children[0] ) );
break;
case OP_COS:
ret = Math.cos( execute( node.children[0] ) );
break;
}
break;

case NODE_VAR:
ret = "TESTE";
break;

case NODE_CONST:
ret = Number( node.value );
break;
}

return ret;
}


/*
    Default template driver for JS/CC generated parsers running as
    browser-based JavaScript/ECMAScript applications.
    
    WARNING:     This parser template will not run as console and has lesser
                features for debugging than the console derivates for the
                various JavaScript platforms.
    
    Features:
    - Parser trace messages
    - Integrated panic-mode error recovery
    
    Written 2007, 2008 by Jan Max Meyer, J.M.K S.F. Software Technologies
    
    This is in the public domain.
*/

var _dbg_withtrace        = false;
var _dbg_string            = new String();

function __dbg_print( text )
{
    _dbg_string += text + "\n";
}

function __lex( info )
{
    var state        = 0;
    var match        = -1;
    var match_pos    = 0;
    var start        = 0;
    var pos            = info.offset + 1;

    do
    {
        pos--;
        state = 0;
        match = -2;
        start = pos;

        if( info.src.length <= start )
            return 21;

        do
        {

switch( state )
{
    case 0:
        if( info.src.charCodeAt( pos ) == 9 || info.src.charCodeAt( pos ) == 32 ) state = 1;
        else if( info.src.charCodeAt( pos ) == 40 ) state = 2;
        else if( info.src.charCodeAt( pos ) == 41 ) state = 3;
        else if( info.src.charCodeAt( pos ) == 42 ) state = 4;
        else if( info.src.charCodeAt( pos ) == 43 ) state = 5;
        else if( info.src.charCodeAt( pos ) == 45 ) state = 6;
        else if( info.src.charCodeAt( pos ) == 47 ) state = 7;
        else if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 8;
        else if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 98 ) || ( info.src.charCodeAt( pos ) >= 100 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 9;
        else if( info.src.charCodeAt( pos ) == 94 ) state = 10;
        else if( info.src.charCodeAt( pos ) == 46 ) state = 15;
        else if( info.src.charCodeAt( pos ) == 99 ) state = 19;
        else if( info.src.charCodeAt( pos ) == 108 ) state = 20;
        else if( info.src.charCodeAt( pos ) == 115 ) state = 21;
        else state = -1;
        break;

    case 1:
        state = -1;
        match = 1;
        match_pos = pos;
        break;

    case 2:
        state = -1;
        match = 10;
        match_pos = pos;
        break;

    case 3:
        state = -1;
        match = 11;
        match_pos = pos;
        break;

    case 4:
        state = -1;
        match = 4;
        match_pos = pos;
        break;

    case 5:
        state = -1;
        match = 2;
        match_pos = pos;
        break;

    case 6:
        state = -1;
        match = 3;
        match_pos = pos;
        break;

    case 7:
        state = -1;
        match = 5;
        match_pos = pos;
        break;

    case 8:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 46 ) state = 11;
        else state = -1;
        match = 13;
        match_pos = pos;
        break;

    case 9:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 9;
        else state = -1;
        match = 12;
        match_pos = pos;
        break;

    case 10:
        state = -1;
        match = 6;
        match_pos = pos;
        break;

    case 11:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 11;
        else state = -1;
        match = 14;
        match_pos = pos;
        break;

    case 12:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 9;
        else state = -1;
        match = 8;
        match_pos = pos;
        break;

    case 13:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 9;
        else state = -1;
        match = 9;
        match_pos = pos;
        break;

    case 14:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 9;
        else state = -1;
        match = 7;
        match_pos = pos;
        break;

    case 15:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 11;
        else state = -1;
        break;

    case 16:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 9;
        else if( info.src.charCodeAt( pos ) == 115 ) state = 12;
        else state = -1;
        match = 12;
        match_pos = pos;
        break;

    case 17:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 102 ) || ( info.src.charCodeAt( pos ) >= 104 && info.src.charCodeAt( pos ) <= 122 ) ) state = 9;
        else if( info.src.charCodeAt( pos ) == 103 ) state = 13;
        else state = -1;
        match = 12;
        match_pos = pos;
        break;

    case 18:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 122 ) ) state = 9;
        else if( info.src.charCodeAt( pos ) == 110 ) state = 14;
        else state = -1;
        match = 12;
        match_pos = pos;
        break;

    case 19:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 122 ) ) state = 9;
        else if( info.src.charCodeAt( pos ) == 111 ) state = 16;
        else state = -1;
        match = 12;
        match_pos = pos;
        break;

    case 20:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 122 ) ) state = 9;
        else if( info.src.charCodeAt( pos ) == 111 ) state = 17;
        else state = -1;
        match = 12;
        match_pos = pos;
        break;

    case 21:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 122 ) ) state = 9;
        else if( info.src.charCodeAt( pos ) == 105 ) state = 18;
        else state = -1;
        match = 12;
        match_pos = pos;
        break;

}


            pos++;

        }
        while( state > -1 );

    }
    while( 1 > -1 && match == 1 );

    if( match > -1 )
    {
        info.att = info.src.substr( start, match_pos - start );
        info.offset = match_pos;
        
switch( match )
{
    case 13:
        {
         info.att = parseInt( info.att );
        }
        break;

    case 14:
        {
         info.att = parseFloat( info.att );
        }
        break;

}


    }
    else
    {
        info.att = new String();
        match = -1;
    }

    return match;
}


function __parse( src, err_off, err_la )
{
    var        sstack            = new Array();
    var        vstack            = new Array();
    var     err_cnt            = 0;
    var        act;
    var        go;
    var        la;
    var        rval;
    var     parseinfo        = new Function( "", "var offset; var src; var att;" );
    var        info            = new parseinfo();
    
/* Pop-Table */
var pop_tab = new Array(
    new Array( 0/* p' */, 1 ),
    new Array( 16/* p */, 1 ),
    new Array( 15/* e */, 3 ),
    new Array( 15/* e */, 3 ),
    new Array( 15/* e */, 1 ),
    new Array( 17/* MulDivExp */, 3 ),
    new Array( 17/* MulDivExp */, 2 ),
    new Array( 17/* MulDivExp */, 2 ),
    new Array( 17/* MulDivExp */, 3 ),
    new Array( 17/* MulDivExp */, 1 ),
    new Array( 18/* PowExp */, 3 ),
    new Array( 18/* PowExp */, 1 ),
    new Array( 19/* NegExp */, 2 ),
    new Array( 19/* NegExp */, 1 ),
    new Array( 20/* Value */, 1 ),
    new Array( 20/* Value */, 1 ),
    new Array( 20/* Value */, 1 ),
    new Array( 20/* Value */, 3 ),
    new Array( 20/* Value */, 4 ),
    new Array( 20/* Value */, 4 ),
    new Array( 20/* Value */, 4 )
);

/* Action-Table */
var act_tab = new Array(
    /* State 0 */ new Array( 13/* "INT" */,4 , 14/* "FLOAT" */,5 , 3/* "-" */,8 , 12/* "IDENTIFIER" */,10 , 10/* "(" */,11 , 7/* "sin" */,12 , 8/* "cos" */,13 , 9/* "log" */,14 ),
    /* State 1 */ new Array( 21/* "$" */,0 ),
    /* State 2 */ new Array( 2/* "+" */,15 , 3/* "-" */,16 , 21/* "$" */,-1 ),
    /* State 3 */ new Array( 5/* "/" */,17 , 4/* "*" */,18 , 21/* "$" */,-4 , 3/* "-" */,-4 , 2/* "+" */,-4 , 11/* ")" */,-4 ),
    /* State 4 */ new Array( 12/* "IDENTIFIER" */,19 , 21/* "$" */,-14 , 3/* "-" */,-14 , 2/* "+" */,-14 , 4/* "*" */,-14 , 5/* "/" */,-14 , 6/* "^" */,-14 , 11/* ")" */,-14 ),
    /* State 5 */ new Array( 12/* "IDENTIFIER" */,20 , 21/* "$" */,-15 , 3/* "-" */,-15 , 2/* "+" */,-15 , 4/* "*" */,-15 , 5/* "/" */,-15 , 6/* "^" */,-15 , 11/* ")" */,-15 ),
    /* State 6 */ new Array( 6/* "^" */,21 , 21/* "$" */,-9 , 3/* "-" */,-9 , 2/* "+" */,-9 , 4/* "*" */,-9 , 5/* "/" */,-9 , 11/* ")" */,-9 ),
    /* State 7 */ new Array( 21/* "$" */,-11 , 3/* "-" */,-11 , 2/* "+" */,-11 , 4/* "*" */,-11 , 5/* "/" */,-11 , 6/* "^" */,-11 , 11/* ")" */,-11 ),
    /* State 8 */ new Array( 13/* "INT" */,23 , 14/* "FLOAT" */,24 , 12/* "IDENTIFIER" */,10 , 10/* "(" */,11 , 7/* "sin" */,12 , 8/* "cos" */,13 , 9/* "log" */,14 ),
    /* State 9 */ new Array( 21/* "$" */,-13 , 3/* "-" */,-13 , 2/* "+" */,-13 , 4/* "*" */,-13 , 5/* "/" */,-13 , 6/* "^" */,-13 , 11/* ")" */,-13 ),
    /* State 10 */ new Array( 21/* "$" */,-16 , 3/* "-" */,-16 , 2/* "+" */,-16 , 4/* "*" */,-16 , 5/* "/" */,-16 , 6/* "^" */,-16 , 11/* ")" */,-16 ),
    /* State 11 */ new Array( 13/* "INT" */,4 , 14/* "FLOAT" */,5 , 3/* "-" */,8 , 12/* "IDENTIFIER" */,10 , 10/* "(" */,11 , 7/* "sin" */,12 , 8/* "cos" */,13 , 9/* "log" */,14 ),
    /* State 12 */ new Array( 10/* "(" */,26 ),
    /* State 13 */ new Array( 10/* "(" */,27 ),
    /* State 14 */ new Array( 10/* "(" */,28 ),
    /* State 15 */ new Array( 13/* "INT" */,4 , 14/* "FLOAT" */,5 , 3/* "-" */,8 , 12/* "IDENTIFIER" */,10 , 10/* "(" */,11 , 7/* "sin" */,12 , 8/* "cos" */,13 , 9/* "log" */,14 ),
    /* State 16 */ new Array( 13/* "INT" */,4 , 14/* "FLOAT" */,5 , 3/* "-" */,8 , 12/* "IDENTIFIER" */,10 , 10/* "(" */,11 , 7/* "sin" */,12 , 8/* "cos" */,13 , 9/* "log" */,14 ),
    /* State 17 */ new Array( 3/* "-" */,8 , 13/* "INT" */,23 , 14/* "FLOAT" */,24 , 12/* "IDENTIFIER" */,10 , 10/* "(" */,11 , 7/* "sin" */,12 , 8/* "cos" */,13 , 9/* "log" */,14 ),
    /* State 18 */ new Array( 3/* "-" */,8 , 13/* "INT" */,23 , 14/* "FLOAT" */,24 , 12/* "IDENTIFIER" */,10 , 10/* "(" */,11 , 7/* "sin" */,12 , 8/* "cos" */,13 , 9/* "log" */,14 ),
    /* State 19 */ new Array( 21/* "$" */,-6 , 3/* "-" */,-6 , 2/* "+" */,-6 , 4/* "*" */,-6 , 5/* "/" */,-6 , 11/* ")" */,-6 ),
    /* State 20 */ new Array( 21/* "$" */,-7 , 3/* "-" */,-7 , 2/* "+" */,-7 , 4/* "*" */,-7 , 5/* "/" */,-7 , 11/* ")" */,-7 ),
    /* State 21 */ new Array( 3/* "-" */,8 , 13/* "INT" */,23 , 14/* "FLOAT" */,24 , 12/* "IDENTIFIER" */,10 , 10/* "(" */,11 , 7/* "sin" */,12 , 8/* "cos" */,13 , 9/* "log" */,14 ),
    /* State 22 */ new Array( 21/* "$" */,-12 , 3/* "-" */,-12 , 2/* "+" */,-12 , 4/* "*" */,-12 , 5/* "/" */,-12 , 6/* "^" */,-12 , 11/* ")" */,-12 ),
    /* State 23 */ new Array( 21/* "$" */,-14 , 3/* "-" */,-14 , 2/* "+" */,-14 , 4/* "*" */,-14 , 5/* "/" */,-14 , 6/* "^" */,-14 , 11/* ")" */,-14 ),
    /* State 24 */ new Array( 21/* "$" */,-15 , 3/* "-" */,-15 , 2/* "+" */,-15 , 4/* "*" */,-15 , 5/* "/" */,-15 , 6/* "^" */,-15 , 11/* ")" */,-15 ),
    /* State 25 */ new Array( 2/* "+" */,15 , 3/* "-" */,16 , 11/* ")" */,34 ),
    /* State 26 */ new Array( 13/* "INT" */,4 , 14/* "FLOAT" */,5 , 3/* "-" */,8 , 12/* "IDENTIFIER" */,10 , 10/* "(" */,11 , 7/* "sin" */,12 , 8/* "cos" */,13 , 9/* "log" */,14 ),
    /* State 27 */ new Array( 13/* "INT" */,4 , 14/* "FLOAT" */,5 , 3/* "-" */,8 , 12/* "IDENTIFIER" */,10 , 10/* "(" */,11 , 7/* "sin" */,12 , 8/* "cos" */,13 , 9/* "log" */,14 ),
    /* State 28 */ new Array( 13/* "INT" */,4 , 14/* "FLOAT" */,5 , 3/* "-" */,8 , 12/* "IDENTIFIER" */,10 , 10/* "(" */,11 , 7/* "sin" */,12 , 8/* "cos" */,13 , 9/* "log" */,14 ),
    /* State 29 */ new Array( 5/* "/" */,17 , 4/* "*" */,18 , 21/* "$" */,-3 , 3/* "-" */,-3 , 2/* "+" */,-3 , 11/* ")" */,-3 ),
    /* State 30 */ new Array( 5/* "/" */,17 , 4/* "*" */,18 , 21/* "$" */,-2 , 3/* "-" */,-2 , 2/* "+" */,-2 , 11/* ")" */,-2 ),
    /* State 31 */ new Array( 6/* "^" */,21 , 21/* "$" */,-8 , 3/* "-" */,-8 , 2/* "+" */,-8 , 4/* "*" */,-8 , 5/* "/" */,-8 , 11/* ")" */,-8 ),
    /* State 32 */ new Array( 6/* "^" */,21 , 21/* "$" */,-5 , 3/* "-" */,-5 , 2/* "+" */,-5 , 4/* "*" */,-5 , 5/* "/" */,-5 , 11/* ")" */,-5 ),
    /* State 33 */ new Array( 21/* "$" */,-10 , 3/* "-" */,-10 , 2/* "+" */,-10 , 4/* "*" */,-10 , 5/* "/" */,-10 , 6/* "^" */,-10 , 11/* ")" */,-10 ),
    /* State 34 */ new Array( 21/* "$" */,-17 , 3/* "-" */,-17 , 2/* "+" */,-17 , 4/* "*" */,-17 , 5/* "/" */,-17 , 6/* "^" */,-17 , 11/* ")" */,-17 ),
    /* State 35 */ new Array( 2/* "+" */,15 , 3/* "-" */,16 , 11/* ")" */,38 ),
    /* State 36 */ new Array( 2/* "+" */,15 , 3/* "-" */,16 , 11/* ")" */,39 ),
    /* State 37 */ new Array( 2/* "+" */,15 , 3/* "-" */,16 , 11/* ")" */,40 ),
    /* State 38 */ new Array( 21/* "$" */,-18 , 3/* "-" */,-18 , 2/* "+" */,-18 , 4/* "*" */,-18 , 5/* "/" */,-18 , 6/* "^" */,-18 , 11/* ")" */,-18 ),
    /* State 39 */ new Array( 21/* "$" */,-19 , 3/* "-" */,-19 , 2/* "+" */,-19 , 4/* "*" */,-19 , 5/* "/" */,-19 , 6/* "^" */,-19 , 11/* ")" */,-19 ),
    /* State 40 */ new Array( 21/* "$" */,-20 , 3/* "-" */,-20 , 2/* "+" */,-20 , 4/* "*" */,-20 , 5/* "/" */,-20 , 6/* "^" */,-20 , 11/* ")" */,-20 )
);

/* Goto-Table */
var goto_tab = new Array(
    /* State 0 */ new Array( 16/* p */,1 , 15/* e */,2 , 17/* MulDivExp */,3 , 18/* PowExp */,6 , 19/* NegExp */,7 , 20/* Value */,9 ),
    /* State 1 */ new Array( ),
    /* State 2 */ new Array( ),
    /* State 3 */ new Array( ),
    /* State 4 */ new Array( ),
    /* State 5 */ new Array( ),
    /* State 6 */ new Array( ),
    /* State 7 */ new Array( ),
    /* State 8 */ new Array( 20/* Value */,22 ),
    /* State 9 */ new Array( ),
    /* State 10 */ new Array( ),
    /* State 11 */ new Array( 15/* e */,25 , 17/* MulDivExp */,3 , 18/* PowExp */,6 , 19/* NegExp */,7 , 20/* Value */,9 ),
    /* State 12 */ new Array( ),
    /* State 13 */ new Array( ),
    /* State 14 */ new Array( ),
    /* State 15 */ new Array( 17/* MulDivExp */,29 , 18/* PowExp */,6 , 19/* NegExp */,7 , 20/* Value */,9 ),
    /* State 16 */ new Array( 17/* MulDivExp */,30 , 18/* PowExp */,6 , 19/* NegExp */,7 , 20/* Value */,9 ),
    /* State 17 */ new Array( 18/* PowExp */,31 , 19/* NegExp */,7 , 20/* Value */,9 ),
    /* State 18 */ new Array( 18/* PowExp */,32 , 19/* NegExp */,7 , 20/* Value */,9 ),
    /* State 19 */ new Array( ),
    /* State 20 */ new Array( ),
    /* State 21 */ new Array( 19/* NegExp */,33 , 20/* Value */,9 ),
    /* State 22 */ new Array( ),
    /* State 23 */ new Array( ),
    /* State 24 */ new Array( ),
    /* State 25 */ new Array( ),
    /* State 26 */ new Array( 15/* e */,35 , 17/* MulDivExp */,3 , 18/* PowExp */,6 , 19/* NegExp */,7 , 20/* Value */,9 ),
    /* State 27 */ new Array( 15/* e */,36 , 17/* MulDivExp */,3 , 18/* PowExp */,6 , 19/* NegExp */,7 , 20/* Value */,9 ),
    /* State 28 */ new Array( 15/* e */,37 , 17/* MulDivExp */,3 , 18/* PowExp */,6 , 19/* NegExp */,7 , 20/* Value */,9 ),
    /* State 29 */ new Array( ),
    /* State 30 */ new Array( ),
    /* State 31 */ new Array( ),
    /* State 32 */ new Array( ),
    /* State 33 */ new Array( ),
    /* State 34 */ new Array( ),
    /* State 35 */ new Array( ),
    /* State 36 */ new Array( ),
    /* State 37 */ new Array( ),
    /* State 38 */ new Array( ),
    /* State 39 */ new Array( ),
    /* State 40 */ new Array( )
);



/* Symbol labels */
var labels = new Array(
    "p'" /* Non-terminal symbol */,
    "WHITESPACE" /* Terminal symbol */,
    "+" /* Terminal symbol */,
    "-" /* Terminal symbol */,
    "*" /* Terminal symbol */,
    "/" /* Terminal symbol */,
    "^" /* Terminal symbol */,
    "sin" /* Terminal symbol */,
    "cos" /* Terminal symbol */,
    "log" /* Terminal symbol */,
    "(" /* Terminal symbol */,
    ")" /* Terminal symbol */,
    "IDENTIFIER" /* Terminal symbol */,
    "INT" /* Terminal symbol */,
    "FLOAT" /* Terminal symbol */,
    "e" /* Non-terminal symbol */,
    "p" /* Non-terminal symbol */,
    "MulDivExp" /* Non-terminal symbol */,
    "PowExp" /* Non-terminal symbol */,
    "NegExp" /* Non-terminal symbol */,
    "Value" /* Non-terminal symbol */,
    "$" /* Terminal symbol */
);


    
    info.offset = 0;
    info.src = src;
    info.att = new String();
    
    if( !err_off )
        err_off    = new Array();
    if( !err_la )
    err_la = new Array();
    
    sstack.push( 0 );
    vstack.push( 0 );
    
    la = __lex( info );

    while( true )
    {
        act = 42;
        for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
        {
            if( act_tab[sstack[sstack.length-1]][i] == la )
            {
                act = act_tab[sstack[sstack.length-1]][i+1];
                break;
            }
        }

        if( _dbg_withtrace && sstack.length > 0 )
        {
            __dbg_print( "\nState " + sstack[sstack.length-1] + "\n" +
                            "\tLookahead: " + labels[la] + " (\"" + info.att + "\")\n" +
                            "\tAction: " + act + "\n" +
                            "\tSource: \"" + info.src.substr( info.offset, 30 ) + ( ( info.offset + 30 < info.src.length ) ?
                                    "..." : "" ) + "\"\n" +
                            "\tStack: " + sstack.join() + "\n" +
                            "\tValue stack: " + vstack.join() + "\n" );
        }
        
            
        //Panic-mode: Try recovery when parse-error occurs!
        if( act == 42 )
        {
            if( _dbg_withtrace )
                __dbg_print( "Error detected: There is no reduce or shift on the symbol " + labels[la] );
            
            err_cnt++;
            err_off.push( info.offset - info.att.length );            
            err_la.push( new Array() );
            for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
                err_la[err_la.length-1].push( labels[act_tab[sstack[sstack.length-1]][i]] );
            
            //Remember the original stack!
            var rsstack = new Array();
            var rvstack = new Array();
            for( var i = 0; i < sstack.length; i++ )
            {
                rsstack[i] = sstack[i];
                rvstack[i] = vstack[i];
            }
            
            while( act == 42 && la != 21 )
            {
                if( _dbg_withtrace )
                    __dbg_print( "\tError recovery\n" +
                                    "Current lookahead: " + labels[la] + " (" + info.att + ")\n" +
                                    "Action: " + act + "\n\n" );
                if( la == -1 )
                    info.offset++;
                    
                while( act == 42 && sstack.length > 0 )
                {
                    sstack.pop();
                    vstack.pop();
                    
                    if( sstack.length == 0 )
                        break;
                        
                    act = 42;
                    for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
                    {
                        if( act_tab[sstack[sstack.length-1]][i] == la )
                        {
                            act = act_tab[sstack[sstack.length-1]][i+1];
                            break;
                        }
                    }
                }
                
                if( act != 42 )
                    break;
                
                for( var i = 0; i < rsstack.length; i++ )
                {
                    sstack.push( rsstack[i] );
                    vstack.push( rvstack[i] );
                }
                
                la = __lex( info );
            }
            
            if( act == 42 )
            {
                if( _dbg_withtrace )
                    __dbg_print( "\tError recovery failed, terminating parse process..." );
                break;
            }


            if( _dbg_withtrace )
                __dbg_print( "\tError recovery succeeded, continuing" );
        }
        
        /*
        if( act == 42 )
            break;
        */
        
        
        //Shift
        if( act > 0 )
        {            
            if( _dbg_withtrace )
                __dbg_print( "Shifting symbol: " + labels[la] + " (" + info.att + ")" );
        
            sstack.push( act );
            vstack.push( info.att );
            
            la = __lex( info );
            
            if( _dbg_withtrace )
                __dbg_print( "\tNew lookahead symbol: " + labels[la] + " (" + info.att + ")" );
        }
        //Reduce
        else
        {        
            act *= -1;
            
            if( _dbg_withtrace )
                __dbg_print( "Reducing by producution: " + act );
            
            rval = void(0);
            
            if( _dbg_withtrace )
                __dbg_print( "\tPerforming semantic action..." );
            
switch( act )
{
    case 0:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 1:
    {
         initparser(vstack[ vstack.length - 1 ]);
    }
    break;
    case 2:
    {
         rval = createNode( NODE_OP, OP_SUB, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] );
    }
    break;
    case 3:
    {
         rval = createNode( NODE_OP, OP_ADD, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] );
    }
    break;
    case 4:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 5:
    {
         rval = createNode( NODE_OP, OP_MUL, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] );
    }
    break;
    case 6:
    {
         rval = createNode( NODE_OP, OP_MUL, vstack[ vstack.length - 2 ], vstack[ vstack.length - 1 ] );
    }
    break;
    case 7:
    {
         rval = createNode( NODE_OP, OP_MUL, vstack[ vstack.length - 2 ], vstack[ vstack.length - 1 ] );
    }
    break;
    case 8:
    {
         rval = createNode( NODE_OP, OP_DIV, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] );
    }
    break;
    case 9:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 10:
    {
         rval = createNode( NODE_OP, OP_POW, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] );
    }
    break;
    case 11:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 12:
    {
         rval = createNode( NODE_OP, OP_NEG, vstack[ vstack.length - 1 ] );
    }
    break;
    case 13:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 14:
    {
         rval = createNode( NODE_CONST, vstack[ vstack.length - 1 ] );
    }
    break;
    case 15:
    {
         rval = createNode( NODE_CONST, vstack[ vstack.length - 1 ] );
    }
    break;
    case 16:
    {
         rval = createNode( NODE_VAR, vstack[ vstack.length - 1 ] );
    }
    break;
    case 17:
    {
         rval = vstack[ vstack.length - 2 ];
    }
    break;
    case 18:
    {
         rval = createNode( NODE_OP, OP_SIN, vstack[ vstack.length - 2 ] );
    }
    break;
    case 19:
    {
         rval = createNode( NODE_OP, OP_COS, vstack[ vstack.length - 2 ] );
    }
    break;
    case 20:
    {
         rval = createNode( NODE_OP, OP_LOG, vstack[ vstack.length - 2 ] );
    }
    break;
}



            if( _dbg_withtrace )
                __dbg_print( "\tPopping " + pop_tab[act][1] + " off the stack..." );
                
            for( var i = 0; i < pop_tab[act][1]; i++ )
            {
                sstack.pop();
                vstack.pop();
            }
                                    
            go = -1;
            for( var i = 0; i < goto_tab[sstack[sstack.length-1]].length; i+=2 )
            {
                if( goto_tab[sstack[sstack.length-1]][i] == pop_tab[act][0] )
                {
                    go = goto_tab[sstack[sstack.length-1]][i+1];
                    break;
                }
            }
            
            if( act == 0 )
                break;
                
            if( _dbg_withtrace )
                __dbg_print( "\tPushing non-terminal " + labels[ pop_tab[act][0] ] );
                
            sstack.push( go );
            vstack.push( rval );            
        }
        
        if( _dbg_withtrace )
        {        
            alert( _dbg_string );
            _dbg_string = new String();
        }
    }

    if( _dbg_withtrace )
    {
        __dbg_print( "\nParse complete." );
        alert( _dbg_string );
    }
    
    return err_cnt;
}


var error_offsets = new Array();
var error_lookaheads = new Array();
var error_count = 0;
/*var str = prompt( "Please enter a string to be parsed:", "" );
if( ( error_count = __parse( str, error_offsets, error_lookaheads ) ) > 0 )
    { var errstr = new String(); for( var i = 0; i < error_count; i++ )
        errstr += "Parse error in line " + ( str.substr( 0, error_offsets[i] ).match( /\n/g ) ? str.substr( 0, error_offsets[i] ).match( /\n/g ).length : 1 ) + " near \"" + str.substr( error_offsets[i] ) + "\", expecting \"" + error_lookaheads[i].join() + "\"\n" ;
        //alert( errstr );
        $("#console").text(errstr);
        $("#console").css("visibility", "visible");
    }*/