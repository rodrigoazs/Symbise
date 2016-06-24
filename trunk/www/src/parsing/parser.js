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
            return 51;

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
        else if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 98 || info.src.charCodeAt( pos ) == 100 || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 9;
        else if( info.src.charCodeAt( pos ) == 94 ) state = 10;
        else if( info.src.charCodeAt( pos ) == 46 ) state = 39;
        else if( info.src.charCodeAt( pos ) == 97 ) state = 40;
        else if( info.src.charCodeAt( pos ) == 99 ) state = 42;
        else if( info.src.charCodeAt( pos ) == 101 ) state = 44;
        else if( info.src.charCodeAt( pos ) == 108 ) state = 46;
        else if( info.src.charCodeAt( pos ) == 115 ) state = 48;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 50;
        else state = -1;
        break;

    case 1:
        state = -1;
        match = 1;
        match_pos = pos;
        break;

    case 2:
        state = -1;
        match = 34;
        match_pos = pos;
        break;

    case 3:
        state = -1;
        match = 35;
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
        match = 37;
        match_pos = pos;
        break;

    case 9:
        state = -1;
        match = 36;
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
        match = 38;
        match_pos = pos;
        break;

    case 12:
        if( info.src.charCodeAt( pos ) == 104 ) state = 26;
        else state = -1;
        match = 8;
        match_pos = pos;
        break;

    case 13:
        if( info.src.charCodeAt( pos ) == 104 ) state = 27;
        else state = -1;
        match = 27;
        match_pos = pos;
        break;

    case 14:
        if( info.src.charCodeAt( pos ) == 104 ) state = 28;
        else state = -1;
        match = 23;
        match_pos = pos;
        break;

    case 15:
        state = -1;
        match = 32;
        match_pos = pos;
        break;

    case 16:
        state = -1;
        match = 33;
        match_pos = pos;
        break;

    case 17:
        if( info.src.charCodeAt( pos ) == 104 ) state = 29;
        else state = -1;
        match = 19;
        match_pos = pos;
        break;

    case 18:
        if( info.src.charCodeAt( pos ) == 104 ) state = 30;
        else state = -1;
        match = 7;
        match_pos = pos;
        break;

    case 19:
        if( info.src.charCodeAt( pos ) == 104 ) state = 32;
        else state = -1;
        match = 9;
        match_pos = pos;
        break;

    case 20:
        if( info.src.charCodeAt( pos ) == 104 ) state = 33;
        else state = -1;
        match = 14;
        match_pos = pos;
        break;

    case 21:
        if( info.src.charCodeAt( pos ) == 104 ) state = 34;
        else state = -1;
        match = 28;
        match_pos = pos;
        break;

    case 22:
        if( info.src.charCodeAt( pos ) == 104 ) state = 35;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 23:
        if( info.src.charCodeAt( pos ) == 104 ) state = 36;
        else state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 24:
        if( info.src.charCodeAt( pos ) == 104 ) state = 37;
        else state = -1;
        match = 13;
        match_pos = pos;
        break;

    case 25:
        if( info.src.charCodeAt( pos ) == 104 ) state = 38;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 26:
        state = -1;
        match = 11;
        match_pos = pos;
        break;

    case 27:
        state = -1;
        match = 29;
        match_pos = pos;
        break;

    case 28:
        state = -1;
        match = 25;
        match_pos = pos;
        break;

    case 29:
        state = -1;
        match = 21;
        match_pos = pos;
        break;

    case 30:
        state = -1;
        match = 10;
        match_pos = pos;
        break;

    case 31:
        state = -1;
        match = 31;
        match_pos = pos;
        break;

    case 32:
        state = -1;
        match = 12;
        match_pos = pos;
        break;

    case 33:
        state = -1;
        match = 17;
        match_pos = pos;
        break;

    case 34:
        state = -1;
        match = 30;
        match_pos = pos;
        break;

    case 35:
        state = -1;
        match = 26;
        match_pos = pos;
        break;

    case 36:
        state = -1;
        match = 22;
        match_pos = pos;
        break;

    case 37:
        state = -1;
        match = 16;
        match_pos = pos;
        break;

    case 38:
        state = -1;
        match = 18;
        match_pos = pos;
        break;

    case 39:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 11;
        else state = -1;
        break;

    case 40:
        if( info.src.charCodeAt( pos ) == 99 ) state = 41;
        else if( info.src.charCodeAt( pos ) == 115 ) state = 43;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 45;
        else state = -1;
        match = 36;
        match_pos = pos;
        break;

    case 41:
        if( info.src.charCodeAt( pos ) == 111 ) state = 57;
        else if( info.src.charCodeAt( pos ) == 115 ) state = 58;
        else state = -1;
        break;

    case 42:
        if( info.src.charCodeAt( pos ) == 111 ) state = 47;
        else if( info.src.charCodeAt( pos ) == 115 ) state = 49;
        else state = -1;
        match = 36;
        match_pos = pos;
        break;

    case 43:
        if( info.src.charCodeAt( pos ) == 101 ) state = 59;
        else if( info.src.charCodeAt( pos ) == 105 ) state = 60;
        else state = -1;
        break;

    case 44:
        if( info.src.charCodeAt( pos ) == 120 ) state = 51;
        else state = -1;
        match = 36;
        match_pos = pos;
        break;

    case 45:
        if( info.src.charCodeAt( pos ) == 97 ) state = 61;
        else state = -1;
        break;

    case 46:
        if( info.src.charCodeAt( pos ) == 111 ) state = 52;
        else state = -1;
        match = 36;
        match_pos = pos;
        break;

    case 47:
        if( info.src.charCodeAt( pos ) == 115 ) state = 12;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 13;
        else state = -1;
        break;

    case 48:
        if( info.src.charCodeAt( pos ) == 101 ) state = 53;
        else if( info.src.charCodeAt( pos ) == 105 ) state = 54;
        else if( info.src.charCodeAt( pos ) == 113 ) state = 55;
        else state = -1;
        match = 36;
        match_pos = pos;
        break;

    case 49:
        if( info.src.charCodeAt( pos ) == 99 ) state = 14;
        else state = -1;
        break;

    case 50:
        if( info.src.charCodeAt( pos ) == 97 ) state = 56;
        else state = -1;
        match = 36;
        match_pos = pos;
        break;

    case 51:
        if( info.src.charCodeAt( pos ) == 112 ) state = 15;
        else state = -1;
        break;

    case 52:
        if( info.src.charCodeAt( pos ) == 103 ) state = 16;
        else state = -1;
        break;

    case 53:
        if( info.src.charCodeAt( pos ) == 99 ) state = 17;
        else state = -1;
        break;

    case 54:
        if( info.src.charCodeAt( pos ) == 110 ) state = 18;
        else state = -1;
        break;

    case 55:
        if( info.src.charCodeAt( pos ) == 114 ) state = 62;
        else state = -1;
        break;

    case 56:
        if( info.src.charCodeAt( pos ) == 110 ) state = 19;
        else state = -1;
        break;

    case 57:
        if( info.src.charCodeAt( pos ) == 115 ) state = 20;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 21;
        else state = -1;
        break;

    case 58:
        if( info.src.charCodeAt( pos ) == 99 ) state = 22;
        else state = -1;
        break;

    case 59:
        if( info.src.charCodeAt( pos ) == 99 ) state = 23;
        else state = -1;
        break;

    case 60:
        if( info.src.charCodeAt( pos ) == 110 ) state = 24;
        else state = -1;
        break;

    case 61:
        if( info.src.charCodeAt( pos ) == 110 ) state = 25;
        else state = -1;
        break;

    case 62:
        if( info.src.charCodeAt( pos ) == 116 ) state = 31;
        else state = -1;
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
    case 37:
        {
         info.att = parseInt( info.att );
        }
        break;

    case 38:
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
    new Array( 40/* p */, 1 ),
    new Array( 39/* e */, 3 ),
    new Array( 39/* e */, 3 ),
    new Array( 39/* e */, 1 ),
    new Array( 41/* MulDivExp */, 3 ),
    new Array( 41/* MulDivExp */, 1 ),
    new Array( 41/* MulDivExp */, 2 ),
    new Array( 42/* DivExp */, 3 ),
    new Array( 42/* DivExp */, 1 ),
    new Array( 43/* MulNonExp */, 2 ),
    new Array( 43/* MulNonExp */, 1 ),
    new Array( 44/* NonNegDivExp */, 3 ),
    new Array( 44/* NonNegDivExp */, 1 ),
    new Array( 45/* PowExp */, 3 ),
    new Array( 45/* PowExp */, 1 ),
    new Array( 46/* NonNegPowExp */, 3 ),
    new Array( 46/* NonNegPowExp */, 1 ),
    new Array( 47/* NegExp */, 2 ),
    new Array( 47/* NegExp */, 1 ),
    new Array( 48/* Value */, 1 ),
    new Array( 48/* Value */, 1 ),
    new Array( 48/* Value */, 1 ),
    new Array( 49/* NumericValue */, 1 ),
    new Array( 49/* NumericValue */, 1 ),
    new Array( 50/* ParenExp */, 3 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 4 ),
    new Array( 50/* ParenExp */, 5 )
);

/* Action-Table */
var act_tab = new Array(
    /* State 0 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 1 */ new Array( 51/* "$" */,0 ),
    /* State 2 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 51/* "$" */,-1 ),
    /* State 3 */ new Array( 4/* "*" */,45 , 51/* "$" */,-4 , 3/* "-" */,-4 , 2/* "+" */,-4 , 35/* ")" */,-4 ),
    /* State 4 */ new Array( 5/* "/" */,46 , 51/* "$" */,-6 , 3/* "-" */,-6 , 2/* "+" */,-6 , 4/* "*" */,-6 , 35/* ")" */,-6 , 36/* "IDENTIFIER" */,-11 , 37/* "INT" */,-11 , 38/* "FLOAT" */,-11 , 34/* "(" */,-11 , 7/* "sin" */,-11 , 10/* "sinh" */,-11 , 13/* "asin" */,-11 , 16/* "asinh" */,-11 , 8/* "cos" */,-11 , 11/* "cosh" */,-11 , 14/* "acos" */,-11 , 17/* "acosh" */,-11 , 9/* "tan" */,-11 , 12/* "tanh" */,-11 , 15/* "atan" */,-11 , 18/* "atanh" */,-11 , 19/* "sec" */,-11 , 21/* "sech" */,-11 , 20/* "asec" */,-11 , 22/* "asech" */,-11 , 23/* "csc" */,-11 , 25/* "csch" */,-11 , 24/* "acsc" */,-11 , 26/* "acsch" */,-11 , 27/* "cot" */,-11 , 29/* "coth" */,-11 , 28/* "acot" */,-11 , 30/* "acoth" */,-11 , 31/* "sqrt" */,-11 , 32/* "exp" */,-11 , 33/* "log" */,-11 ),
    /* State 5 */ new Array( 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 6 */ new Array( 6/* "^" */,50 , 51/* "$" */,-9 , 3/* "-" */,-9 , 2/* "+" */,-9 , 4/* "*" */,-9 , 5/* "/" */,-9 , 36/* "IDENTIFIER" */,-9 , 37/* "INT" */,-9 , 38/* "FLOAT" */,-9 , 34/* "(" */,-9 , 7/* "sin" */,-9 , 10/* "sinh" */,-9 , 13/* "asin" */,-9 , 16/* "asinh" */,-9 , 8/* "cos" */,-9 , 11/* "cosh" */,-9 , 14/* "acos" */,-9 , 17/* "acosh" */,-9 , 9/* "tan" */,-9 , 12/* "tanh" */,-9 , 15/* "atan" */,-9 , 18/* "atanh" */,-9 , 19/* "sec" */,-9 , 21/* "sech" */,-9 , 20/* "asec" */,-9 , 22/* "asech" */,-9 , 23/* "csc" */,-9 , 25/* "csch" */,-9 , 24/* "acsc" */,-9 , 26/* "acsch" */,-9 , 27/* "cot" */,-9 , 29/* "coth" */,-9 , 28/* "acot" */,-9 , 30/* "acoth" */,-9 , 31/* "sqrt" */,-9 , 32/* "exp" */,-9 , 33/* "log" */,-9 , 35/* ")" */,-9 ),
    /* State 7 */ new Array( 51/* "$" */,-15 , 3/* "-" */,-15 , 2/* "+" */,-15 , 4/* "*" */,-15 , 5/* "/" */,-15 , 6/* "^" */,-15 , 36/* "IDENTIFIER" */,-15 , 37/* "INT" */,-15 , 38/* "FLOAT" */,-15 , 34/* "(" */,-15 , 7/* "sin" */,-15 , 10/* "sinh" */,-15 , 13/* "asin" */,-15 , 16/* "asinh" */,-15 , 8/* "cos" */,-15 , 11/* "cosh" */,-15 , 14/* "acos" */,-15 , 17/* "acosh" */,-15 , 9/* "tan" */,-15 , 12/* "tanh" */,-15 , 15/* "atan" */,-15 , 18/* "atanh" */,-15 , 19/* "sec" */,-15 , 21/* "sech" */,-15 , 20/* "asec" */,-15 , 22/* "asech" */,-15 , 23/* "csc" */,-15 , 25/* "csch" */,-15 , 24/* "acsc" */,-15 , 26/* "acsch" */,-15 , 27/* "cot" */,-15 , 29/* "coth" */,-15 , 28/* "acot" */,-15 , 30/* "acoth" */,-15 , 31/* "sqrt" */,-15 , 32/* "exp" */,-15 , 33/* "log" */,-15 , 35/* ")" */,-15 ),
    /* State 8 */ new Array( 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 9 */ new Array( 51/* "$" */,-19 , 3/* "-" */,-19 , 2/* "+" */,-19 , 4/* "*" */,-19 , 5/* "/" */,-19 , 6/* "^" */,-19 , 36/* "IDENTIFIER" */,-19 , 37/* "INT" */,-19 , 38/* "FLOAT" */,-19 , 34/* "(" */,-19 , 7/* "sin" */,-19 , 10/* "sinh" */,-19 , 13/* "asin" */,-19 , 16/* "asinh" */,-19 , 8/* "cos" */,-19 , 11/* "cosh" */,-19 , 14/* "acos" */,-19 , 17/* "acosh" */,-19 , 9/* "tan" */,-19 , 12/* "tanh" */,-19 , 15/* "atan" */,-19 , 18/* "atanh" */,-19 , 19/* "sec" */,-19 , 21/* "sech" */,-19 , 20/* "asec" */,-19 , 22/* "asech" */,-19 , 23/* "csc" */,-19 , 25/* "csch" */,-19 , 24/* "acsc" */,-19 , 26/* "acsch" */,-19 , 27/* "cot" */,-19 , 29/* "coth" */,-19 , 28/* "acot" */,-19 , 30/* "acoth" */,-19 , 31/* "sqrt" */,-19 , 32/* "exp" */,-19 , 33/* "log" */,-19 , 35/* ")" */,-19 ),
    /* State 10 */ new Array( 51/* "$" */,-20 , 3/* "-" */,-20 , 2/* "+" */,-20 , 4/* "*" */,-20 , 5/* "/" */,-20 , 6/* "^" */,-20 , 36/* "IDENTIFIER" */,-20 , 37/* "INT" */,-20 , 38/* "FLOAT" */,-20 , 34/* "(" */,-20 , 7/* "sin" */,-20 , 10/* "sinh" */,-20 , 13/* "asin" */,-20 , 16/* "asinh" */,-20 , 8/* "cos" */,-20 , 11/* "cosh" */,-20 , 14/* "acos" */,-20 , 17/* "acosh" */,-20 , 9/* "tan" */,-20 , 12/* "tanh" */,-20 , 15/* "atan" */,-20 , 18/* "atanh" */,-20 , 19/* "sec" */,-20 , 21/* "sech" */,-20 , 20/* "asec" */,-20 , 22/* "asech" */,-20 , 23/* "csc" */,-20 , 25/* "csch" */,-20 , 24/* "acsc" */,-20 , 26/* "acsch" */,-20 , 27/* "cot" */,-20 , 29/* "coth" */,-20 , 28/* "acot" */,-20 , 30/* "acoth" */,-20 , 31/* "sqrt" */,-20 , 32/* "exp" */,-20 , 33/* "log" */,-20 , 35/* ")" */,-20 ),
    /* State 11 */ new Array( 51/* "$" */,-21 , 3/* "-" */,-21 , 2/* "+" */,-21 , 4/* "*" */,-21 , 5/* "/" */,-21 , 6/* "^" */,-21 , 36/* "IDENTIFIER" */,-21 , 37/* "INT" */,-21 , 38/* "FLOAT" */,-21 , 34/* "(" */,-21 , 7/* "sin" */,-21 , 10/* "sinh" */,-21 , 13/* "asin" */,-21 , 16/* "asinh" */,-21 , 8/* "cos" */,-21 , 11/* "cosh" */,-21 , 14/* "acos" */,-21 , 17/* "acosh" */,-21 , 9/* "tan" */,-21 , 12/* "tanh" */,-21 , 15/* "atan" */,-21 , 18/* "atanh" */,-21 , 19/* "sec" */,-21 , 21/* "sech" */,-21 , 20/* "asec" */,-21 , 22/* "asech" */,-21 , 23/* "csc" */,-21 , 25/* "csch" */,-21 , 24/* "acsc" */,-21 , 26/* "acsch" */,-21 , 27/* "cot" */,-21 , 29/* "coth" */,-21 , 28/* "acot" */,-21 , 30/* "acoth" */,-21 , 31/* "sqrt" */,-21 , 32/* "exp" */,-21 , 33/* "log" */,-21 , 35/* ")" */,-21 ),
    /* State 12 */ new Array( 51/* "$" */,-22 , 3/* "-" */,-22 , 2/* "+" */,-22 , 4/* "*" */,-22 , 5/* "/" */,-22 , 6/* "^" */,-22 , 36/* "IDENTIFIER" */,-22 , 37/* "INT" */,-22 , 38/* "FLOAT" */,-22 , 34/* "(" */,-22 , 7/* "sin" */,-22 , 10/* "sinh" */,-22 , 13/* "asin" */,-22 , 16/* "asinh" */,-22 , 8/* "cos" */,-22 , 11/* "cosh" */,-22 , 14/* "acos" */,-22 , 17/* "acosh" */,-22 , 9/* "tan" */,-22 , 12/* "tanh" */,-22 , 15/* "atan" */,-22 , 18/* "atanh" */,-22 , 19/* "sec" */,-22 , 21/* "sech" */,-22 , 20/* "asec" */,-22 , 22/* "asech" */,-22 , 23/* "csc" */,-22 , 25/* "csch" */,-22 , 24/* "acsc" */,-22 , 26/* "acsch" */,-22 , 27/* "cot" */,-22 , 29/* "coth" */,-22 , 28/* "acot" */,-22 , 30/* "acoth" */,-22 , 31/* "sqrt" */,-22 , 32/* "exp" */,-22 , 33/* "log" */,-22 , 35/* ")" */,-22 ),
    /* State 13 */ new Array( 51/* "$" */,-23 , 3/* "-" */,-23 , 2/* "+" */,-23 , 4/* "*" */,-23 , 5/* "/" */,-23 , 6/* "^" */,-23 , 36/* "IDENTIFIER" */,-23 , 37/* "INT" */,-23 , 38/* "FLOAT" */,-23 , 34/* "(" */,-23 , 7/* "sin" */,-23 , 10/* "sinh" */,-23 , 13/* "asin" */,-23 , 16/* "asinh" */,-23 , 8/* "cos" */,-23 , 11/* "cosh" */,-23 , 14/* "acos" */,-23 , 17/* "acosh" */,-23 , 9/* "tan" */,-23 , 12/* "tanh" */,-23 , 15/* "atan" */,-23 , 18/* "atanh" */,-23 , 19/* "sec" */,-23 , 21/* "sech" */,-23 , 20/* "asec" */,-23 , 22/* "asech" */,-23 , 23/* "csc" */,-23 , 25/* "csch" */,-23 , 24/* "acsc" */,-23 , 26/* "acsch" */,-23 , 27/* "cot" */,-23 , 29/* "coth" */,-23 , 28/* "acot" */,-23 , 30/* "acoth" */,-23 , 31/* "sqrt" */,-23 , 32/* "exp" */,-23 , 33/* "log" */,-23 , 35/* ")" */,-23 ),
    /* State 14 */ new Array( 51/* "$" */,-24 , 3/* "-" */,-24 , 2/* "+" */,-24 , 4/* "*" */,-24 , 5/* "/" */,-24 , 6/* "^" */,-24 , 36/* "IDENTIFIER" */,-24 , 37/* "INT" */,-24 , 38/* "FLOAT" */,-24 , 34/* "(" */,-24 , 7/* "sin" */,-24 , 10/* "sinh" */,-24 , 13/* "asin" */,-24 , 16/* "asinh" */,-24 , 8/* "cos" */,-24 , 11/* "cosh" */,-24 , 14/* "acos" */,-24 , 17/* "acosh" */,-24 , 9/* "tan" */,-24 , 12/* "tanh" */,-24 , 15/* "atan" */,-24 , 18/* "atanh" */,-24 , 19/* "sec" */,-24 , 21/* "sech" */,-24 , 20/* "asec" */,-24 , 22/* "asech" */,-24 , 23/* "csc" */,-24 , 25/* "csch" */,-24 , 24/* "acsc" */,-24 , 26/* "acsch" */,-24 , 27/* "cot" */,-24 , 29/* "coth" */,-24 , 28/* "acot" */,-24 , 30/* "acoth" */,-24 , 31/* "sqrt" */,-24 , 32/* "exp" */,-24 , 33/* "log" */,-24 , 35/* ")" */,-24 ),
    /* State 15 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 16 */ new Array( 34/* "(" */,53 ),
    /* State 17 */ new Array( 34/* "(" */,54 ),
    /* State 18 */ new Array( 34/* "(" */,55 ),
    /* State 19 */ new Array( 34/* "(" */,56 ),
    /* State 20 */ new Array( 34/* "(" */,57 ),
    /* State 21 */ new Array( 34/* "(" */,58 ),
    /* State 22 */ new Array( 34/* "(" */,59 ),
    /* State 23 */ new Array( 34/* "(" */,60 ),
    /* State 24 */ new Array( 34/* "(" */,61 ),
    /* State 25 */ new Array( 34/* "(" */,62 ),
    /* State 26 */ new Array( 34/* "(" */,63 ),
    /* State 27 */ new Array( 34/* "(" */,64 ),
    /* State 28 */ new Array( 34/* "(" */,65 ),
    /* State 29 */ new Array( 34/* "(" */,66 ),
    /* State 30 */ new Array( 34/* "(" */,67 ),
    /* State 31 */ new Array( 34/* "(" */,68 ),
    /* State 32 */ new Array( 34/* "(" */,69 ),
    /* State 33 */ new Array( 34/* "(" */,70 ),
    /* State 34 */ new Array( 34/* "(" */,71 ),
    /* State 35 */ new Array( 34/* "(" */,72 ),
    /* State 36 */ new Array( 34/* "(" */,73 ),
    /* State 37 */ new Array( 34/* "(" */,74 ),
    /* State 38 */ new Array( 34/* "(" */,75 ),
    /* State 39 */ new Array( 34/* "(" */,76 ),
    /* State 40 */ new Array( 34/* "(" */,77 ),
    /* State 41 */ new Array( 34/* "(" */,78 ),
    /* State 42 */ new Array( 34/* "(" */,80 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 ),
    /* State 43 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 44 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 45 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 46 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 47 */ new Array( 5/* "/" */,85 , 36/* "IDENTIFIER" */,-10 , 37/* "INT" */,-10 , 38/* "FLOAT" */,-10 , 34/* "(" */,-10 , 7/* "sin" */,-10 , 10/* "sinh" */,-10 , 13/* "asin" */,-10 , 16/* "asinh" */,-10 , 8/* "cos" */,-10 , 11/* "cosh" */,-10 , 14/* "acos" */,-10 , 17/* "acosh" */,-10 , 9/* "tan" */,-10 , 12/* "tanh" */,-10 , 15/* "atan" */,-10 , 18/* "atanh" */,-10 , 19/* "sec" */,-10 , 21/* "sech" */,-10 , 20/* "asec" */,-10 , 22/* "asech" */,-10 , 23/* "csc" */,-10 , 25/* "csch" */,-10 , 24/* "acsc" */,-10 , 26/* "acsch" */,-10 , 27/* "cot" */,-10 , 29/* "coth" */,-10 , 28/* "acot" */,-10 , 30/* "acoth" */,-10 , 31/* "sqrt" */,-10 , 32/* "exp" */,-10 , 33/* "log" */,-10 , 51/* "$" */,-7 , 3/* "-" */,-7 , 2/* "+" */,-7 , 4/* "*" */,-7 , 35/* ")" */,-7 ),
    /* State 48 */ new Array( 6/* "^" */,86 , 51/* "$" */,-13 , 3/* "-" */,-13 , 2/* "+" */,-13 , 4/* "*" */,-13 , 36/* "IDENTIFIER" */,-13 , 37/* "INT" */,-13 , 38/* "FLOAT" */,-13 , 34/* "(" */,-13 , 7/* "sin" */,-13 , 10/* "sinh" */,-13 , 13/* "asin" */,-13 , 16/* "asinh" */,-13 , 8/* "cos" */,-13 , 11/* "cosh" */,-13 , 14/* "acos" */,-13 , 17/* "acosh" */,-13 , 9/* "tan" */,-13 , 12/* "tanh" */,-13 , 15/* "atan" */,-13 , 18/* "atanh" */,-13 , 19/* "sec" */,-13 , 21/* "sech" */,-13 , 20/* "asec" */,-13 , 22/* "asech" */,-13 , 23/* "csc" */,-13 , 25/* "csch" */,-13 , 24/* "acsc" */,-13 , 26/* "acsch" */,-13 , 27/* "cot" */,-13 , 29/* "coth" */,-13 , 28/* "acot" */,-13 , 30/* "acoth" */,-13 , 31/* "sqrt" */,-13 , 32/* "exp" */,-13 , 33/* "log" */,-13 , 5/* "/" */,-13 , 35/* ")" */,-13 ),
    /* State 49 */ new Array( 51/* "$" */,-17 , 3/* "-" */,-17 , 2/* "+" */,-17 , 4/* "*" */,-17 , 36/* "IDENTIFIER" */,-17 , 37/* "INT" */,-17 , 38/* "FLOAT" */,-17 , 34/* "(" */,-17 , 7/* "sin" */,-17 , 10/* "sinh" */,-17 , 13/* "asin" */,-17 , 16/* "asinh" */,-17 , 8/* "cos" */,-17 , 11/* "cosh" */,-17 , 14/* "acos" */,-17 , 17/* "acosh" */,-17 , 9/* "tan" */,-17 , 12/* "tanh" */,-17 , 15/* "atan" */,-17 , 18/* "atanh" */,-17 , 19/* "sec" */,-17 , 21/* "sech" */,-17 , 20/* "asec" */,-17 , 22/* "asech" */,-17 , 23/* "csc" */,-17 , 25/* "csch" */,-17 , 24/* "acsc" */,-17 , 26/* "acsch" */,-17 , 27/* "cot" */,-17 , 29/* "coth" */,-17 , 28/* "acot" */,-17 , 30/* "acoth" */,-17 , 31/* "sqrt" */,-17 , 32/* "exp" */,-17 , 33/* "log" */,-17 , 5/* "/" */,-17 , 6/* "^" */,-17 , 35/* ")" */,-17 ),
    /* State 50 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 51 */ new Array( 51/* "$" */,-18 , 3/* "-" */,-18 , 2/* "+" */,-18 , 4/* "*" */,-18 , 5/* "/" */,-18 , 6/* "^" */,-18 , 36/* "IDENTIFIER" */,-18 , 37/* "INT" */,-18 , 38/* "FLOAT" */,-18 , 34/* "(" */,-18 , 7/* "sin" */,-18 , 10/* "sinh" */,-18 , 13/* "asin" */,-18 , 16/* "asinh" */,-18 , 8/* "cos" */,-18 , 11/* "cosh" */,-18 , 14/* "acos" */,-18 , 17/* "acosh" */,-18 , 9/* "tan" */,-18 , 12/* "tanh" */,-18 , 15/* "atan" */,-18 , 18/* "atanh" */,-18 , 19/* "sec" */,-18 , 21/* "sech" */,-18 , 20/* "asec" */,-18 , 22/* "asech" */,-18 , 23/* "csc" */,-18 , 25/* "csch" */,-18 , 24/* "acsc" */,-18 , 26/* "acsch" */,-18 , 27/* "cot" */,-18 , 29/* "coth" */,-18 , 28/* "acot" */,-18 , 30/* "acoth" */,-18 , 31/* "sqrt" */,-18 , 32/* "exp" */,-18 , 33/* "log" */,-18 , 35/* ")" */,-18 ),
    /* State 52 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,88 ),
    /* State 53 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 54 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 55 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 56 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 57 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 58 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 59 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 60 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 61 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 62 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 63 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 64 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 65 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 66 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 67 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 68 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 69 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 70 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 71 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 72 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 73 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 74 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 75 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 76 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 77 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 78 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 79 */ new Array( 34/* "(" */,115 ),
    /* State 80 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 81 */ new Array( 4/* "*" */,45 , 51/* "$" */,-3 , 3/* "-" */,-3 , 2/* "+" */,-3 , 35/* ")" */,-3 ),
    /* State 82 */ new Array( 4/* "*" */,45 , 51/* "$" */,-2 , 3/* "-" */,-2 , 2/* "+" */,-2 , 35/* ")" */,-2 ),
    /* State 83 */ new Array( 5/* "/" */,46 , 51/* "$" */,-5 , 3/* "-" */,-5 , 2/* "+" */,-5 , 4/* "*" */,-5 , 35/* ")" */,-5 ),
    /* State 84 */ new Array( 6/* "^" */,50 , 51/* "$" */,-8 , 3/* "-" */,-8 , 2/* "+" */,-8 , 4/* "*" */,-8 , 5/* "/" */,-8 , 36/* "IDENTIFIER" */,-8 , 37/* "INT" */,-8 , 38/* "FLOAT" */,-8 , 34/* "(" */,-8 , 7/* "sin" */,-8 , 10/* "sinh" */,-8 , 13/* "asin" */,-8 , 16/* "asinh" */,-8 , 8/* "cos" */,-8 , 11/* "cosh" */,-8 , 14/* "acos" */,-8 , 17/* "acosh" */,-8 , 9/* "tan" */,-8 , 12/* "tanh" */,-8 , 15/* "atan" */,-8 , 18/* "atanh" */,-8 , 19/* "sec" */,-8 , 21/* "sech" */,-8 , 20/* "asec" */,-8 , 22/* "asech" */,-8 , 23/* "csc" */,-8 , 25/* "csch" */,-8 , 24/* "acsc" */,-8 , 26/* "acsch" */,-8 , 27/* "cot" */,-8 , 29/* "coth" */,-8 , 28/* "acot" */,-8 , 30/* "acoth" */,-8 , 31/* "sqrt" */,-8 , 32/* "exp" */,-8 , 33/* "log" */,-8 , 35/* ")" */,-8 ),
    /* State 85 */ new Array( 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 86 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 87 */ new Array( 51/* "$" */,-14 , 3/* "-" */,-14 , 2/* "+" */,-14 , 4/* "*" */,-14 , 5/* "/" */,-14 , 6/* "^" */,-14 , 36/* "IDENTIFIER" */,-14 , 37/* "INT" */,-14 , 38/* "FLOAT" */,-14 , 34/* "(" */,-14 , 7/* "sin" */,-14 , 10/* "sinh" */,-14 , 13/* "asin" */,-14 , 16/* "asinh" */,-14 , 8/* "cos" */,-14 , 11/* "cosh" */,-14 , 14/* "acos" */,-14 , 17/* "acosh" */,-14 , 9/* "tan" */,-14 , 12/* "tanh" */,-14 , 15/* "atan" */,-14 , 18/* "atanh" */,-14 , 19/* "sec" */,-14 , 21/* "sech" */,-14 , 20/* "asec" */,-14 , 22/* "asech" */,-14 , 23/* "csc" */,-14 , 25/* "csch" */,-14 , 24/* "acsc" */,-14 , 26/* "acsch" */,-14 , 27/* "cot" */,-14 , 29/* "coth" */,-14 , 28/* "acot" */,-14 , 30/* "acoth" */,-14 , 31/* "sqrt" */,-14 , 32/* "exp" */,-14 , 33/* "log" */,-14 , 35/* ")" */,-14 ),
    /* State 88 */ new Array( 51/* "$" */,-25 , 3/* "-" */,-25 , 2/* "+" */,-25 , 4/* "*" */,-25 , 5/* "/" */,-25 , 6/* "^" */,-25 , 36/* "IDENTIFIER" */,-25 , 37/* "INT" */,-25 , 38/* "FLOAT" */,-25 , 34/* "(" */,-25 , 7/* "sin" */,-25 , 10/* "sinh" */,-25 , 13/* "asin" */,-25 , 16/* "asinh" */,-25 , 8/* "cos" */,-25 , 11/* "cosh" */,-25 , 14/* "acos" */,-25 , 17/* "acosh" */,-25 , 9/* "tan" */,-25 , 12/* "tanh" */,-25 , 15/* "atan" */,-25 , 18/* "atanh" */,-25 , 19/* "sec" */,-25 , 21/* "sech" */,-25 , 20/* "asec" */,-25 , 22/* "asech" */,-25 , 23/* "csc" */,-25 , 25/* "csch" */,-25 , 24/* "acsc" */,-25 , 26/* "acsch" */,-25 , 27/* "cot" */,-25 , 29/* "coth" */,-25 , 28/* "acot" */,-25 , 30/* "acoth" */,-25 , 31/* "sqrt" */,-25 , 32/* "exp" */,-25 , 33/* "log" */,-25 , 35/* ")" */,-25 ),
    /* State 89 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,119 ),
    /* State 90 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,120 ),
    /* State 91 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,121 ),
    /* State 92 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,122 ),
    /* State 93 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,123 ),
    /* State 94 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,124 ),
    /* State 95 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,125 ),
    /* State 96 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,126 ),
    /* State 97 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,127 ),
    /* State 98 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,128 ),
    /* State 99 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,129 ),
    /* State 100 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,130 ),
    /* State 101 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,131 ),
    /* State 102 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,132 ),
    /* State 103 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,133 ),
    /* State 104 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,134 ),
    /* State 105 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,135 ),
    /* State 106 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,136 ),
    /* State 107 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,137 ),
    /* State 108 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,138 ),
    /* State 109 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,139 ),
    /* State 110 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,140 ),
    /* State 111 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,141 ),
    /* State 112 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,142 ),
    /* State 113 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,143 ),
    /* State 114 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,144 ),
    /* State 115 */ new Array( 3/* "-" */,8 , 36/* "IDENTIFIER" */,11 , 37/* "INT" */,13 , 38/* "FLOAT" */,14 , 34/* "(" */,15 , 7/* "sin" */,16 , 10/* "sinh" */,17 , 13/* "asin" */,18 , 16/* "asinh" */,19 , 8/* "cos" */,20 , 11/* "cosh" */,21 , 14/* "acos" */,22 , 17/* "acosh" */,23 , 9/* "tan" */,24 , 12/* "tanh" */,25 , 15/* "atan" */,26 , 18/* "atanh" */,27 , 19/* "sec" */,28 , 21/* "sech" */,29 , 20/* "asec" */,30 , 22/* "asech" */,31 , 23/* "csc" */,32 , 25/* "csch" */,33 , 24/* "acsc" */,34 , 26/* "acsch" */,35 , 27/* "cot" */,36 , 29/* "coth" */,37 , 28/* "acot" */,38 , 30/* "acoth" */,39 , 31/* "sqrt" */,40 , 32/* "exp" */,41 , 33/* "log" */,42 ),
    /* State 116 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,146 ),
    /* State 117 */ new Array( 6/* "^" */,86 , 51/* "$" */,-12 , 3/* "-" */,-12 , 2/* "+" */,-12 , 4/* "*" */,-12 , 36/* "IDENTIFIER" */,-12 , 37/* "INT" */,-12 , 38/* "FLOAT" */,-12 , 34/* "(" */,-12 , 7/* "sin" */,-12 , 10/* "sinh" */,-12 , 13/* "asin" */,-12 , 16/* "asinh" */,-12 , 8/* "cos" */,-12 , 11/* "cosh" */,-12 , 14/* "acos" */,-12 , 17/* "acosh" */,-12 , 9/* "tan" */,-12 , 12/* "tanh" */,-12 , 15/* "atan" */,-12 , 18/* "atanh" */,-12 , 19/* "sec" */,-12 , 21/* "sech" */,-12 , 20/* "asec" */,-12 , 22/* "asech" */,-12 , 23/* "csc" */,-12 , 25/* "csch" */,-12 , 24/* "acsc" */,-12 , 26/* "acsch" */,-12 , 27/* "cot" */,-12 , 29/* "coth" */,-12 , 28/* "acot" */,-12 , 30/* "acoth" */,-12 , 31/* "sqrt" */,-12 , 32/* "exp" */,-12 , 33/* "log" */,-12 , 5/* "/" */,-12 , 35/* ")" */,-12 ),
    /* State 118 */ new Array( 51/* "$" */,-16 , 3/* "-" */,-16 , 2/* "+" */,-16 , 4/* "*" */,-16 , 36/* "IDENTIFIER" */,-16 , 37/* "INT" */,-16 , 38/* "FLOAT" */,-16 , 34/* "(" */,-16 , 7/* "sin" */,-16 , 10/* "sinh" */,-16 , 13/* "asin" */,-16 , 16/* "asinh" */,-16 , 8/* "cos" */,-16 , 11/* "cosh" */,-16 , 14/* "acos" */,-16 , 17/* "acosh" */,-16 , 9/* "tan" */,-16 , 12/* "tanh" */,-16 , 15/* "atan" */,-16 , 18/* "atanh" */,-16 , 19/* "sec" */,-16 , 21/* "sech" */,-16 , 20/* "asec" */,-16 , 22/* "asech" */,-16 , 23/* "csc" */,-16 , 25/* "csch" */,-16 , 24/* "acsc" */,-16 , 26/* "acsch" */,-16 , 27/* "cot" */,-16 , 29/* "coth" */,-16 , 28/* "acot" */,-16 , 30/* "acoth" */,-16 , 31/* "sqrt" */,-16 , 32/* "exp" */,-16 , 33/* "log" */,-16 , 5/* "/" */,-16 , 6/* "^" */,-16 , 35/* ")" */,-16 ),
    /* State 119 */ new Array( 51/* "$" */,-26 , 3/* "-" */,-26 , 2/* "+" */,-26 , 4/* "*" */,-26 , 5/* "/" */,-26 , 6/* "^" */,-26 , 36/* "IDENTIFIER" */,-26 , 37/* "INT" */,-26 , 38/* "FLOAT" */,-26 , 34/* "(" */,-26 , 7/* "sin" */,-26 , 10/* "sinh" */,-26 , 13/* "asin" */,-26 , 16/* "asinh" */,-26 , 8/* "cos" */,-26 , 11/* "cosh" */,-26 , 14/* "acos" */,-26 , 17/* "acosh" */,-26 , 9/* "tan" */,-26 , 12/* "tanh" */,-26 , 15/* "atan" */,-26 , 18/* "atanh" */,-26 , 19/* "sec" */,-26 , 21/* "sech" */,-26 , 20/* "asec" */,-26 , 22/* "asech" */,-26 , 23/* "csc" */,-26 , 25/* "csch" */,-26 , 24/* "acsc" */,-26 , 26/* "acsch" */,-26 , 27/* "cot" */,-26 , 29/* "coth" */,-26 , 28/* "acot" */,-26 , 30/* "acoth" */,-26 , 31/* "sqrt" */,-26 , 32/* "exp" */,-26 , 33/* "log" */,-26 , 35/* ")" */,-26 ),
    /* State 120 */ new Array( 51/* "$" */,-27 , 3/* "-" */,-27 , 2/* "+" */,-27 , 4/* "*" */,-27 , 5/* "/" */,-27 , 6/* "^" */,-27 , 36/* "IDENTIFIER" */,-27 , 37/* "INT" */,-27 , 38/* "FLOAT" */,-27 , 34/* "(" */,-27 , 7/* "sin" */,-27 , 10/* "sinh" */,-27 , 13/* "asin" */,-27 , 16/* "asinh" */,-27 , 8/* "cos" */,-27 , 11/* "cosh" */,-27 , 14/* "acos" */,-27 , 17/* "acosh" */,-27 , 9/* "tan" */,-27 , 12/* "tanh" */,-27 , 15/* "atan" */,-27 , 18/* "atanh" */,-27 , 19/* "sec" */,-27 , 21/* "sech" */,-27 , 20/* "asec" */,-27 , 22/* "asech" */,-27 , 23/* "csc" */,-27 , 25/* "csch" */,-27 , 24/* "acsc" */,-27 , 26/* "acsch" */,-27 , 27/* "cot" */,-27 , 29/* "coth" */,-27 , 28/* "acot" */,-27 , 30/* "acoth" */,-27 , 31/* "sqrt" */,-27 , 32/* "exp" */,-27 , 33/* "log" */,-27 , 35/* ")" */,-27 ),
    /* State 121 */ new Array( 51/* "$" */,-28 , 3/* "-" */,-28 , 2/* "+" */,-28 , 4/* "*" */,-28 , 5/* "/" */,-28 , 6/* "^" */,-28 , 36/* "IDENTIFIER" */,-28 , 37/* "INT" */,-28 , 38/* "FLOAT" */,-28 , 34/* "(" */,-28 , 7/* "sin" */,-28 , 10/* "sinh" */,-28 , 13/* "asin" */,-28 , 16/* "asinh" */,-28 , 8/* "cos" */,-28 , 11/* "cosh" */,-28 , 14/* "acos" */,-28 , 17/* "acosh" */,-28 , 9/* "tan" */,-28 , 12/* "tanh" */,-28 , 15/* "atan" */,-28 , 18/* "atanh" */,-28 , 19/* "sec" */,-28 , 21/* "sech" */,-28 , 20/* "asec" */,-28 , 22/* "asech" */,-28 , 23/* "csc" */,-28 , 25/* "csch" */,-28 , 24/* "acsc" */,-28 , 26/* "acsch" */,-28 , 27/* "cot" */,-28 , 29/* "coth" */,-28 , 28/* "acot" */,-28 , 30/* "acoth" */,-28 , 31/* "sqrt" */,-28 , 32/* "exp" */,-28 , 33/* "log" */,-28 , 35/* ")" */,-28 ),
    /* State 122 */ new Array( 51/* "$" */,-29 , 3/* "-" */,-29 , 2/* "+" */,-29 , 4/* "*" */,-29 , 5/* "/" */,-29 , 6/* "^" */,-29 , 36/* "IDENTIFIER" */,-29 , 37/* "INT" */,-29 , 38/* "FLOAT" */,-29 , 34/* "(" */,-29 , 7/* "sin" */,-29 , 10/* "sinh" */,-29 , 13/* "asin" */,-29 , 16/* "asinh" */,-29 , 8/* "cos" */,-29 , 11/* "cosh" */,-29 , 14/* "acos" */,-29 , 17/* "acosh" */,-29 , 9/* "tan" */,-29 , 12/* "tanh" */,-29 , 15/* "atan" */,-29 , 18/* "atanh" */,-29 , 19/* "sec" */,-29 , 21/* "sech" */,-29 , 20/* "asec" */,-29 , 22/* "asech" */,-29 , 23/* "csc" */,-29 , 25/* "csch" */,-29 , 24/* "acsc" */,-29 , 26/* "acsch" */,-29 , 27/* "cot" */,-29 , 29/* "coth" */,-29 , 28/* "acot" */,-29 , 30/* "acoth" */,-29 , 31/* "sqrt" */,-29 , 32/* "exp" */,-29 , 33/* "log" */,-29 , 35/* ")" */,-29 ),
    /* State 123 */ new Array( 51/* "$" */,-30 , 3/* "-" */,-30 , 2/* "+" */,-30 , 4/* "*" */,-30 , 5/* "/" */,-30 , 6/* "^" */,-30 , 36/* "IDENTIFIER" */,-30 , 37/* "INT" */,-30 , 38/* "FLOAT" */,-30 , 34/* "(" */,-30 , 7/* "sin" */,-30 , 10/* "sinh" */,-30 , 13/* "asin" */,-30 , 16/* "asinh" */,-30 , 8/* "cos" */,-30 , 11/* "cosh" */,-30 , 14/* "acos" */,-30 , 17/* "acosh" */,-30 , 9/* "tan" */,-30 , 12/* "tanh" */,-30 , 15/* "atan" */,-30 , 18/* "atanh" */,-30 , 19/* "sec" */,-30 , 21/* "sech" */,-30 , 20/* "asec" */,-30 , 22/* "asech" */,-30 , 23/* "csc" */,-30 , 25/* "csch" */,-30 , 24/* "acsc" */,-30 , 26/* "acsch" */,-30 , 27/* "cot" */,-30 , 29/* "coth" */,-30 , 28/* "acot" */,-30 , 30/* "acoth" */,-30 , 31/* "sqrt" */,-30 , 32/* "exp" */,-30 , 33/* "log" */,-30 , 35/* ")" */,-30 ),
    /* State 124 */ new Array( 51/* "$" */,-31 , 3/* "-" */,-31 , 2/* "+" */,-31 , 4/* "*" */,-31 , 5/* "/" */,-31 , 6/* "^" */,-31 , 36/* "IDENTIFIER" */,-31 , 37/* "INT" */,-31 , 38/* "FLOAT" */,-31 , 34/* "(" */,-31 , 7/* "sin" */,-31 , 10/* "sinh" */,-31 , 13/* "asin" */,-31 , 16/* "asinh" */,-31 , 8/* "cos" */,-31 , 11/* "cosh" */,-31 , 14/* "acos" */,-31 , 17/* "acosh" */,-31 , 9/* "tan" */,-31 , 12/* "tanh" */,-31 , 15/* "atan" */,-31 , 18/* "atanh" */,-31 , 19/* "sec" */,-31 , 21/* "sech" */,-31 , 20/* "asec" */,-31 , 22/* "asech" */,-31 , 23/* "csc" */,-31 , 25/* "csch" */,-31 , 24/* "acsc" */,-31 , 26/* "acsch" */,-31 , 27/* "cot" */,-31 , 29/* "coth" */,-31 , 28/* "acot" */,-31 , 30/* "acoth" */,-31 , 31/* "sqrt" */,-31 , 32/* "exp" */,-31 , 33/* "log" */,-31 , 35/* ")" */,-31 ),
    /* State 125 */ new Array( 51/* "$" */,-32 , 3/* "-" */,-32 , 2/* "+" */,-32 , 4/* "*" */,-32 , 5/* "/" */,-32 , 6/* "^" */,-32 , 36/* "IDENTIFIER" */,-32 , 37/* "INT" */,-32 , 38/* "FLOAT" */,-32 , 34/* "(" */,-32 , 7/* "sin" */,-32 , 10/* "sinh" */,-32 , 13/* "asin" */,-32 , 16/* "asinh" */,-32 , 8/* "cos" */,-32 , 11/* "cosh" */,-32 , 14/* "acos" */,-32 , 17/* "acosh" */,-32 , 9/* "tan" */,-32 , 12/* "tanh" */,-32 , 15/* "atan" */,-32 , 18/* "atanh" */,-32 , 19/* "sec" */,-32 , 21/* "sech" */,-32 , 20/* "asec" */,-32 , 22/* "asech" */,-32 , 23/* "csc" */,-32 , 25/* "csch" */,-32 , 24/* "acsc" */,-32 , 26/* "acsch" */,-32 , 27/* "cot" */,-32 , 29/* "coth" */,-32 , 28/* "acot" */,-32 , 30/* "acoth" */,-32 , 31/* "sqrt" */,-32 , 32/* "exp" */,-32 , 33/* "log" */,-32 , 35/* ")" */,-32 ),
    /* State 126 */ new Array( 51/* "$" */,-33 , 3/* "-" */,-33 , 2/* "+" */,-33 , 4/* "*" */,-33 , 5/* "/" */,-33 , 6/* "^" */,-33 , 36/* "IDENTIFIER" */,-33 , 37/* "INT" */,-33 , 38/* "FLOAT" */,-33 , 34/* "(" */,-33 , 7/* "sin" */,-33 , 10/* "sinh" */,-33 , 13/* "asin" */,-33 , 16/* "asinh" */,-33 , 8/* "cos" */,-33 , 11/* "cosh" */,-33 , 14/* "acos" */,-33 , 17/* "acosh" */,-33 , 9/* "tan" */,-33 , 12/* "tanh" */,-33 , 15/* "atan" */,-33 , 18/* "atanh" */,-33 , 19/* "sec" */,-33 , 21/* "sech" */,-33 , 20/* "asec" */,-33 , 22/* "asech" */,-33 , 23/* "csc" */,-33 , 25/* "csch" */,-33 , 24/* "acsc" */,-33 , 26/* "acsch" */,-33 , 27/* "cot" */,-33 , 29/* "coth" */,-33 , 28/* "acot" */,-33 , 30/* "acoth" */,-33 , 31/* "sqrt" */,-33 , 32/* "exp" */,-33 , 33/* "log" */,-33 , 35/* ")" */,-33 ),
    /* State 127 */ new Array( 51/* "$" */,-34 , 3/* "-" */,-34 , 2/* "+" */,-34 , 4/* "*" */,-34 , 5/* "/" */,-34 , 6/* "^" */,-34 , 36/* "IDENTIFIER" */,-34 , 37/* "INT" */,-34 , 38/* "FLOAT" */,-34 , 34/* "(" */,-34 , 7/* "sin" */,-34 , 10/* "sinh" */,-34 , 13/* "asin" */,-34 , 16/* "asinh" */,-34 , 8/* "cos" */,-34 , 11/* "cosh" */,-34 , 14/* "acos" */,-34 , 17/* "acosh" */,-34 , 9/* "tan" */,-34 , 12/* "tanh" */,-34 , 15/* "atan" */,-34 , 18/* "atanh" */,-34 , 19/* "sec" */,-34 , 21/* "sech" */,-34 , 20/* "asec" */,-34 , 22/* "asech" */,-34 , 23/* "csc" */,-34 , 25/* "csch" */,-34 , 24/* "acsc" */,-34 , 26/* "acsch" */,-34 , 27/* "cot" */,-34 , 29/* "coth" */,-34 , 28/* "acot" */,-34 , 30/* "acoth" */,-34 , 31/* "sqrt" */,-34 , 32/* "exp" */,-34 , 33/* "log" */,-34 , 35/* ")" */,-34 ),
    /* State 128 */ new Array( 51/* "$" */,-35 , 3/* "-" */,-35 , 2/* "+" */,-35 , 4/* "*" */,-35 , 5/* "/" */,-35 , 6/* "^" */,-35 , 36/* "IDENTIFIER" */,-35 , 37/* "INT" */,-35 , 38/* "FLOAT" */,-35 , 34/* "(" */,-35 , 7/* "sin" */,-35 , 10/* "sinh" */,-35 , 13/* "asin" */,-35 , 16/* "asinh" */,-35 , 8/* "cos" */,-35 , 11/* "cosh" */,-35 , 14/* "acos" */,-35 , 17/* "acosh" */,-35 , 9/* "tan" */,-35 , 12/* "tanh" */,-35 , 15/* "atan" */,-35 , 18/* "atanh" */,-35 , 19/* "sec" */,-35 , 21/* "sech" */,-35 , 20/* "asec" */,-35 , 22/* "asech" */,-35 , 23/* "csc" */,-35 , 25/* "csch" */,-35 , 24/* "acsc" */,-35 , 26/* "acsch" */,-35 , 27/* "cot" */,-35 , 29/* "coth" */,-35 , 28/* "acot" */,-35 , 30/* "acoth" */,-35 , 31/* "sqrt" */,-35 , 32/* "exp" */,-35 , 33/* "log" */,-35 , 35/* ")" */,-35 ),
    /* State 129 */ new Array( 51/* "$" */,-36 , 3/* "-" */,-36 , 2/* "+" */,-36 , 4/* "*" */,-36 , 5/* "/" */,-36 , 6/* "^" */,-36 , 36/* "IDENTIFIER" */,-36 , 37/* "INT" */,-36 , 38/* "FLOAT" */,-36 , 34/* "(" */,-36 , 7/* "sin" */,-36 , 10/* "sinh" */,-36 , 13/* "asin" */,-36 , 16/* "asinh" */,-36 , 8/* "cos" */,-36 , 11/* "cosh" */,-36 , 14/* "acos" */,-36 , 17/* "acosh" */,-36 , 9/* "tan" */,-36 , 12/* "tanh" */,-36 , 15/* "atan" */,-36 , 18/* "atanh" */,-36 , 19/* "sec" */,-36 , 21/* "sech" */,-36 , 20/* "asec" */,-36 , 22/* "asech" */,-36 , 23/* "csc" */,-36 , 25/* "csch" */,-36 , 24/* "acsc" */,-36 , 26/* "acsch" */,-36 , 27/* "cot" */,-36 , 29/* "coth" */,-36 , 28/* "acot" */,-36 , 30/* "acoth" */,-36 , 31/* "sqrt" */,-36 , 32/* "exp" */,-36 , 33/* "log" */,-36 , 35/* ")" */,-36 ),
    /* State 130 */ new Array( 51/* "$" */,-37 , 3/* "-" */,-37 , 2/* "+" */,-37 , 4/* "*" */,-37 , 5/* "/" */,-37 , 6/* "^" */,-37 , 36/* "IDENTIFIER" */,-37 , 37/* "INT" */,-37 , 38/* "FLOAT" */,-37 , 34/* "(" */,-37 , 7/* "sin" */,-37 , 10/* "sinh" */,-37 , 13/* "asin" */,-37 , 16/* "asinh" */,-37 , 8/* "cos" */,-37 , 11/* "cosh" */,-37 , 14/* "acos" */,-37 , 17/* "acosh" */,-37 , 9/* "tan" */,-37 , 12/* "tanh" */,-37 , 15/* "atan" */,-37 , 18/* "atanh" */,-37 , 19/* "sec" */,-37 , 21/* "sech" */,-37 , 20/* "asec" */,-37 , 22/* "asech" */,-37 , 23/* "csc" */,-37 , 25/* "csch" */,-37 , 24/* "acsc" */,-37 , 26/* "acsch" */,-37 , 27/* "cot" */,-37 , 29/* "coth" */,-37 , 28/* "acot" */,-37 , 30/* "acoth" */,-37 , 31/* "sqrt" */,-37 , 32/* "exp" */,-37 , 33/* "log" */,-37 , 35/* ")" */,-37 ),
    /* State 131 */ new Array( 51/* "$" */,-38 , 3/* "-" */,-38 , 2/* "+" */,-38 , 4/* "*" */,-38 , 5/* "/" */,-38 , 6/* "^" */,-38 , 36/* "IDENTIFIER" */,-38 , 37/* "INT" */,-38 , 38/* "FLOAT" */,-38 , 34/* "(" */,-38 , 7/* "sin" */,-38 , 10/* "sinh" */,-38 , 13/* "asin" */,-38 , 16/* "asinh" */,-38 , 8/* "cos" */,-38 , 11/* "cosh" */,-38 , 14/* "acos" */,-38 , 17/* "acosh" */,-38 , 9/* "tan" */,-38 , 12/* "tanh" */,-38 , 15/* "atan" */,-38 , 18/* "atanh" */,-38 , 19/* "sec" */,-38 , 21/* "sech" */,-38 , 20/* "asec" */,-38 , 22/* "asech" */,-38 , 23/* "csc" */,-38 , 25/* "csch" */,-38 , 24/* "acsc" */,-38 , 26/* "acsch" */,-38 , 27/* "cot" */,-38 , 29/* "coth" */,-38 , 28/* "acot" */,-38 , 30/* "acoth" */,-38 , 31/* "sqrt" */,-38 , 32/* "exp" */,-38 , 33/* "log" */,-38 , 35/* ")" */,-38 ),
    /* State 132 */ new Array( 51/* "$" */,-39 , 3/* "-" */,-39 , 2/* "+" */,-39 , 4/* "*" */,-39 , 5/* "/" */,-39 , 6/* "^" */,-39 , 36/* "IDENTIFIER" */,-39 , 37/* "INT" */,-39 , 38/* "FLOAT" */,-39 , 34/* "(" */,-39 , 7/* "sin" */,-39 , 10/* "sinh" */,-39 , 13/* "asin" */,-39 , 16/* "asinh" */,-39 , 8/* "cos" */,-39 , 11/* "cosh" */,-39 , 14/* "acos" */,-39 , 17/* "acosh" */,-39 , 9/* "tan" */,-39 , 12/* "tanh" */,-39 , 15/* "atan" */,-39 , 18/* "atanh" */,-39 , 19/* "sec" */,-39 , 21/* "sech" */,-39 , 20/* "asec" */,-39 , 22/* "asech" */,-39 , 23/* "csc" */,-39 , 25/* "csch" */,-39 , 24/* "acsc" */,-39 , 26/* "acsch" */,-39 , 27/* "cot" */,-39 , 29/* "coth" */,-39 , 28/* "acot" */,-39 , 30/* "acoth" */,-39 , 31/* "sqrt" */,-39 , 32/* "exp" */,-39 , 33/* "log" */,-39 , 35/* ")" */,-39 ),
    /* State 133 */ new Array( 51/* "$" */,-40 , 3/* "-" */,-40 , 2/* "+" */,-40 , 4/* "*" */,-40 , 5/* "/" */,-40 , 6/* "^" */,-40 , 36/* "IDENTIFIER" */,-40 , 37/* "INT" */,-40 , 38/* "FLOAT" */,-40 , 34/* "(" */,-40 , 7/* "sin" */,-40 , 10/* "sinh" */,-40 , 13/* "asin" */,-40 , 16/* "asinh" */,-40 , 8/* "cos" */,-40 , 11/* "cosh" */,-40 , 14/* "acos" */,-40 , 17/* "acosh" */,-40 , 9/* "tan" */,-40 , 12/* "tanh" */,-40 , 15/* "atan" */,-40 , 18/* "atanh" */,-40 , 19/* "sec" */,-40 , 21/* "sech" */,-40 , 20/* "asec" */,-40 , 22/* "asech" */,-40 , 23/* "csc" */,-40 , 25/* "csch" */,-40 , 24/* "acsc" */,-40 , 26/* "acsch" */,-40 , 27/* "cot" */,-40 , 29/* "coth" */,-40 , 28/* "acot" */,-40 , 30/* "acoth" */,-40 , 31/* "sqrt" */,-40 , 32/* "exp" */,-40 , 33/* "log" */,-40 , 35/* ")" */,-40 ),
    /* State 134 */ new Array( 51/* "$" */,-41 , 3/* "-" */,-41 , 2/* "+" */,-41 , 4/* "*" */,-41 , 5/* "/" */,-41 , 6/* "^" */,-41 , 36/* "IDENTIFIER" */,-41 , 37/* "INT" */,-41 , 38/* "FLOAT" */,-41 , 34/* "(" */,-41 , 7/* "sin" */,-41 , 10/* "sinh" */,-41 , 13/* "asin" */,-41 , 16/* "asinh" */,-41 , 8/* "cos" */,-41 , 11/* "cosh" */,-41 , 14/* "acos" */,-41 , 17/* "acosh" */,-41 , 9/* "tan" */,-41 , 12/* "tanh" */,-41 , 15/* "atan" */,-41 , 18/* "atanh" */,-41 , 19/* "sec" */,-41 , 21/* "sech" */,-41 , 20/* "asec" */,-41 , 22/* "asech" */,-41 , 23/* "csc" */,-41 , 25/* "csch" */,-41 , 24/* "acsc" */,-41 , 26/* "acsch" */,-41 , 27/* "cot" */,-41 , 29/* "coth" */,-41 , 28/* "acot" */,-41 , 30/* "acoth" */,-41 , 31/* "sqrt" */,-41 , 32/* "exp" */,-41 , 33/* "log" */,-41 , 35/* ")" */,-41 ),
    /* State 135 */ new Array( 51/* "$" */,-42 , 3/* "-" */,-42 , 2/* "+" */,-42 , 4/* "*" */,-42 , 5/* "/" */,-42 , 6/* "^" */,-42 , 36/* "IDENTIFIER" */,-42 , 37/* "INT" */,-42 , 38/* "FLOAT" */,-42 , 34/* "(" */,-42 , 7/* "sin" */,-42 , 10/* "sinh" */,-42 , 13/* "asin" */,-42 , 16/* "asinh" */,-42 , 8/* "cos" */,-42 , 11/* "cosh" */,-42 , 14/* "acos" */,-42 , 17/* "acosh" */,-42 , 9/* "tan" */,-42 , 12/* "tanh" */,-42 , 15/* "atan" */,-42 , 18/* "atanh" */,-42 , 19/* "sec" */,-42 , 21/* "sech" */,-42 , 20/* "asec" */,-42 , 22/* "asech" */,-42 , 23/* "csc" */,-42 , 25/* "csch" */,-42 , 24/* "acsc" */,-42 , 26/* "acsch" */,-42 , 27/* "cot" */,-42 , 29/* "coth" */,-42 , 28/* "acot" */,-42 , 30/* "acoth" */,-42 , 31/* "sqrt" */,-42 , 32/* "exp" */,-42 , 33/* "log" */,-42 , 35/* ")" */,-42 ),
    /* State 136 */ new Array( 51/* "$" */,-43 , 3/* "-" */,-43 , 2/* "+" */,-43 , 4/* "*" */,-43 , 5/* "/" */,-43 , 6/* "^" */,-43 , 36/* "IDENTIFIER" */,-43 , 37/* "INT" */,-43 , 38/* "FLOAT" */,-43 , 34/* "(" */,-43 , 7/* "sin" */,-43 , 10/* "sinh" */,-43 , 13/* "asin" */,-43 , 16/* "asinh" */,-43 , 8/* "cos" */,-43 , 11/* "cosh" */,-43 , 14/* "acos" */,-43 , 17/* "acosh" */,-43 , 9/* "tan" */,-43 , 12/* "tanh" */,-43 , 15/* "atan" */,-43 , 18/* "atanh" */,-43 , 19/* "sec" */,-43 , 21/* "sech" */,-43 , 20/* "asec" */,-43 , 22/* "asech" */,-43 , 23/* "csc" */,-43 , 25/* "csch" */,-43 , 24/* "acsc" */,-43 , 26/* "acsch" */,-43 , 27/* "cot" */,-43 , 29/* "coth" */,-43 , 28/* "acot" */,-43 , 30/* "acoth" */,-43 , 31/* "sqrt" */,-43 , 32/* "exp" */,-43 , 33/* "log" */,-43 , 35/* ")" */,-43 ),
    /* State 137 */ new Array( 51/* "$" */,-44 , 3/* "-" */,-44 , 2/* "+" */,-44 , 4/* "*" */,-44 , 5/* "/" */,-44 , 6/* "^" */,-44 , 36/* "IDENTIFIER" */,-44 , 37/* "INT" */,-44 , 38/* "FLOAT" */,-44 , 34/* "(" */,-44 , 7/* "sin" */,-44 , 10/* "sinh" */,-44 , 13/* "asin" */,-44 , 16/* "asinh" */,-44 , 8/* "cos" */,-44 , 11/* "cosh" */,-44 , 14/* "acos" */,-44 , 17/* "acosh" */,-44 , 9/* "tan" */,-44 , 12/* "tanh" */,-44 , 15/* "atan" */,-44 , 18/* "atanh" */,-44 , 19/* "sec" */,-44 , 21/* "sech" */,-44 , 20/* "asec" */,-44 , 22/* "asech" */,-44 , 23/* "csc" */,-44 , 25/* "csch" */,-44 , 24/* "acsc" */,-44 , 26/* "acsch" */,-44 , 27/* "cot" */,-44 , 29/* "coth" */,-44 , 28/* "acot" */,-44 , 30/* "acoth" */,-44 , 31/* "sqrt" */,-44 , 32/* "exp" */,-44 , 33/* "log" */,-44 , 35/* ")" */,-44 ),
    /* State 138 */ new Array( 51/* "$" */,-45 , 3/* "-" */,-45 , 2/* "+" */,-45 , 4/* "*" */,-45 , 5/* "/" */,-45 , 6/* "^" */,-45 , 36/* "IDENTIFIER" */,-45 , 37/* "INT" */,-45 , 38/* "FLOAT" */,-45 , 34/* "(" */,-45 , 7/* "sin" */,-45 , 10/* "sinh" */,-45 , 13/* "asin" */,-45 , 16/* "asinh" */,-45 , 8/* "cos" */,-45 , 11/* "cosh" */,-45 , 14/* "acos" */,-45 , 17/* "acosh" */,-45 , 9/* "tan" */,-45 , 12/* "tanh" */,-45 , 15/* "atan" */,-45 , 18/* "atanh" */,-45 , 19/* "sec" */,-45 , 21/* "sech" */,-45 , 20/* "asec" */,-45 , 22/* "asech" */,-45 , 23/* "csc" */,-45 , 25/* "csch" */,-45 , 24/* "acsc" */,-45 , 26/* "acsch" */,-45 , 27/* "cot" */,-45 , 29/* "coth" */,-45 , 28/* "acot" */,-45 , 30/* "acoth" */,-45 , 31/* "sqrt" */,-45 , 32/* "exp" */,-45 , 33/* "log" */,-45 , 35/* ")" */,-45 ),
    /* State 139 */ new Array( 51/* "$" */,-46 , 3/* "-" */,-46 , 2/* "+" */,-46 , 4/* "*" */,-46 , 5/* "/" */,-46 , 6/* "^" */,-46 , 36/* "IDENTIFIER" */,-46 , 37/* "INT" */,-46 , 38/* "FLOAT" */,-46 , 34/* "(" */,-46 , 7/* "sin" */,-46 , 10/* "sinh" */,-46 , 13/* "asin" */,-46 , 16/* "asinh" */,-46 , 8/* "cos" */,-46 , 11/* "cosh" */,-46 , 14/* "acos" */,-46 , 17/* "acosh" */,-46 , 9/* "tan" */,-46 , 12/* "tanh" */,-46 , 15/* "atan" */,-46 , 18/* "atanh" */,-46 , 19/* "sec" */,-46 , 21/* "sech" */,-46 , 20/* "asec" */,-46 , 22/* "asech" */,-46 , 23/* "csc" */,-46 , 25/* "csch" */,-46 , 24/* "acsc" */,-46 , 26/* "acsch" */,-46 , 27/* "cot" */,-46 , 29/* "coth" */,-46 , 28/* "acot" */,-46 , 30/* "acoth" */,-46 , 31/* "sqrt" */,-46 , 32/* "exp" */,-46 , 33/* "log" */,-46 , 35/* ")" */,-46 ),
    /* State 140 */ new Array( 51/* "$" */,-47 , 3/* "-" */,-47 , 2/* "+" */,-47 , 4/* "*" */,-47 , 5/* "/" */,-47 , 6/* "^" */,-47 , 36/* "IDENTIFIER" */,-47 , 37/* "INT" */,-47 , 38/* "FLOAT" */,-47 , 34/* "(" */,-47 , 7/* "sin" */,-47 , 10/* "sinh" */,-47 , 13/* "asin" */,-47 , 16/* "asinh" */,-47 , 8/* "cos" */,-47 , 11/* "cosh" */,-47 , 14/* "acos" */,-47 , 17/* "acosh" */,-47 , 9/* "tan" */,-47 , 12/* "tanh" */,-47 , 15/* "atan" */,-47 , 18/* "atanh" */,-47 , 19/* "sec" */,-47 , 21/* "sech" */,-47 , 20/* "asec" */,-47 , 22/* "asech" */,-47 , 23/* "csc" */,-47 , 25/* "csch" */,-47 , 24/* "acsc" */,-47 , 26/* "acsch" */,-47 , 27/* "cot" */,-47 , 29/* "coth" */,-47 , 28/* "acot" */,-47 , 30/* "acoth" */,-47 , 31/* "sqrt" */,-47 , 32/* "exp" */,-47 , 33/* "log" */,-47 , 35/* ")" */,-47 ),
    /* State 141 */ new Array( 51/* "$" */,-48 , 3/* "-" */,-48 , 2/* "+" */,-48 , 4/* "*" */,-48 , 5/* "/" */,-48 , 6/* "^" */,-48 , 36/* "IDENTIFIER" */,-48 , 37/* "INT" */,-48 , 38/* "FLOAT" */,-48 , 34/* "(" */,-48 , 7/* "sin" */,-48 , 10/* "sinh" */,-48 , 13/* "asin" */,-48 , 16/* "asinh" */,-48 , 8/* "cos" */,-48 , 11/* "cosh" */,-48 , 14/* "acos" */,-48 , 17/* "acosh" */,-48 , 9/* "tan" */,-48 , 12/* "tanh" */,-48 , 15/* "atan" */,-48 , 18/* "atanh" */,-48 , 19/* "sec" */,-48 , 21/* "sech" */,-48 , 20/* "asec" */,-48 , 22/* "asech" */,-48 , 23/* "csc" */,-48 , 25/* "csch" */,-48 , 24/* "acsc" */,-48 , 26/* "acsch" */,-48 , 27/* "cot" */,-48 , 29/* "coth" */,-48 , 28/* "acot" */,-48 , 30/* "acoth" */,-48 , 31/* "sqrt" */,-48 , 32/* "exp" */,-48 , 33/* "log" */,-48 , 35/* ")" */,-48 ),
    /* State 142 */ new Array( 51/* "$" */,-49 , 3/* "-" */,-49 , 2/* "+" */,-49 , 4/* "*" */,-49 , 5/* "/" */,-49 , 6/* "^" */,-49 , 36/* "IDENTIFIER" */,-49 , 37/* "INT" */,-49 , 38/* "FLOAT" */,-49 , 34/* "(" */,-49 , 7/* "sin" */,-49 , 10/* "sinh" */,-49 , 13/* "asin" */,-49 , 16/* "asinh" */,-49 , 8/* "cos" */,-49 , 11/* "cosh" */,-49 , 14/* "acos" */,-49 , 17/* "acosh" */,-49 , 9/* "tan" */,-49 , 12/* "tanh" */,-49 , 15/* "atan" */,-49 , 18/* "atanh" */,-49 , 19/* "sec" */,-49 , 21/* "sech" */,-49 , 20/* "asec" */,-49 , 22/* "asech" */,-49 , 23/* "csc" */,-49 , 25/* "csch" */,-49 , 24/* "acsc" */,-49 , 26/* "acsch" */,-49 , 27/* "cot" */,-49 , 29/* "coth" */,-49 , 28/* "acot" */,-49 , 30/* "acoth" */,-49 , 31/* "sqrt" */,-49 , 32/* "exp" */,-49 , 33/* "log" */,-49 , 35/* ")" */,-49 ),
    /* State 143 */ new Array( 51/* "$" */,-50 , 3/* "-" */,-50 , 2/* "+" */,-50 , 4/* "*" */,-50 , 5/* "/" */,-50 , 6/* "^" */,-50 , 36/* "IDENTIFIER" */,-50 , 37/* "INT" */,-50 , 38/* "FLOAT" */,-50 , 34/* "(" */,-50 , 7/* "sin" */,-50 , 10/* "sinh" */,-50 , 13/* "asin" */,-50 , 16/* "asinh" */,-50 , 8/* "cos" */,-50 , 11/* "cosh" */,-50 , 14/* "acos" */,-50 , 17/* "acosh" */,-50 , 9/* "tan" */,-50 , 12/* "tanh" */,-50 , 15/* "atan" */,-50 , 18/* "atanh" */,-50 , 19/* "sec" */,-50 , 21/* "sech" */,-50 , 20/* "asec" */,-50 , 22/* "asech" */,-50 , 23/* "csc" */,-50 , 25/* "csch" */,-50 , 24/* "acsc" */,-50 , 26/* "acsch" */,-50 , 27/* "cot" */,-50 , 29/* "coth" */,-50 , 28/* "acot" */,-50 , 30/* "acoth" */,-50 , 31/* "sqrt" */,-50 , 32/* "exp" */,-50 , 33/* "log" */,-50 , 35/* ")" */,-50 ),
    /* State 144 */ new Array( 51/* "$" */,-51 , 3/* "-" */,-51 , 2/* "+" */,-51 , 4/* "*" */,-51 , 5/* "/" */,-51 , 6/* "^" */,-51 , 36/* "IDENTIFIER" */,-51 , 37/* "INT" */,-51 , 38/* "FLOAT" */,-51 , 34/* "(" */,-51 , 7/* "sin" */,-51 , 10/* "sinh" */,-51 , 13/* "asin" */,-51 , 16/* "asinh" */,-51 , 8/* "cos" */,-51 , 11/* "cosh" */,-51 , 14/* "acos" */,-51 , 17/* "acosh" */,-51 , 9/* "tan" */,-51 , 12/* "tanh" */,-51 , 15/* "atan" */,-51 , 18/* "atanh" */,-51 , 19/* "sec" */,-51 , 21/* "sech" */,-51 , 20/* "asec" */,-51 , 22/* "asech" */,-51 , 23/* "csc" */,-51 , 25/* "csch" */,-51 , 24/* "acsc" */,-51 , 26/* "acsch" */,-51 , 27/* "cot" */,-51 , 29/* "coth" */,-51 , 28/* "acot" */,-51 , 30/* "acoth" */,-51 , 31/* "sqrt" */,-51 , 32/* "exp" */,-51 , 33/* "log" */,-51 , 35/* ")" */,-51 ),
    /* State 145 */ new Array( 2/* "+" */,43 , 3/* "-" */,44 , 35/* ")" */,147 ),
    /* State 146 */ new Array( 51/* "$" */,-52 , 3/* "-" */,-52 , 2/* "+" */,-52 , 4/* "*" */,-52 , 5/* "/" */,-52 , 6/* "^" */,-52 , 36/* "IDENTIFIER" */,-52 , 37/* "INT" */,-52 , 38/* "FLOAT" */,-52 , 34/* "(" */,-52 , 7/* "sin" */,-52 , 10/* "sinh" */,-52 , 13/* "asin" */,-52 , 16/* "asinh" */,-52 , 8/* "cos" */,-52 , 11/* "cosh" */,-52 , 14/* "acos" */,-52 , 17/* "acosh" */,-52 , 9/* "tan" */,-52 , 12/* "tanh" */,-52 , 15/* "atan" */,-52 , 18/* "atanh" */,-52 , 19/* "sec" */,-52 , 21/* "sech" */,-52 , 20/* "asec" */,-52 , 22/* "asech" */,-52 , 23/* "csc" */,-52 , 25/* "csch" */,-52 , 24/* "acsc" */,-52 , 26/* "acsch" */,-52 , 27/* "cot" */,-52 , 29/* "coth" */,-52 , 28/* "acot" */,-52 , 30/* "acoth" */,-52 , 31/* "sqrt" */,-52 , 32/* "exp" */,-52 , 33/* "log" */,-52 , 35/* ")" */,-52 ),
    /* State 147 */ new Array( 51/* "$" */,-53 , 3/* "-" */,-53 , 2/* "+" */,-53 , 4/* "*" */,-53 , 5/* "/" */,-53 , 6/* "^" */,-53 , 36/* "IDENTIFIER" */,-53 , 37/* "INT" */,-53 , 38/* "FLOAT" */,-53 , 34/* "(" */,-53 , 7/* "sin" */,-53 , 10/* "sinh" */,-53 , 13/* "asin" */,-53 , 16/* "asinh" */,-53 , 8/* "cos" */,-53 , 11/* "cosh" */,-53 , 14/* "acos" */,-53 , 17/* "acosh" */,-53 , 9/* "tan" */,-53 , 12/* "tanh" */,-53 , 15/* "atan" */,-53 , 18/* "atanh" */,-53 , 19/* "sec" */,-53 , 21/* "sech" */,-53 , 20/* "asec" */,-53 , 22/* "asech" */,-53 , 23/* "csc" */,-53 , 25/* "csch" */,-53 , 24/* "acsc" */,-53 , 26/* "acsch" */,-53 , 27/* "cot" */,-53 , 29/* "coth" */,-53 , 28/* "acot" */,-53 , 30/* "acoth" */,-53 , 31/* "sqrt" */,-53 , 32/* "exp" */,-53 , 33/* "log" */,-53 , 35/* ")" */,-53 )
);

/* Goto-Table */
var goto_tab = new Array(
    /* State 0 */ new Array( 40/* p */,1 , 39/* e */,2 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 1 */ new Array( ),
    /* State 2 */ new Array( ),
    /* State 3 */ new Array( ),
    /* State 4 */ new Array( ),
    /* State 5 */ new Array( 44/* NonNegDivExp */,47 , 46/* NonNegPowExp */,48 , 48/* Value */,49 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 6 */ new Array( ),
    /* State 7 */ new Array( ),
    /* State 8 */ new Array( 48/* Value */,51 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 9 */ new Array( ),
    /* State 10 */ new Array( ),
    /* State 11 */ new Array( ),
    /* State 12 */ new Array( ),
    /* State 13 */ new Array( ),
    /* State 14 */ new Array( ),
    /* State 15 */ new Array( 39/* e */,52 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 16 */ new Array( ),
    /* State 17 */ new Array( ),
    /* State 18 */ new Array( ),
    /* State 19 */ new Array( ),
    /* State 20 */ new Array( ),
    /* State 21 */ new Array( ),
    /* State 22 */ new Array( ),
    /* State 23 */ new Array( ),
    /* State 24 */ new Array( ),
    /* State 25 */ new Array( ),
    /* State 26 */ new Array( ),
    /* State 27 */ new Array( ),
    /* State 28 */ new Array( ),
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
    /* State 40 */ new Array( ),
    /* State 41 */ new Array( ),
    /* State 42 */ new Array( 49/* NumericValue */,79 ),
    /* State 43 */ new Array( 41/* MulDivExp */,81 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 44 */ new Array( 41/* MulDivExp */,82 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 45 */ new Array( 42/* DivExp */,83 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 46 */ new Array( 45/* PowExp */,84 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 47 */ new Array( ),
    /* State 48 */ new Array( ),
    /* State 49 */ new Array( ),
    /* State 50 */ new Array( 47/* NegExp */,87 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 51 */ new Array( ),
    /* State 52 */ new Array( ),
    /* State 53 */ new Array( 39/* e */,89 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 54 */ new Array( 39/* e */,90 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 55 */ new Array( 39/* e */,91 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 56 */ new Array( 39/* e */,92 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 57 */ new Array( 39/* e */,93 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 58 */ new Array( 39/* e */,94 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 59 */ new Array( 39/* e */,95 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 60 */ new Array( 39/* e */,96 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 61 */ new Array( 39/* e */,97 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 62 */ new Array( 39/* e */,98 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 63 */ new Array( 39/* e */,99 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 64 */ new Array( 39/* e */,100 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 65 */ new Array( 39/* e */,101 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 66 */ new Array( 39/* e */,102 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 67 */ new Array( 39/* e */,103 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 68 */ new Array( 39/* e */,104 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 69 */ new Array( 39/* e */,105 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 70 */ new Array( 39/* e */,106 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 71 */ new Array( 39/* e */,107 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 72 */ new Array( 39/* e */,108 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 73 */ new Array( 39/* e */,109 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 74 */ new Array( 39/* e */,110 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 75 */ new Array( 39/* e */,111 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 76 */ new Array( 39/* e */,112 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 77 */ new Array( 39/* e */,113 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 78 */ new Array( 39/* e */,114 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 79 */ new Array( ),
    /* State 80 */ new Array( 39/* e */,116 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 81 */ new Array( ),
    /* State 82 */ new Array( ),
    /* State 83 */ new Array( ),
    /* State 84 */ new Array( ),
    /* State 85 */ new Array( 46/* NonNegPowExp */,117 , 48/* Value */,49 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 86 */ new Array( 47/* NegExp */,118 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 87 */ new Array( ),
    /* State 88 */ new Array( ),
    /* State 89 */ new Array( ),
    /* State 90 */ new Array( ),
    /* State 91 */ new Array( ),
    /* State 92 */ new Array( ),
    /* State 93 */ new Array( ),
    /* State 94 */ new Array( ),
    /* State 95 */ new Array( ),
    /* State 96 */ new Array( ),
    /* State 97 */ new Array( ),
    /* State 98 */ new Array( ),
    /* State 99 */ new Array( ),
    /* State 100 */ new Array( ),
    /* State 101 */ new Array( ),
    /* State 102 */ new Array( ),
    /* State 103 */ new Array( ),
    /* State 104 */ new Array( ),
    /* State 105 */ new Array( ),
    /* State 106 */ new Array( ),
    /* State 107 */ new Array( ),
    /* State 108 */ new Array( ),
    /* State 109 */ new Array( ),
    /* State 110 */ new Array( ),
    /* State 111 */ new Array( ),
    /* State 112 */ new Array( ),
    /* State 113 */ new Array( ),
    /* State 114 */ new Array( ),
    /* State 115 */ new Array( 39/* e */,145 , 41/* MulDivExp */,3 , 42/* DivExp */,4 , 43/* MulNonExp */,5 , 45/* PowExp */,6 , 47/* NegExp */,7 , 48/* Value */,9 , 49/* NumericValue */,10 , 50/* ParenExp */,12 ),
    /* State 116 */ new Array( ),
    /* State 117 */ new Array( ),
    /* State 118 */ new Array( ),
    /* State 119 */ new Array( ),
    /* State 120 */ new Array( ),
    /* State 121 */ new Array( ),
    /* State 122 */ new Array( ),
    /* State 123 */ new Array( ),
    /* State 124 */ new Array( ),
    /* State 125 */ new Array( ),
    /* State 126 */ new Array( ),
    /* State 127 */ new Array( ),
    /* State 128 */ new Array( ),
    /* State 129 */ new Array( ),
    /* State 130 */ new Array( ),
    /* State 131 */ new Array( ),
    /* State 132 */ new Array( ),
    /* State 133 */ new Array( ),
    /* State 134 */ new Array( ),
    /* State 135 */ new Array( ),
    /* State 136 */ new Array( ),
    /* State 137 */ new Array( ),
    /* State 138 */ new Array( ),
    /* State 139 */ new Array( ),
    /* State 140 */ new Array( ),
    /* State 141 */ new Array( ),
    /* State 142 */ new Array( ),
    /* State 143 */ new Array( ),
    /* State 144 */ new Array( ),
    /* State 145 */ new Array( ),
    /* State 146 */ new Array( ),
    /* State 147 */ new Array( )
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
    "tan" /* Terminal symbol */,
    "sinh" /* Terminal symbol */,
    "cosh" /* Terminal symbol */,
    "tanh" /* Terminal symbol */,
    "asin" /* Terminal symbol */,
    "acos" /* Terminal symbol */,
    "atan" /* Terminal symbol */,
    "asinh" /* Terminal symbol */,
    "acosh" /* Terminal symbol */,
    "atanh" /* Terminal symbol */,
    "sec" /* Terminal symbol */,
    "asec" /* Terminal symbol */,
    "sech" /* Terminal symbol */,
    "asech" /* Terminal symbol */,
    "csc" /* Terminal symbol */,
    "acsc" /* Terminal symbol */,
    "csch" /* Terminal symbol */,
    "acsch" /* Terminal symbol */,
    "cot" /* Terminal symbol */,
    "acot" /* Terminal symbol */,
    "coth" /* Terminal symbol */,
    "acoth" /* Terminal symbol */,
    "sqrt" /* Terminal symbol */,
    "exp" /* Terminal symbol */,
    "log" /* Terminal symbol */,
    "(" /* Terminal symbol */,
    ")" /* Terminal symbol */,
    "IDENTIFIER" /* Terminal symbol */,
    "INT" /* Terminal symbol */,
    "FLOAT" /* Terminal symbol */,
    "e" /* Non-terminal symbol */,
    "p" /* Non-terminal symbol */,
    "MulDivExp" /* Non-terminal symbol */,
    "DivExp" /* Non-terminal symbol */,
    "MulNonExp" /* Non-terminal symbol */,
    "NonNegDivExp" /* Non-terminal symbol */,
    "PowExp" /* Non-terminal symbol */,
    "NonNegPowExp" /* Non-terminal symbol */,
    "NegExp" /* Non-terminal symbol */,
    "Value" /* Non-terminal symbol */,
    "NumericValue" /* Non-terminal symbol */,
    "ParenExp" /* Non-terminal symbol */,
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
        act = 149;
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
        if( act == 149 )
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

            while( act == 149 && la != 51 )
            {
                if( _dbg_withtrace )
                    __dbg_print( "\tError recovery\n" +
                                    "Current lookahead: " + labels[la] + " (" + info.att + ")\n" +
                                    "Action: " + act + "\n\n" );
                if( la == -1 )
                    info.offset++;

                while( act == 149 && sstack.length > 0 )
                {
                    sstack.pop();
                    vstack.pop();

                    if( sstack.length == 0 )
                        break;

                    act = 149;
                    for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
                    {
                        if( act_tab[sstack[sstack.length-1]][i] == la )
                        {
                            act = act_tab[sstack[sstack.length-1]][i+1];
                            break;
                        }
                    }
                }

                if( act != 149 )
                    break;

                for( var i = 0; i < rsstack.length; i++ )
                {
                    sstack.push( rsstack[i] );
                    vstack.push( rvstack[i] );
                }

                la = __lex( info );
            }

            if( act == 149 )
            {
                if( _dbg_withtrace )
                    __dbg_print( "\tError recovery failed, terminating parse process..." );
                break;
            }


            if( _dbg_withtrace )
                __dbg_print( "\tError recovery succeeded, continuing" );
        }

        /*
        if( act == 149 )
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
        rval = vstack[ vstack.length - 1 ];
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
         rval = createNode( NODE_OP, OP_MUL, vstack[ vstack.length - 2 ], vstack[ vstack.length - 1 ] );
    }
    break;
    case 11:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 12:
    {
         rval = createNode( NODE_OP, OP_DIV, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] );
    }
    break;
    case 13:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 14:
    {
         rval = createNode( NODE_OP, OP_POW, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] );
    }
    break;
    case 15:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 16:
    {
         rval = createNode( NODE_OP, OP_POW, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] );
    }
    break;
    case 17:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 18:
    {
         rval = createNode( NODE_OP, OP_NEG, vstack[ vstack.length - 1 ] );
    }
    break;
    case 19:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 20:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 21:
    {
         rval = createNode( NODE_SYM, vstack[ vstack.length - 1 ] );
    }
    break;
    case 22:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 23:
    {
         rval = createNode( NODE_INT, vstack[ vstack.length - 1 ] );
    }
    break;
    case 24:
    {
         rval = createNode( NODE_INT, vstack[ vstack.length - 1 ] );
    }
    break;
    case 25:
    {
         rval = vstack[ vstack.length - 2 ];
    }
    break;
    case 26:
    {
         rval = createNode( NODE_FUNC, FUNC_SIN, vstack[ vstack.length - 2 ] );
    }
    break;
    case 27:
    {
         rval = createNode( NODE_FUNC, FUNC_SINH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 28:
    {
         rval = createNode( NODE_FUNC, FUNC_ASIN, vstack[ vstack.length - 2 ] );
    }
    break;
    case 29:
    {
         rval = createNode( NODE_FUNC, FUNC_ASINH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 30:
    {
         rval = createNode( NODE_FUNC, FUNC_COS, vstack[ vstack.length - 2 ] );
    }
    break;
    case 31:
    {
         rval = createNode( NODE_FUNC, FUNC_COSH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 32:
    {
         rval = createNode( NODE_FUNC, FUNC_ACOS, vstack[ vstack.length - 2 ] );
    }
    break;
    case 33:
    {
         rval = createNode( NODE_FUNC, FUNC_ACOSH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 34:
    {
         rval = createNode( NODE_FUNC, FUNC_TAN, vstack[ vstack.length - 2 ] );
    }
    break;
    case 35:
    {
         rval = createNode( NODE_FUNC, FUNC_TANH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 36:
    {
         rval = createNode( NODE_FUNC, FUNC_ATAN, vstack[ vstack.length - 2 ] );
    }
    break;
    case 37:
    {
         rval = createNode( NODE_FUNC, FUNC_ATANH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 38:
    {
         rval = createNode( NODE_FUNC, FUNC_SEC, vstack[ vstack.length - 2 ] );
    }
    break;
    case 39:
    {
         rval = createNode( NODE_FUNC, FUNC_SECH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 40:
    {
         rval = createNode( NODE_FUNC, FUNC_ASEC, vstack[ vstack.length - 2 ] );
    }
    break;
    case 41:
    {
         rval = createNode( NODE_FUNC, FUNC_ASECH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 42:
    {
         rval = createNode( NODE_FUNC, FUNC_CSC, vstack[ vstack.length - 2 ] );
    }
    break;
    case 43:
    {
         rval = createNode( NODE_FUNC, FUNC_CSCH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 44:
    {
         rval = createNode( NODE_FUNC, FUNC_ACSC, vstack[ vstack.length - 2 ] );
    }
    break;
    case 45:
    {
         rval = createNode( NODE_FUNC, FUNC_ACSCH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 46:
    {
         rval = createNode( NODE_FUNC, FUNC_COT, vstack[ vstack.length - 2 ] );
    }
    break;
    case 47:
    {
         rval = createNode( NODE_FUNC, FUNC_COTH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 48:
    {
         rval = createNode( NODE_FUNC, FUNC_ACOT, vstack[ vstack.length - 2 ] );
    }
    break;
    case 49:
    {
         rval = createNode( NODE_FUNC, FUNC_ACOTH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 50:
    {
         rval = createNode( NODE_FUNC, FUNC_SQRT, vstack[ vstack.length - 2 ] );
    }
    break;
    case 51:
    {
         //rval = createNode( NODE_FUNC, FUNC_EXP, vstack[ vstack.length - 2 ] );
         // the function exp was transformed into e^n
         rval = createNode( NODE_OP, OP_POW, createNode( NODE_SYM, "e" ), vstack[ vstack.length - 2 ] );
    }
    break;
    case 52:
    {
         rval = createNode( NODE_FUNC, FUNC_NLOG, vstack[ vstack.length - 2 ] );
    }
    break;
    case 53:
    {
         rval = createNode( NODE_FUNC, FUNC_BLOG, vstack[ vstack.length - 4 ], vstack[ vstack.length - 2 ] );
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


    // Global var for the function plot
    var plot_value;

    function initparser( node )
    {
      console.log(node);
      var func = stringEquation( node );
      var diff = symbolic_diff( node );

      var BAE_node = BAE_transform(node);
      var simplified = automatic_simplify(node);
      //var teste = group_product_terms(simplified.children[0], simplified.children[1])
      //var a1 = construct(OP_POW, construct(OP_ADD, createNode(NODE_INT, 1), createNode(NODE_SYM, "x")), createNode(NODE_INT, 3));
      //var a2 = construct(OP_ADD, createNode(NODE_INT, 1), createNode(NODE_SYM, "x"));
      //var a3 = createNode(NODE_INT, 2);
      //var aaa = construct(OP_ADD, new Array(createNode(NODE_INT, 1), createNode(NODE_INT, 4), createNode(NODE_INT, 2), createNode(NODE_INT, 3), createNode(NODE_INT, 2)));
      var aaa = construct(OP_ADD, new Array(createNode(NODE_SYM, "y"), createNode(NODE_SYM, "x")));
      aaa.children.sort(compare);
      //alert(compare(a3, a2));
      //alert(toMathML( diff ) );
      //$("#console").html("<p>$$d/{dx}("+toTex(node)+") = "+toTex( diff )+"$$</p><br><br>"+toTex( diff )+"<br>"+stringEquation(diff));

      //[ "+toTex(construct(OP_MUL, simplified))+"]

      $("#console").html("<p>$$d/{dx}("+toTex(BAE_node)+") -> "+toTex( simplified )+" -> "+toTex(symbolic_diff(simplified))+" -> "+toTex(automatic_simplify(symbolic_diff(simplified)))+" $$</p><br><br>"+step_diff(simplified)+"<br><br>"+toTex( BAE_node )+"<br>"+stringEquation( BAE_node )+"<br>"+toTex( simplified )+"<br>"+stringEquation(simplified));
      // Set the global plot value as the strin equation of the differentiation (it is necessary to fix some functios as sec, cot..)
      plot_value = stringEquation(diff);
      M.trustHtml = true;
      M.parseMath(document.getElementById("console"));
    }
