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
var _dbg_expression;

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
            return 59;

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
        else if( info.src.charCodeAt( pos ) == 44 ) state = 6;
        else if( info.src.charCodeAt( pos ) == 45 ) state = 7;
        else if( info.src.charCodeAt( pos ) == 47 ) state = 8;
        else if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 9;
        else if( info.src.charCodeAt( pos ) == 61 ) state = 10;
        else if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 98 || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 111 ) || ( info.src.charCodeAt( pos ) >= 113 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 118 ) || ( info.src.charCodeAt( pos ) >= 120 && info.src.charCodeAt( pos ) <= 122 ) ) state = 11;
        else if( info.src.charCodeAt( pos ) == 94 ) state = 12;
        else if( info.src.charCodeAt( pos ) == 46 ) state = 45;
        else if( info.src.charCodeAt( pos ) == 97 ) state = 46;
        else if( info.src.charCodeAt( pos ) == 99 ) state = 48;
        else if( info.src.charCodeAt( pos ) == 100 ) state = 50;
        else if( info.src.charCodeAt( pos ) == 101 ) state = 52;
        else if( info.src.charCodeAt( pos ) == 105 ) state = 54;
        else if( info.src.charCodeAt( pos ) == 108 ) state = 56;
        else if( info.src.charCodeAt( pos ) == 112 ) state = 58;
        else if( info.src.charCodeAt( pos ) == 115 ) state = 60;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 62;
        else if( info.src.charCodeAt( pos ) == 119 ) state = 64;
        else state = -1;
        break;

    case 1:
        state = -1;
        match = 1;
        match_pos = pos;
        break;

    case 2:
        state = -1;
        match = 38;
        match_pos = pos;
        break;

    case 3:
        state = -1;
        match = 39;
        match_pos = pos;
        break;

    case 4:
        state = -1;
        match = 6;
        match_pos = pos;
        break;

    case 5:
        state = -1;
        match = 4;
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
        state = -1;
        match = 7;
        match_pos = pos;
        break;

    case 9:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 9;
        else if( info.src.charCodeAt( pos ) == 46 ) state = 13;
        else state = -1;
        match = 43;
        match_pos = pos;
        break;

    case 10:
        state = -1;
        match = 2;
        match_pos = pos;
        break;

    case 11:
        state = -1;
        match = 42;
        match_pos = pos;
        break;

    case 12:
        state = -1;
        match = 8;
        match_pos = pos;
        break;

    case 13:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 13;
        else state = -1;
        match = 44;
        match_pos = pos;
        break;

    case 14:
        state = -1;
        match = 40;
        match_pos = pos;
        break;

    case 15:
        if( info.src.charCodeAt( pos ) == 104 ) state = 29;
        else state = -1;
        match = 10;
        match_pos = pos;
        break;

    case 16:
        if( info.src.charCodeAt( pos ) == 104 ) state = 30;
        else state = -1;
        match = 29;
        match_pos = pos;
        break;

    case 17:
        if( info.src.charCodeAt( pos ) == 104 ) state = 31;
        else state = -1;
        match = 25;
        match_pos = pos;
        break;

    case 18:
        state = -1;
        match = 34;
        match_pos = pos;
        break;

    case 19:
        state = -1;
        match = 35;
        match_pos = pos;
        break;

    case 20:
        if( info.src.charCodeAt( pos ) == 104 ) state = 32;
        else state = -1;
        match = 21;
        match_pos = pos;
        break;

    case 21:
        if( info.src.charCodeAt( pos ) == 104 ) state = 33;
        else state = -1;
        match = 9;
        match_pos = pos;
        break;

    case 22:
        if( info.src.charCodeAt( pos ) == 104 ) state = 35;
        else state = -1;
        match = 11;
        match_pos = pos;
        break;

    case 23:
        if( info.src.charCodeAt( pos ) == 104 ) state = 36;
        else state = -1;
        match = 16;
        match_pos = pos;
        break;

    case 24:
        if( info.src.charCodeAt( pos ) == 104 ) state = 37;
        else state = -1;
        match = 30;
        match_pos = pos;
        break;

    case 25:
        if( info.src.charCodeAt( pos ) == 104 ) state = 38;
        else state = -1;
        match = 26;
        match_pos = pos;
        break;

    case 26:
        if( info.src.charCodeAt( pos ) == 104 ) state = 39;
        else state = -1;
        match = 22;
        match_pos = pos;
        break;

    case 27:
        if( info.src.charCodeAt( pos ) == 104 ) state = 40;
        else state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 28:
        if( info.src.charCodeAt( pos ) == 104 ) state = 41;
        else state = -1;
        match = 17;
        match_pos = pos;
        break;

    case 29:
        state = -1;
        match = 13;
        match_pos = pos;
        break;

    case 30:
        state = -1;
        match = 31;
        match_pos = pos;
        break;

    case 31:
        state = -1;
        match = 27;
        match_pos = pos;
        break;

    case 32:
        state = -1;
        match = 23;
        match_pos = pos;
        break;

    case 33:
        state = -1;
        match = 12;
        match_pos = pos;
        break;

    case 34:
        state = -1;
        match = 33;
        match_pos = pos;
        break;

    case 35:
        state = -1;
        match = 14;
        match_pos = pos;
        break;

    case 36:
        state = -1;
        match = 19;
        match_pos = pos;
        break;

    case 37:
        state = -1;
        match = 32;
        match_pos = pos;
        break;

    case 38:
        state = -1;
        match = 28;
        match_pos = pos;
        break;

    case 39:
        state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 40:
        state = -1;
        match = 18;
        match_pos = pos;
        break;

    case 41:
        state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 42:
        state = -1;
        match = 36;
        match_pos = pos;
        break;

    case 43:
        state = -1;
        match = 41;
        match_pos = pos;
        break;

    case 44:
        state = -1;
        match = 37;
        match_pos = pos;
        break;

    case 45:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 13;
        else state = -1;
        break;

    case 46:
        if( info.src.charCodeAt( pos ) == 99 ) state = 47;
        else if( info.src.charCodeAt( pos ) == 115 ) state = 49;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 51;
        else state = -1;
        match = 42;
        match_pos = pos;
        break;

    case 47:
        if( info.src.charCodeAt( pos ) == 111 ) state = 69;
        else if( info.src.charCodeAt( pos ) == 115 ) state = 70;
        else state = -1;
        break;

    case 48:
        if( info.src.charCodeAt( pos ) == 111 ) state = 53;
        else if( info.src.charCodeAt( pos ) == 115 ) state = 55;
        else state = -1;
        match = 42;
        match_pos = pos;
        break;

    case 49:
        if( info.src.charCodeAt( pos ) == 101 ) state = 71;
        else if( info.src.charCodeAt( pos ) == 105 ) state = 72;
        else state = -1;
        break;

    case 50:
        if( info.src.charCodeAt( pos ) == 101 ) state = 57;
        else state = -1;
        match = 42;
        match_pos = pos;
        break;

    case 51:
        if( info.src.charCodeAt( pos ) == 97 ) state = 73;
        else state = -1;
        break;

    case 52:
        if( info.src.charCodeAt( pos ) == 120 ) state = 59;
        else state = -1;
        match = 42;
        match_pos = pos;
        break;

    case 53:
        if( info.src.charCodeAt( pos ) == 115 ) state = 15;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 16;
        else state = -1;
        break;

    case 54:
        if( info.src.charCodeAt( pos ) == 110 ) state = 61;
        else state = -1;
        match = 42;
        match_pos = pos;
        break;

    case 55:
        if( info.src.charCodeAt( pos ) == 99 ) state = 17;
        else state = -1;
        break;

    case 56:
        if( info.src.charCodeAt( pos ) == 111 ) state = 63;
        else state = -1;
        match = 42;
        match_pos = pos;
        break;

    case 57:
        if( info.src.charCodeAt( pos ) == 114 ) state = 74;
        else state = -1;
        break;

    case 58:
        if( info.src.charCodeAt( pos ) == 105 ) state = 14;
        else state = -1;
        match = 42;
        match_pos = pos;
        break;

    case 59:
        if( info.src.charCodeAt( pos ) == 112 ) state = 18;
        else state = -1;
        break;

    case 60:
        if( info.src.charCodeAt( pos ) == 101 ) state = 65;
        else if( info.src.charCodeAt( pos ) == 105 ) state = 66;
        else if( info.src.charCodeAt( pos ) == 113 ) state = 90;
        else state = -1;
        match = 42;
        match_pos = pos;
        break;

    case 61:
        if( info.src.charCodeAt( pos ) == 102 ) state = 91;
        else state = -1;
        break;

    case 62:
        if( info.src.charCodeAt( pos ) == 97 ) state = 67;
        else state = -1;
        match = 42;
        match_pos = pos;
        break;

    case 63:
        if( info.src.charCodeAt( pos ) == 103 ) state = 19;
        else state = -1;
        break;

    case 64:
        if( info.src.charCodeAt( pos ) == 104 ) state = 68;
        else state = -1;
        match = 42;
        match_pos = pos;
        break;

    case 65:
        if( info.src.charCodeAt( pos ) == 99 ) state = 20;
        else state = -1;
        break;

    case 66:
        if( info.src.charCodeAt( pos ) == 110 ) state = 21;
        else state = -1;
        break;

    case 67:
        if( info.src.charCodeAt( pos ) == 110 ) state = 22;
        else state = -1;
        break;

    case 68:
        if( info.src.charCodeAt( pos ) == 101 ) state = 76;
        else state = -1;
        break;

    case 69:
        if( info.src.charCodeAt( pos ) == 115 ) state = 23;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 24;
        else state = -1;
        break;

    case 70:
        if( info.src.charCodeAt( pos ) == 99 ) state = 25;
        else state = -1;
        break;

    case 71:
        if( info.src.charCodeAt( pos ) == 99 ) state = 26;
        else state = -1;
        break;

    case 72:
        if( info.src.charCodeAt( pos ) == 110 ) state = 27;
        else state = -1;
        break;

    case 73:
        if( info.src.charCodeAt( pos ) == 110 ) state = 28;
        else state = -1;
        break;

    case 74:
        if( info.src.charCodeAt( pos ) == 105 ) state = 77;
        else state = -1;
        break;

    case 75:
        if( info.src.charCodeAt( pos ) == 116 ) state = 34;
        else state = -1;
        break;

    case 76:
        if( info.src.charCodeAt( pos ) == 114 ) state = 79;
        else state = -1;
        break;

    case 77:
        if( info.src.charCodeAt( pos ) == 118 ) state = 80;
        else state = -1;
        break;

    case 78:
        if( info.src.charCodeAt( pos ) == 110 ) state = 81;
        else state = -1;
        break;

    case 79:
        if( info.src.charCodeAt( pos ) == 101 ) state = 42;
        else state = -1;
        break;

    case 80:
        if( info.src.charCodeAt( pos ) == 97 ) state = 82;
        else state = -1;
        break;

    case 81:
        if( info.src.charCodeAt( pos ) == 105 ) state = 92;
        else state = -1;
        break;

    case 82:
        if( info.src.charCodeAt( pos ) == 116 ) state = 83;
        else state = -1;
        break;

    case 83:
        if( info.src.charCodeAt( pos ) == 105 ) state = 85;
        else state = -1;
        break;

    case 84:
        if( info.src.charCodeAt( pos ) == 121 ) state = 43;
        else state = -1;
        break;

    case 85:
        if( info.src.charCodeAt( pos ) == 118 ) state = 86;
        else state = -1;
        break;

    case 86:
        if( info.src.charCodeAt( pos ) == 101 ) state = 87;
        else state = -1;
        break;

    case 87:
        if( info.src.charCodeAt( pos ) == 32 ) state = 88;
        else state = -1;
        break;

    case 88:
        if( info.src.charCodeAt( pos ) == 111 ) state = 89;
        else state = -1;
        break;

    case 89:
        if( info.src.charCodeAt( pos ) == 102 ) state = 44;
        else state = -1;
        break;

    case 90:
        if( info.src.charCodeAt( pos ) == 114 ) state = 75;
        else state = -1;
        break;

    case 91:
        if( info.src.charCodeAt( pos ) == 105 ) state = 78;
        else state = -1;
        break;

    case 92:
        if( info.src.charCodeAt( pos ) == 116 ) state = 84;
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
    case 43:
        {
         info.att = parseInt( info.att );
        }
        break;

    case 44:
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
    new Array( 48/* p */, 1 ),
    new Array( 48/* p */, 3 ),
    new Array( 48/* p */, 4 ),
    new Array( 45/* e */, 3 ),
    new Array( 45/* e */, 3 ),
    new Array( 45/* e */, 1 ),
    new Array( 46/* AssignList */, 3 ),
    new Array( 46/* AssignList */, 1 ),
    new Array( 47/* Assign */, 3 ),
    new Array( 49/* MulDivExp */, 3 ),
    new Array( 49/* MulDivExp */, 1 ),
    new Array( 49/* MulDivExp */, 2 ),
    new Array( 50/* DivExp */, 3 ),
    new Array( 50/* DivExp */, 1 ),
    new Array( 51/* MulNonExp */, 2 ),
    new Array( 51/* MulNonExp */, 1 ),
    new Array( 52/* NonNegDivExp */, 3 ),
    new Array( 52/* NonNegDivExp */, 1 ),
    new Array( 53/* PowExp */, 3 ),
    new Array( 53/* PowExp */, 1 ),
    new Array( 54/* NonNegPowExp */, 3 ),
    new Array( 54/* NonNegPowExp */, 1 ),
    new Array( 55/* NegExp */, 2 ),
    new Array( 55/* NegExp */, 1 ),
    new Array( 56/* Value */, 1 ),
    new Array( 56/* Value */, 1 ),
    new Array( 56/* Value */, 1 ),
    new Array( 56/* Value */, 1 ),
    new Array( 56/* Value */, 1 ),
    new Array( 57/* NumericValue */, 1 ),
    new Array( 57/* NumericValue */, 1 ),
    new Array( 58/* ParenExp */, 3 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 4 ),
    new Array( 58/* ParenExp */, 5 )
);

/* Action-Table */
var act_tab = new Array(
    /* State 0 */ new Array( 37/* "derivative of" */,3 , 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 1 */ new Array( 59/* "$" */,0 ),
    /* State 2 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 36/* "where" */,48 , 59/* "$" */,-1 ),
    /* State 3 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 4 */ new Array( 6/* "*" */,50 , 59/* "$" */,-6 , 36/* "where" */,-6 , 5/* "-" */,-6 , 4/* "+" */,-6 , 39/* ")" */,-6 , 3/* "," */,-6 ),
    /* State 5 */ new Array( 7/* "/" */,51 , 59/* "$" */,-11 , 36/* "where" */,-11 , 5/* "-" */,-11 , 4/* "+" */,-11 , 6/* "*" */,-11 , 39/* ")" */,-11 , 3/* "," */,-11 , 40/* "pi" */,-16 , 41/* "infinity" */,-16 , 42/* "IDENTIFIER" */,-16 , 43/* "INT" */,-16 , 44/* "FLOAT" */,-16 , 38/* "(" */,-16 , 9/* "sin" */,-16 , 12/* "sinh" */,-16 , 15/* "asin" */,-16 , 18/* "asinh" */,-16 , 10/* "cos" */,-16 , 13/* "cosh" */,-16 , 16/* "acos" */,-16 , 19/* "acosh" */,-16 , 11/* "tan" */,-16 , 14/* "tanh" */,-16 , 17/* "atan" */,-16 , 20/* "atanh" */,-16 , 21/* "sec" */,-16 , 23/* "sech" */,-16 , 22/* "asec" */,-16 , 24/* "asech" */,-16 , 25/* "csc" */,-16 , 27/* "csch" */,-16 , 26/* "acsc" */,-16 , 28/* "acsch" */,-16 , 29/* "cot" */,-16 , 31/* "coth" */,-16 , 30/* "acot" */,-16 , 32/* "acoth" */,-16 , 33/* "sqrt" */,-16 , 34/* "exp" */,-16 , 35/* "log" */,-16 ),
    /* State 6 */ new Array( 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 7 */ new Array( 8/* "^" */,55 , 59/* "$" */,-14 , 36/* "where" */,-14 , 5/* "-" */,-14 , 4/* "+" */,-14 , 6/* "*" */,-14 , 7/* "/" */,-14 , 40/* "pi" */,-14 , 41/* "infinity" */,-14 , 42/* "IDENTIFIER" */,-14 , 43/* "INT" */,-14 , 44/* "FLOAT" */,-14 , 38/* "(" */,-14 , 9/* "sin" */,-14 , 12/* "sinh" */,-14 , 15/* "asin" */,-14 , 18/* "asinh" */,-14 , 10/* "cos" */,-14 , 13/* "cosh" */,-14 , 16/* "acos" */,-14 , 19/* "acosh" */,-14 , 11/* "tan" */,-14 , 14/* "tanh" */,-14 , 17/* "atan" */,-14 , 20/* "atanh" */,-14 , 21/* "sec" */,-14 , 23/* "sech" */,-14 , 22/* "asec" */,-14 , 24/* "asech" */,-14 , 25/* "csc" */,-14 , 27/* "csch" */,-14 , 26/* "acsc" */,-14 , 28/* "acsch" */,-14 , 29/* "cot" */,-14 , 31/* "coth" */,-14 , 30/* "acot" */,-14 , 32/* "acoth" */,-14 , 33/* "sqrt" */,-14 , 34/* "exp" */,-14 , 35/* "log" */,-14 , 39/* ")" */,-14 , 3/* "," */,-14 ),
    /* State 8 */ new Array( 59/* "$" */,-20 , 36/* "where" */,-20 , 5/* "-" */,-20 , 4/* "+" */,-20 , 6/* "*" */,-20 , 7/* "/" */,-20 , 8/* "^" */,-20 , 40/* "pi" */,-20 , 41/* "infinity" */,-20 , 42/* "IDENTIFIER" */,-20 , 43/* "INT" */,-20 , 44/* "FLOAT" */,-20 , 38/* "(" */,-20 , 9/* "sin" */,-20 , 12/* "sinh" */,-20 , 15/* "asin" */,-20 , 18/* "asinh" */,-20 , 10/* "cos" */,-20 , 13/* "cosh" */,-20 , 16/* "acos" */,-20 , 19/* "acosh" */,-20 , 11/* "tan" */,-20 , 14/* "tanh" */,-20 , 17/* "atan" */,-20 , 20/* "atanh" */,-20 , 21/* "sec" */,-20 , 23/* "sech" */,-20 , 22/* "asec" */,-20 , 24/* "asech" */,-20 , 25/* "csc" */,-20 , 27/* "csch" */,-20 , 26/* "acsc" */,-20 , 28/* "acsch" */,-20 , 29/* "cot" */,-20 , 31/* "coth" */,-20 , 30/* "acot" */,-20 , 32/* "acoth" */,-20 , 33/* "sqrt" */,-20 , 34/* "exp" */,-20 , 35/* "log" */,-20 , 39/* ")" */,-20 , 3/* "," */,-20 ),
    /* State 9 */ new Array( 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 10 */ new Array( 59/* "$" */,-24 , 36/* "where" */,-24 , 5/* "-" */,-24 , 4/* "+" */,-24 , 6/* "*" */,-24 , 7/* "/" */,-24 , 8/* "^" */,-24 , 40/* "pi" */,-24 , 41/* "infinity" */,-24 , 42/* "IDENTIFIER" */,-24 , 43/* "INT" */,-24 , 44/* "FLOAT" */,-24 , 38/* "(" */,-24 , 9/* "sin" */,-24 , 12/* "sinh" */,-24 , 15/* "asin" */,-24 , 18/* "asinh" */,-24 , 10/* "cos" */,-24 , 13/* "cosh" */,-24 , 16/* "acos" */,-24 , 19/* "acosh" */,-24 , 11/* "tan" */,-24 , 14/* "tanh" */,-24 , 17/* "atan" */,-24 , 20/* "atanh" */,-24 , 21/* "sec" */,-24 , 23/* "sech" */,-24 , 22/* "asec" */,-24 , 24/* "asech" */,-24 , 25/* "csc" */,-24 , 27/* "csch" */,-24 , 26/* "acsc" */,-24 , 28/* "acsch" */,-24 , 29/* "cot" */,-24 , 31/* "coth" */,-24 , 30/* "acot" */,-24 , 32/* "acoth" */,-24 , 33/* "sqrt" */,-24 , 34/* "exp" */,-24 , 35/* "log" */,-24 , 39/* ")" */,-24 , 3/* "," */,-24 ),
    /* State 11 */ new Array( 59/* "$" */,-25 , 36/* "where" */,-25 , 5/* "-" */,-25 , 4/* "+" */,-25 , 6/* "*" */,-25 , 7/* "/" */,-25 , 8/* "^" */,-25 , 40/* "pi" */,-25 , 41/* "infinity" */,-25 , 42/* "IDENTIFIER" */,-25 , 43/* "INT" */,-25 , 44/* "FLOAT" */,-25 , 38/* "(" */,-25 , 9/* "sin" */,-25 , 12/* "sinh" */,-25 , 15/* "asin" */,-25 , 18/* "asinh" */,-25 , 10/* "cos" */,-25 , 13/* "cosh" */,-25 , 16/* "acos" */,-25 , 19/* "acosh" */,-25 , 11/* "tan" */,-25 , 14/* "tanh" */,-25 , 17/* "atan" */,-25 , 20/* "atanh" */,-25 , 21/* "sec" */,-25 , 23/* "sech" */,-25 , 22/* "asec" */,-25 , 24/* "asech" */,-25 , 25/* "csc" */,-25 , 27/* "csch" */,-25 , 26/* "acsc" */,-25 , 28/* "acsch" */,-25 , 29/* "cot" */,-25 , 31/* "coth" */,-25 , 30/* "acot" */,-25 , 32/* "acoth" */,-25 , 33/* "sqrt" */,-25 , 34/* "exp" */,-25 , 35/* "log" */,-25 , 39/* ")" */,-25 , 3/* "," */,-25 ),
    /* State 12 */ new Array( 59/* "$" */,-26 , 36/* "where" */,-26 , 5/* "-" */,-26 , 4/* "+" */,-26 , 6/* "*" */,-26 , 7/* "/" */,-26 , 8/* "^" */,-26 , 40/* "pi" */,-26 , 41/* "infinity" */,-26 , 42/* "IDENTIFIER" */,-26 , 43/* "INT" */,-26 , 44/* "FLOAT" */,-26 , 38/* "(" */,-26 , 9/* "sin" */,-26 , 12/* "sinh" */,-26 , 15/* "asin" */,-26 , 18/* "asinh" */,-26 , 10/* "cos" */,-26 , 13/* "cosh" */,-26 , 16/* "acos" */,-26 , 19/* "acosh" */,-26 , 11/* "tan" */,-26 , 14/* "tanh" */,-26 , 17/* "atan" */,-26 , 20/* "atanh" */,-26 , 21/* "sec" */,-26 , 23/* "sech" */,-26 , 22/* "asec" */,-26 , 24/* "asech" */,-26 , 25/* "csc" */,-26 , 27/* "csch" */,-26 , 26/* "acsc" */,-26 , 28/* "acsch" */,-26 , 29/* "cot" */,-26 , 31/* "coth" */,-26 , 30/* "acot" */,-26 , 32/* "acoth" */,-26 , 33/* "sqrt" */,-26 , 34/* "exp" */,-26 , 35/* "log" */,-26 , 39/* ")" */,-26 , 3/* "," */,-26 ),
    /* State 13 */ new Array( 59/* "$" */,-27 , 36/* "where" */,-27 , 5/* "-" */,-27 , 4/* "+" */,-27 , 6/* "*" */,-27 , 7/* "/" */,-27 , 8/* "^" */,-27 , 40/* "pi" */,-27 , 41/* "infinity" */,-27 , 42/* "IDENTIFIER" */,-27 , 43/* "INT" */,-27 , 44/* "FLOAT" */,-27 , 38/* "(" */,-27 , 9/* "sin" */,-27 , 12/* "sinh" */,-27 , 15/* "asin" */,-27 , 18/* "asinh" */,-27 , 10/* "cos" */,-27 , 13/* "cosh" */,-27 , 16/* "acos" */,-27 , 19/* "acosh" */,-27 , 11/* "tan" */,-27 , 14/* "tanh" */,-27 , 17/* "atan" */,-27 , 20/* "atanh" */,-27 , 21/* "sec" */,-27 , 23/* "sech" */,-27 , 22/* "asec" */,-27 , 24/* "asech" */,-27 , 25/* "csc" */,-27 , 27/* "csch" */,-27 , 26/* "acsc" */,-27 , 28/* "acsch" */,-27 , 29/* "cot" */,-27 , 31/* "coth" */,-27 , 30/* "acot" */,-27 , 32/* "acoth" */,-27 , 33/* "sqrt" */,-27 , 34/* "exp" */,-27 , 35/* "log" */,-27 , 39/* ")" */,-27 , 3/* "," */,-27 ),
    /* State 14 */ new Array( 59/* "$" */,-28 , 36/* "where" */,-28 , 5/* "-" */,-28 , 4/* "+" */,-28 , 6/* "*" */,-28 , 7/* "/" */,-28 , 8/* "^" */,-28 , 40/* "pi" */,-28 , 41/* "infinity" */,-28 , 42/* "IDENTIFIER" */,-28 , 43/* "INT" */,-28 , 44/* "FLOAT" */,-28 , 38/* "(" */,-28 , 9/* "sin" */,-28 , 12/* "sinh" */,-28 , 15/* "asin" */,-28 , 18/* "asinh" */,-28 , 10/* "cos" */,-28 , 13/* "cosh" */,-28 , 16/* "acos" */,-28 , 19/* "acosh" */,-28 , 11/* "tan" */,-28 , 14/* "tanh" */,-28 , 17/* "atan" */,-28 , 20/* "atanh" */,-28 , 21/* "sec" */,-28 , 23/* "sech" */,-28 , 22/* "asec" */,-28 , 24/* "asech" */,-28 , 25/* "csc" */,-28 , 27/* "csch" */,-28 , 26/* "acsc" */,-28 , 28/* "acsch" */,-28 , 29/* "cot" */,-28 , 31/* "coth" */,-28 , 30/* "acot" */,-28 , 32/* "acoth" */,-28 , 33/* "sqrt" */,-28 , 34/* "exp" */,-28 , 35/* "log" */,-28 , 39/* ")" */,-28 , 3/* "," */,-28 ),
    /* State 15 */ new Array( 59/* "$" */,-29 , 36/* "where" */,-29 , 5/* "-" */,-29 , 4/* "+" */,-29 , 6/* "*" */,-29 , 7/* "/" */,-29 , 8/* "^" */,-29 , 40/* "pi" */,-29 , 41/* "infinity" */,-29 , 42/* "IDENTIFIER" */,-29 , 43/* "INT" */,-29 , 44/* "FLOAT" */,-29 , 38/* "(" */,-29 , 9/* "sin" */,-29 , 12/* "sinh" */,-29 , 15/* "asin" */,-29 , 18/* "asinh" */,-29 , 10/* "cos" */,-29 , 13/* "cosh" */,-29 , 16/* "acos" */,-29 , 19/* "acosh" */,-29 , 11/* "tan" */,-29 , 14/* "tanh" */,-29 , 17/* "atan" */,-29 , 20/* "atanh" */,-29 , 21/* "sec" */,-29 , 23/* "sech" */,-29 , 22/* "asec" */,-29 , 24/* "asech" */,-29 , 25/* "csc" */,-29 , 27/* "csch" */,-29 , 26/* "acsc" */,-29 , 28/* "acsch" */,-29 , 29/* "cot" */,-29 , 31/* "coth" */,-29 , 30/* "acot" */,-29 , 32/* "acoth" */,-29 , 33/* "sqrt" */,-29 , 34/* "exp" */,-29 , 35/* "log" */,-29 , 39/* ")" */,-29 , 3/* "," */,-29 ),
    /* State 16 */ new Array( 59/* "$" */,-30 , 36/* "where" */,-30 , 5/* "-" */,-30 , 4/* "+" */,-30 , 6/* "*" */,-30 , 7/* "/" */,-30 , 8/* "^" */,-30 , 40/* "pi" */,-30 , 41/* "infinity" */,-30 , 42/* "IDENTIFIER" */,-30 , 43/* "INT" */,-30 , 44/* "FLOAT" */,-30 , 38/* "(" */,-30 , 9/* "sin" */,-30 , 12/* "sinh" */,-30 , 15/* "asin" */,-30 , 18/* "asinh" */,-30 , 10/* "cos" */,-30 , 13/* "cosh" */,-30 , 16/* "acos" */,-30 , 19/* "acosh" */,-30 , 11/* "tan" */,-30 , 14/* "tanh" */,-30 , 17/* "atan" */,-30 , 20/* "atanh" */,-30 , 21/* "sec" */,-30 , 23/* "sech" */,-30 , 22/* "asec" */,-30 , 24/* "asech" */,-30 , 25/* "csc" */,-30 , 27/* "csch" */,-30 , 26/* "acsc" */,-30 , 28/* "acsch" */,-30 , 29/* "cot" */,-30 , 31/* "coth" */,-30 , 30/* "acot" */,-30 , 32/* "acoth" */,-30 , 33/* "sqrt" */,-30 , 34/* "exp" */,-30 , 35/* "log" */,-30 , 39/* ")" */,-30 , 3/* "," */,-30 ),
    /* State 17 */ new Array( 59/* "$" */,-31 , 36/* "where" */,-31 , 5/* "-" */,-31 , 4/* "+" */,-31 , 6/* "*" */,-31 , 7/* "/" */,-31 , 8/* "^" */,-31 , 40/* "pi" */,-31 , 41/* "infinity" */,-31 , 42/* "IDENTIFIER" */,-31 , 43/* "INT" */,-31 , 44/* "FLOAT" */,-31 , 38/* "(" */,-31 , 9/* "sin" */,-31 , 12/* "sinh" */,-31 , 15/* "asin" */,-31 , 18/* "asinh" */,-31 , 10/* "cos" */,-31 , 13/* "cosh" */,-31 , 16/* "acos" */,-31 , 19/* "acosh" */,-31 , 11/* "tan" */,-31 , 14/* "tanh" */,-31 , 17/* "atan" */,-31 , 20/* "atanh" */,-31 , 21/* "sec" */,-31 , 23/* "sech" */,-31 , 22/* "asec" */,-31 , 24/* "asech" */,-31 , 25/* "csc" */,-31 , 27/* "csch" */,-31 , 26/* "acsc" */,-31 , 28/* "acsch" */,-31 , 29/* "cot" */,-31 , 31/* "coth" */,-31 , 30/* "acot" */,-31 , 32/* "acoth" */,-31 , 33/* "sqrt" */,-31 , 34/* "exp" */,-31 , 35/* "log" */,-31 , 39/* ")" */,-31 , 3/* "," */,-31 ),
    /* State 18 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 19 */ new Array( 38/* "(" */,58 ),
    /* State 20 */ new Array( 38/* "(" */,59 ),
    /* State 21 */ new Array( 38/* "(" */,60 ),
    /* State 22 */ new Array( 38/* "(" */,61 ),
    /* State 23 */ new Array( 38/* "(" */,62 ),
    /* State 24 */ new Array( 38/* "(" */,63 ),
    /* State 25 */ new Array( 38/* "(" */,64 ),
    /* State 26 */ new Array( 38/* "(" */,65 ),
    /* State 27 */ new Array( 38/* "(" */,66 ),
    /* State 28 */ new Array( 38/* "(" */,67 ),
    /* State 29 */ new Array( 38/* "(" */,68 ),
    /* State 30 */ new Array( 38/* "(" */,69 ),
    /* State 31 */ new Array( 38/* "(" */,70 ),
    /* State 32 */ new Array( 38/* "(" */,71 ),
    /* State 33 */ new Array( 38/* "(" */,72 ),
    /* State 34 */ new Array( 38/* "(" */,73 ),
    /* State 35 */ new Array( 38/* "(" */,74 ),
    /* State 36 */ new Array( 38/* "(" */,75 ),
    /* State 37 */ new Array( 38/* "(" */,76 ),
    /* State 38 */ new Array( 38/* "(" */,77 ),
    /* State 39 */ new Array( 38/* "(" */,78 ),
    /* State 40 */ new Array( 38/* "(" */,79 ),
    /* State 41 */ new Array( 38/* "(" */,80 ),
    /* State 42 */ new Array( 38/* "(" */,81 ),
    /* State 43 */ new Array( 38/* "(" */,82 ),
    /* State 44 */ new Array( 38/* "(" */,83 ),
    /* State 45 */ new Array( 38/* "(" */,85 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 ),
    /* State 46 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 47 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 48 */ new Array( 42/* "IDENTIFIER" */,90 ),
    /* State 49 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 36/* "where" */,91 ),
    /* State 50 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 51 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 52 */ new Array( 7/* "/" */,94 , 40/* "pi" */,-15 , 41/* "infinity" */,-15 , 42/* "IDENTIFIER" */,-15 , 43/* "INT" */,-15 , 44/* "FLOAT" */,-15 , 38/* "(" */,-15 , 9/* "sin" */,-15 , 12/* "sinh" */,-15 , 15/* "asin" */,-15 , 18/* "asinh" */,-15 , 10/* "cos" */,-15 , 13/* "cosh" */,-15 , 16/* "acos" */,-15 , 19/* "acosh" */,-15 , 11/* "tan" */,-15 , 14/* "tanh" */,-15 , 17/* "atan" */,-15 , 20/* "atanh" */,-15 , 21/* "sec" */,-15 , 23/* "sech" */,-15 , 22/* "asec" */,-15 , 24/* "asech" */,-15 , 25/* "csc" */,-15 , 27/* "csch" */,-15 , 26/* "acsc" */,-15 , 28/* "acsch" */,-15 , 29/* "cot" */,-15 , 31/* "coth" */,-15 , 30/* "acot" */,-15 , 32/* "acoth" */,-15 , 33/* "sqrt" */,-15 , 34/* "exp" */,-15 , 35/* "log" */,-15 , 59/* "$" */,-12 , 36/* "where" */,-12 , 5/* "-" */,-12 , 4/* "+" */,-12 , 6/* "*" */,-12 , 39/* ")" */,-12 , 3/* "," */,-12 ),
    /* State 53 */ new Array( 8/* "^" */,95 , 59/* "$" */,-18 , 36/* "where" */,-18 , 5/* "-" */,-18 , 4/* "+" */,-18 , 6/* "*" */,-18 , 40/* "pi" */,-18 , 41/* "infinity" */,-18 , 42/* "IDENTIFIER" */,-18 , 43/* "INT" */,-18 , 44/* "FLOAT" */,-18 , 38/* "(" */,-18 , 9/* "sin" */,-18 , 12/* "sinh" */,-18 , 15/* "asin" */,-18 , 18/* "asinh" */,-18 , 10/* "cos" */,-18 , 13/* "cosh" */,-18 , 16/* "acos" */,-18 , 19/* "acosh" */,-18 , 11/* "tan" */,-18 , 14/* "tanh" */,-18 , 17/* "atan" */,-18 , 20/* "atanh" */,-18 , 21/* "sec" */,-18 , 23/* "sech" */,-18 , 22/* "asec" */,-18 , 24/* "asech" */,-18 , 25/* "csc" */,-18 , 27/* "csch" */,-18 , 26/* "acsc" */,-18 , 28/* "acsch" */,-18 , 29/* "cot" */,-18 , 31/* "coth" */,-18 , 30/* "acot" */,-18 , 32/* "acoth" */,-18 , 33/* "sqrt" */,-18 , 34/* "exp" */,-18 , 35/* "log" */,-18 , 7/* "/" */,-18 , 39/* ")" */,-18 , 3/* "," */,-18 ),
    /* State 54 */ new Array( 59/* "$" */,-22 , 36/* "where" */,-22 , 5/* "-" */,-22 , 4/* "+" */,-22 , 6/* "*" */,-22 , 40/* "pi" */,-22 , 41/* "infinity" */,-22 , 42/* "IDENTIFIER" */,-22 , 43/* "INT" */,-22 , 44/* "FLOAT" */,-22 , 38/* "(" */,-22 , 9/* "sin" */,-22 , 12/* "sinh" */,-22 , 15/* "asin" */,-22 , 18/* "asinh" */,-22 , 10/* "cos" */,-22 , 13/* "cosh" */,-22 , 16/* "acos" */,-22 , 19/* "acosh" */,-22 , 11/* "tan" */,-22 , 14/* "tanh" */,-22 , 17/* "atan" */,-22 , 20/* "atanh" */,-22 , 21/* "sec" */,-22 , 23/* "sech" */,-22 , 22/* "asec" */,-22 , 24/* "asech" */,-22 , 25/* "csc" */,-22 , 27/* "csch" */,-22 , 26/* "acsc" */,-22 , 28/* "acsch" */,-22 , 29/* "cot" */,-22 , 31/* "coth" */,-22 , 30/* "acot" */,-22 , 32/* "acoth" */,-22 , 33/* "sqrt" */,-22 , 34/* "exp" */,-22 , 35/* "log" */,-22 , 7/* "/" */,-22 , 8/* "^" */,-22 , 39/* ")" */,-22 , 3/* "," */,-22 ),
    /* State 55 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 56 */ new Array( 59/* "$" */,-23 , 36/* "where" */,-23 , 5/* "-" */,-23 , 4/* "+" */,-23 , 6/* "*" */,-23 , 7/* "/" */,-23 , 8/* "^" */,-23 , 40/* "pi" */,-23 , 41/* "infinity" */,-23 , 42/* "IDENTIFIER" */,-23 , 43/* "INT" */,-23 , 44/* "FLOAT" */,-23 , 38/* "(" */,-23 , 9/* "sin" */,-23 , 12/* "sinh" */,-23 , 15/* "asin" */,-23 , 18/* "asinh" */,-23 , 10/* "cos" */,-23 , 13/* "cosh" */,-23 , 16/* "acos" */,-23 , 19/* "acosh" */,-23 , 11/* "tan" */,-23 , 14/* "tanh" */,-23 , 17/* "atan" */,-23 , 20/* "atanh" */,-23 , 21/* "sec" */,-23 , 23/* "sech" */,-23 , 22/* "asec" */,-23 , 24/* "asech" */,-23 , 25/* "csc" */,-23 , 27/* "csch" */,-23 , 26/* "acsc" */,-23 , 28/* "acsch" */,-23 , 29/* "cot" */,-23 , 31/* "coth" */,-23 , 30/* "acot" */,-23 , 32/* "acoth" */,-23 , 33/* "sqrt" */,-23 , 34/* "exp" */,-23 , 35/* "log" */,-23 , 39/* ")" */,-23 , 3/* "," */,-23 ),
    /* State 57 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,97 ),
    /* State 58 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 59 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 60 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 61 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 62 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 63 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 64 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 65 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 66 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 67 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 68 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 69 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 70 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 71 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 72 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 73 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 74 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 75 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 76 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 77 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 78 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 79 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 80 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 81 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 82 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 83 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 84 */ new Array( 38/* "(" */,124 ),
    /* State 85 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 86 */ new Array( 6/* "*" */,50 , 59/* "$" */,-5 , 36/* "where" */,-5 , 5/* "-" */,-5 , 4/* "+" */,-5 , 39/* ")" */,-5 , 3/* "," */,-5 ),
    /* State 87 */ new Array( 6/* "*" */,50 , 59/* "$" */,-4 , 36/* "where" */,-4 , 5/* "-" */,-4 , 4/* "+" */,-4 , 39/* ")" */,-4 , 3/* "," */,-4 ),
    /* State 88 */ new Array( 3/* "," */,126 , 59/* "$" */,-2 ),
    /* State 89 */ new Array( 59/* "$" */,-8 , 3/* "," */,-8 ),
    /* State 90 */ new Array( 2/* "=" */,127 ),
    /* State 91 */ new Array( 42/* "IDENTIFIER" */,90 ),
    /* State 92 */ new Array( 7/* "/" */,51 , 59/* "$" */,-10 , 36/* "where" */,-10 , 5/* "-" */,-10 , 4/* "+" */,-10 , 6/* "*" */,-10 , 39/* ")" */,-10 , 3/* "," */,-10 ),
    /* State 93 */ new Array( 8/* "^" */,55 , 59/* "$" */,-13 , 36/* "where" */,-13 , 5/* "-" */,-13 , 4/* "+" */,-13 , 6/* "*" */,-13 , 7/* "/" */,-13 , 40/* "pi" */,-13 , 41/* "infinity" */,-13 , 42/* "IDENTIFIER" */,-13 , 43/* "INT" */,-13 , 44/* "FLOAT" */,-13 , 38/* "(" */,-13 , 9/* "sin" */,-13 , 12/* "sinh" */,-13 , 15/* "asin" */,-13 , 18/* "asinh" */,-13 , 10/* "cos" */,-13 , 13/* "cosh" */,-13 , 16/* "acos" */,-13 , 19/* "acosh" */,-13 , 11/* "tan" */,-13 , 14/* "tanh" */,-13 , 17/* "atan" */,-13 , 20/* "atanh" */,-13 , 21/* "sec" */,-13 , 23/* "sech" */,-13 , 22/* "asec" */,-13 , 24/* "asech" */,-13 , 25/* "csc" */,-13 , 27/* "csch" */,-13 , 26/* "acsc" */,-13 , 28/* "acsch" */,-13 , 29/* "cot" */,-13 , 31/* "coth" */,-13 , 30/* "acot" */,-13 , 32/* "acoth" */,-13 , 33/* "sqrt" */,-13 , 34/* "exp" */,-13 , 35/* "log" */,-13 , 39/* ")" */,-13 , 3/* "," */,-13 ),
    /* State 94 */ new Array( 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 95 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 96 */ new Array( 59/* "$" */,-19 , 36/* "where" */,-19 , 5/* "-" */,-19 , 4/* "+" */,-19 , 6/* "*" */,-19 , 7/* "/" */,-19 , 8/* "^" */,-19 , 40/* "pi" */,-19 , 41/* "infinity" */,-19 , 42/* "IDENTIFIER" */,-19 , 43/* "INT" */,-19 , 44/* "FLOAT" */,-19 , 38/* "(" */,-19 , 9/* "sin" */,-19 , 12/* "sinh" */,-19 , 15/* "asin" */,-19 , 18/* "asinh" */,-19 , 10/* "cos" */,-19 , 13/* "cosh" */,-19 , 16/* "acos" */,-19 , 19/* "acosh" */,-19 , 11/* "tan" */,-19 , 14/* "tanh" */,-19 , 17/* "atan" */,-19 , 20/* "atanh" */,-19 , 21/* "sec" */,-19 , 23/* "sech" */,-19 , 22/* "asec" */,-19 , 24/* "asech" */,-19 , 25/* "csc" */,-19 , 27/* "csch" */,-19 , 26/* "acsc" */,-19 , 28/* "acsch" */,-19 , 29/* "cot" */,-19 , 31/* "coth" */,-19 , 30/* "acot" */,-19 , 32/* "acoth" */,-19 , 33/* "sqrt" */,-19 , 34/* "exp" */,-19 , 35/* "log" */,-19 , 39/* ")" */,-19 , 3/* "," */,-19 ),
    /* State 97 */ new Array( 59/* "$" */,-32 , 36/* "where" */,-32 , 5/* "-" */,-32 , 4/* "+" */,-32 , 6/* "*" */,-32 , 7/* "/" */,-32 , 8/* "^" */,-32 , 40/* "pi" */,-32 , 41/* "infinity" */,-32 , 42/* "IDENTIFIER" */,-32 , 43/* "INT" */,-32 , 44/* "FLOAT" */,-32 , 38/* "(" */,-32 , 9/* "sin" */,-32 , 12/* "sinh" */,-32 , 15/* "asin" */,-32 , 18/* "asinh" */,-32 , 10/* "cos" */,-32 , 13/* "cosh" */,-32 , 16/* "acos" */,-32 , 19/* "acosh" */,-32 , 11/* "tan" */,-32 , 14/* "tanh" */,-32 , 17/* "atan" */,-32 , 20/* "atanh" */,-32 , 21/* "sec" */,-32 , 23/* "sech" */,-32 , 22/* "asec" */,-32 , 24/* "asech" */,-32 , 25/* "csc" */,-32 , 27/* "csch" */,-32 , 26/* "acsc" */,-32 , 28/* "acsch" */,-32 , 29/* "cot" */,-32 , 31/* "coth" */,-32 , 30/* "acot" */,-32 , 32/* "acoth" */,-32 , 33/* "sqrt" */,-32 , 34/* "exp" */,-32 , 35/* "log" */,-32 , 39/* ")" */,-32 , 3/* "," */,-32 ),
    /* State 98 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,131 ),
    /* State 99 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,132 ),
    /* State 100 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,133 ),
    /* State 101 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,134 ),
    /* State 102 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,135 ),
    /* State 103 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,136 ),
    /* State 104 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,137 ),
    /* State 105 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,138 ),
    /* State 106 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,139 ),
    /* State 107 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,140 ),
    /* State 108 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,141 ),
    /* State 109 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,142 ),
    /* State 110 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,143 ),
    /* State 111 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,144 ),
    /* State 112 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,145 ),
    /* State 113 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,146 ),
    /* State 114 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,147 ),
    /* State 115 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,148 ),
    /* State 116 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,149 ),
    /* State 117 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,150 ),
    /* State 118 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,151 ),
    /* State 119 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,152 ),
    /* State 120 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,153 ),
    /* State 121 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,154 ),
    /* State 122 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,155 ),
    /* State 123 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,156 ),
    /* State 124 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 125 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,158 ),
    /* State 126 */ new Array( 42/* "IDENTIFIER" */,90 ),
    /* State 127 */ new Array( 5/* "-" */,9 , 40/* "pi" */,12 , 41/* "infinity" */,13 , 42/* "IDENTIFIER" */,14 , 43/* "INT" */,16 , 44/* "FLOAT" */,17 , 38/* "(" */,18 , 9/* "sin" */,19 , 12/* "sinh" */,20 , 15/* "asin" */,21 , 18/* "asinh" */,22 , 10/* "cos" */,23 , 13/* "cosh" */,24 , 16/* "acos" */,25 , 19/* "acosh" */,26 , 11/* "tan" */,27 , 14/* "tanh" */,28 , 17/* "atan" */,29 , 20/* "atanh" */,30 , 21/* "sec" */,31 , 23/* "sech" */,32 , 22/* "asec" */,33 , 24/* "asech" */,34 , 25/* "csc" */,35 , 27/* "csch" */,36 , 26/* "acsc" */,37 , 28/* "acsch" */,38 , 29/* "cot" */,39 , 31/* "coth" */,40 , 30/* "acot" */,41 , 32/* "acoth" */,42 , 33/* "sqrt" */,43 , 34/* "exp" */,44 , 35/* "log" */,45 ),
    /* State 128 */ new Array( 59/* "$" */,-3 ),
    /* State 129 */ new Array( 8/* "^" */,95 , 59/* "$" */,-17 , 36/* "where" */,-17 , 5/* "-" */,-17 , 4/* "+" */,-17 , 6/* "*" */,-17 , 40/* "pi" */,-17 , 41/* "infinity" */,-17 , 42/* "IDENTIFIER" */,-17 , 43/* "INT" */,-17 , 44/* "FLOAT" */,-17 , 38/* "(" */,-17 , 9/* "sin" */,-17 , 12/* "sinh" */,-17 , 15/* "asin" */,-17 , 18/* "asinh" */,-17 , 10/* "cos" */,-17 , 13/* "cosh" */,-17 , 16/* "acos" */,-17 , 19/* "acosh" */,-17 , 11/* "tan" */,-17 , 14/* "tanh" */,-17 , 17/* "atan" */,-17 , 20/* "atanh" */,-17 , 21/* "sec" */,-17 , 23/* "sech" */,-17 , 22/* "asec" */,-17 , 24/* "asech" */,-17 , 25/* "csc" */,-17 , 27/* "csch" */,-17 , 26/* "acsc" */,-17 , 28/* "acsch" */,-17 , 29/* "cot" */,-17 , 31/* "coth" */,-17 , 30/* "acot" */,-17 , 32/* "acoth" */,-17 , 33/* "sqrt" */,-17 , 34/* "exp" */,-17 , 35/* "log" */,-17 , 7/* "/" */,-17 , 39/* ")" */,-17 , 3/* "," */,-17 ),
    /* State 130 */ new Array( 59/* "$" */,-21 , 36/* "where" */,-21 , 5/* "-" */,-21 , 4/* "+" */,-21 , 6/* "*" */,-21 , 40/* "pi" */,-21 , 41/* "infinity" */,-21 , 42/* "IDENTIFIER" */,-21 , 43/* "INT" */,-21 , 44/* "FLOAT" */,-21 , 38/* "(" */,-21 , 9/* "sin" */,-21 , 12/* "sinh" */,-21 , 15/* "asin" */,-21 , 18/* "asinh" */,-21 , 10/* "cos" */,-21 , 13/* "cosh" */,-21 , 16/* "acos" */,-21 , 19/* "acosh" */,-21 , 11/* "tan" */,-21 , 14/* "tanh" */,-21 , 17/* "atan" */,-21 , 20/* "atanh" */,-21 , 21/* "sec" */,-21 , 23/* "sech" */,-21 , 22/* "asec" */,-21 , 24/* "asech" */,-21 , 25/* "csc" */,-21 , 27/* "csch" */,-21 , 26/* "acsc" */,-21 , 28/* "acsch" */,-21 , 29/* "cot" */,-21 , 31/* "coth" */,-21 , 30/* "acot" */,-21 , 32/* "acoth" */,-21 , 33/* "sqrt" */,-21 , 34/* "exp" */,-21 , 35/* "log" */,-21 , 7/* "/" */,-21 , 8/* "^" */,-21 , 39/* ")" */,-21 , 3/* "," */,-21 ),
    /* State 131 */ new Array( 59/* "$" */,-33 , 36/* "where" */,-33 , 5/* "-" */,-33 , 4/* "+" */,-33 , 6/* "*" */,-33 , 7/* "/" */,-33 , 8/* "^" */,-33 , 40/* "pi" */,-33 , 41/* "infinity" */,-33 , 42/* "IDENTIFIER" */,-33 , 43/* "INT" */,-33 , 44/* "FLOAT" */,-33 , 38/* "(" */,-33 , 9/* "sin" */,-33 , 12/* "sinh" */,-33 , 15/* "asin" */,-33 , 18/* "asinh" */,-33 , 10/* "cos" */,-33 , 13/* "cosh" */,-33 , 16/* "acos" */,-33 , 19/* "acosh" */,-33 , 11/* "tan" */,-33 , 14/* "tanh" */,-33 , 17/* "atan" */,-33 , 20/* "atanh" */,-33 , 21/* "sec" */,-33 , 23/* "sech" */,-33 , 22/* "asec" */,-33 , 24/* "asech" */,-33 , 25/* "csc" */,-33 , 27/* "csch" */,-33 , 26/* "acsc" */,-33 , 28/* "acsch" */,-33 , 29/* "cot" */,-33 , 31/* "coth" */,-33 , 30/* "acot" */,-33 , 32/* "acoth" */,-33 , 33/* "sqrt" */,-33 , 34/* "exp" */,-33 , 35/* "log" */,-33 , 39/* ")" */,-33 , 3/* "," */,-33 ),
    /* State 132 */ new Array( 59/* "$" */,-34 , 36/* "where" */,-34 , 5/* "-" */,-34 , 4/* "+" */,-34 , 6/* "*" */,-34 , 7/* "/" */,-34 , 8/* "^" */,-34 , 40/* "pi" */,-34 , 41/* "infinity" */,-34 , 42/* "IDENTIFIER" */,-34 , 43/* "INT" */,-34 , 44/* "FLOAT" */,-34 , 38/* "(" */,-34 , 9/* "sin" */,-34 , 12/* "sinh" */,-34 , 15/* "asin" */,-34 , 18/* "asinh" */,-34 , 10/* "cos" */,-34 , 13/* "cosh" */,-34 , 16/* "acos" */,-34 , 19/* "acosh" */,-34 , 11/* "tan" */,-34 , 14/* "tanh" */,-34 , 17/* "atan" */,-34 , 20/* "atanh" */,-34 , 21/* "sec" */,-34 , 23/* "sech" */,-34 , 22/* "asec" */,-34 , 24/* "asech" */,-34 , 25/* "csc" */,-34 , 27/* "csch" */,-34 , 26/* "acsc" */,-34 , 28/* "acsch" */,-34 , 29/* "cot" */,-34 , 31/* "coth" */,-34 , 30/* "acot" */,-34 , 32/* "acoth" */,-34 , 33/* "sqrt" */,-34 , 34/* "exp" */,-34 , 35/* "log" */,-34 , 39/* ")" */,-34 , 3/* "," */,-34 ),
    /* State 133 */ new Array( 59/* "$" */,-35 , 36/* "where" */,-35 , 5/* "-" */,-35 , 4/* "+" */,-35 , 6/* "*" */,-35 , 7/* "/" */,-35 , 8/* "^" */,-35 , 40/* "pi" */,-35 , 41/* "infinity" */,-35 , 42/* "IDENTIFIER" */,-35 , 43/* "INT" */,-35 , 44/* "FLOAT" */,-35 , 38/* "(" */,-35 , 9/* "sin" */,-35 , 12/* "sinh" */,-35 , 15/* "asin" */,-35 , 18/* "asinh" */,-35 , 10/* "cos" */,-35 , 13/* "cosh" */,-35 , 16/* "acos" */,-35 , 19/* "acosh" */,-35 , 11/* "tan" */,-35 , 14/* "tanh" */,-35 , 17/* "atan" */,-35 , 20/* "atanh" */,-35 , 21/* "sec" */,-35 , 23/* "sech" */,-35 , 22/* "asec" */,-35 , 24/* "asech" */,-35 , 25/* "csc" */,-35 , 27/* "csch" */,-35 , 26/* "acsc" */,-35 , 28/* "acsch" */,-35 , 29/* "cot" */,-35 , 31/* "coth" */,-35 , 30/* "acot" */,-35 , 32/* "acoth" */,-35 , 33/* "sqrt" */,-35 , 34/* "exp" */,-35 , 35/* "log" */,-35 , 39/* ")" */,-35 , 3/* "," */,-35 ),
    /* State 134 */ new Array( 59/* "$" */,-36 , 36/* "where" */,-36 , 5/* "-" */,-36 , 4/* "+" */,-36 , 6/* "*" */,-36 , 7/* "/" */,-36 , 8/* "^" */,-36 , 40/* "pi" */,-36 , 41/* "infinity" */,-36 , 42/* "IDENTIFIER" */,-36 , 43/* "INT" */,-36 , 44/* "FLOAT" */,-36 , 38/* "(" */,-36 , 9/* "sin" */,-36 , 12/* "sinh" */,-36 , 15/* "asin" */,-36 , 18/* "asinh" */,-36 , 10/* "cos" */,-36 , 13/* "cosh" */,-36 , 16/* "acos" */,-36 , 19/* "acosh" */,-36 , 11/* "tan" */,-36 , 14/* "tanh" */,-36 , 17/* "atan" */,-36 , 20/* "atanh" */,-36 , 21/* "sec" */,-36 , 23/* "sech" */,-36 , 22/* "asec" */,-36 , 24/* "asech" */,-36 , 25/* "csc" */,-36 , 27/* "csch" */,-36 , 26/* "acsc" */,-36 , 28/* "acsch" */,-36 , 29/* "cot" */,-36 , 31/* "coth" */,-36 , 30/* "acot" */,-36 , 32/* "acoth" */,-36 , 33/* "sqrt" */,-36 , 34/* "exp" */,-36 , 35/* "log" */,-36 , 39/* ")" */,-36 , 3/* "," */,-36 ),
    /* State 135 */ new Array( 59/* "$" */,-37 , 36/* "where" */,-37 , 5/* "-" */,-37 , 4/* "+" */,-37 , 6/* "*" */,-37 , 7/* "/" */,-37 , 8/* "^" */,-37 , 40/* "pi" */,-37 , 41/* "infinity" */,-37 , 42/* "IDENTIFIER" */,-37 , 43/* "INT" */,-37 , 44/* "FLOAT" */,-37 , 38/* "(" */,-37 , 9/* "sin" */,-37 , 12/* "sinh" */,-37 , 15/* "asin" */,-37 , 18/* "asinh" */,-37 , 10/* "cos" */,-37 , 13/* "cosh" */,-37 , 16/* "acos" */,-37 , 19/* "acosh" */,-37 , 11/* "tan" */,-37 , 14/* "tanh" */,-37 , 17/* "atan" */,-37 , 20/* "atanh" */,-37 , 21/* "sec" */,-37 , 23/* "sech" */,-37 , 22/* "asec" */,-37 , 24/* "asech" */,-37 , 25/* "csc" */,-37 , 27/* "csch" */,-37 , 26/* "acsc" */,-37 , 28/* "acsch" */,-37 , 29/* "cot" */,-37 , 31/* "coth" */,-37 , 30/* "acot" */,-37 , 32/* "acoth" */,-37 , 33/* "sqrt" */,-37 , 34/* "exp" */,-37 , 35/* "log" */,-37 , 39/* ")" */,-37 , 3/* "," */,-37 ),
    /* State 136 */ new Array( 59/* "$" */,-38 , 36/* "where" */,-38 , 5/* "-" */,-38 , 4/* "+" */,-38 , 6/* "*" */,-38 , 7/* "/" */,-38 , 8/* "^" */,-38 , 40/* "pi" */,-38 , 41/* "infinity" */,-38 , 42/* "IDENTIFIER" */,-38 , 43/* "INT" */,-38 , 44/* "FLOAT" */,-38 , 38/* "(" */,-38 , 9/* "sin" */,-38 , 12/* "sinh" */,-38 , 15/* "asin" */,-38 , 18/* "asinh" */,-38 , 10/* "cos" */,-38 , 13/* "cosh" */,-38 , 16/* "acos" */,-38 , 19/* "acosh" */,-38 , 11/* "tan" */,-38 , 14/* "tanh" */,-38 , 17/* "atan" */,-38 , 20/* "atanh" */,-38 , 21/* "sec" */,-38 , 23/* "sech" */,-38 , 22/* "asec" */,-38 , 24/* "asech" */,-38 , 25/* "csc" */,-38 , 27/* "csch" */,-38 , 26/* "acsc" */,-38 , 28/* "acsch" */,-38 , 29/* "cot" */,-38 , 31/* "coth" */,-38 , 30/* "acot" */,-38 , 32/* "acoth" */,-38 , 33/* "sqrt" */,-38 , 34/* "exp" */,-38 , 35/* "log" */,-38 , 39/* ")" */,-38 , 3/* "," */,-38 ),
    /* State 137 */ new Array( 59/* "$" */,-39 , 36/* "where" */,-39 , 5/* "-" */,-39 , 4/* "+" */,-39 , 6/* "*" */,-39 , 7/* "/" */,-39 , 8/* "^" */,-39 , 40/* "pi" */,-39 , 41/* "infinity" */,-39 , 42/* "IDENTIFIER" */,-39 , 43/* "INT" */,-39 , 44/* "FLOAT" */,-39 , 38/* "(" */,-39 , 9/* "sin" */,-39 , 12/* "sinh" */,-39 , 15/* "asin" */,-39 , 18/* "asinh" */,-39 , 10/* "cos" */,-39 , 13/* "cosh" */,-39 , 16/* "acos" */,-39 , 19/* "acosh" */,-39 , 11/* "tan" */,-39 , 14/* "tanh" */,-39 , 17/* "atan" */,-39 , 20/* "atanh" */,-39 , 21/* "sec" */,-39 , 23/* "sech" */,-39 , 22/* "asec" */,-39 , 24/* "asech" */,-39 , 25/* "csc" */,-39 , 27/* "csch" */,-39 , 26/* "acsc" */,-39 , 28/* "acsch" */,-39 , 29/* "cot" */,-39 , 31/* "coth" */,-39 , 30/* "acot" */,-39 , 32/* "acoth" */,-39 , 33/* "sqrt" */,-39 , 34/* "exp" */,-39 , 35/* "log" */,-39 , 39/* ")" */,-39 , 3/* "," */,-39 ),
    /* State 138 */ new Array( 59/* "$" */,-40 , 36/* "where" */,-40 , 5/* "-" */,-40 , 4/* "+" */,-40 , 6/* "*" */,-40 , 7/* "/" */,-40 , 8/* "^" */,-40 , 40/* "pi" */,-40 , 41/* "infinity" */,-40 , 42/* "IDENTIFIER" */,-40 , 43/* "INT" */,-40 , 44/* "FLOAT" */,-40 , 38/* "(" */,-40 , 9/* "sin" */,-40 , 12/* "sinh" */,-40 , 15/* "asin" */,-40 , 18/* "asinh" */,-40 , 10/* "cos" */,-40 , 13/* "cosh" */,-40 , 16/* "acos" */,-40 , 19/* "acosh" */,-40 , 11/* "tan" */,-40 , 14/* "tanh" */,-40 , 17/* "atan" */,-40 , 20/* "atanh" */,-40 , 21/* "sec" */,-40 , 23/* "sech" */,-40 , 22/* "asec" */,-40 , 24/* "asech" */,-40 , 25/* "csc" */,-40 , 27/* "csch" */,-40 , 26/* "acsc" */,-40 , 28/* "acsch" */,-40 , 29/* "cot" */,-40 , 31/* "coth" */,-40 , 30/* "acot" */,-40 , 32/* "acoth" */,-40 , 33/* "sqrt" */,-40 , 34/* "exp" */,-40 , 35/* "log" */,-40 , 39/* ")" */,-40 , 3/* "," */,-40 ),
    /* State 139 */ new Array( 59/* "$" */,-41 , 36/* "where" */,-41 , 5/* "-" */,-41 , 4/* "+" */,-41 , 6/* "*" */,-41 , 7/* "/" */,-41 , 8/* "^" */,-41 , 40/* "pi" */,-41 , 41/* "infinity" */,-41 , 42/* "IDENTIFIER" */,-41 , 43/* "INT" */,-41 , 44/* "FLOAT" */,-41 , 38/* "(" */,-41 , 9/* "sin" */,-41 , 12/* "sinh" */,-41 , 15/* "asin" */,-41 , 18/* "asinh" */,-41 , 10/* "cos" */,-41 , 13/* "cosh" */,-41 , 16/* "acos" */,-41 , 19/* "acosh" */,-41 , 11/* "tan" */,-41 , 14/* "tanh" */,-41 , 17/* "atan" */,-41 , 20/* "atanh" */,-41 , 21/* "sec" */,-41 , 23/* "sech" */,-41 , 22/* "asec" */,-41 , 24/* "asech" */,-41 , 25/* "csc" */,-41 , 27/* "csch" */,-41 , 26/* "acsc" */,-41 , 28/* "acsch" */,-41 , 29/* "cot" */,-41 , 31/* "coth" */,-41 , 30/* "acot" */,-41 , 32/* "acoth" */,-41 , 33/* "sqrt" */,-41 , 34/* "exp" */,-41 , 35/* "log" */,-41 , 39/* ")" */,-41 , 3/* "," */,-41 ),
    /* State 140 */ new Array( 59/* "$" */,-42 , 36/* "where" */,-42 , 5/* "-" */,-42 , 4/* "+" */,-42 , 6/* "*" */,-42 , 7/* "/" */,-42 , 8/* "^" */,-42 , 40/* "pi" */,-42 , 41/* "infinity" */,-42 , 42/* "IDENTIFIER" */,-42 , 43/* "INT" */,-42 , 44/* "FLOAT" */,-42 , 38/* "(" */,-42 , 9/* "sin" */,-42 , 12/* "sinh" */,-42 , 15/* "asin" */,-42 , 18/* "asinh" */,-42 , 10/* "cos" */,-42 , 13/* "cosh" */,-42 , 16/* "acos" */,-42 , 19/* "acosh" */,-42 , 11/* "tan" */,-42 , 14/* "tanh" */,-42 , 17/* "atan" */,-42 , 20/* "atanh" */,-42 , 21/* "sec" */,-42 , 23/* "sech" */,-42 , 22/* "asec" */,-42 , 24/* "asech" */,-42 , 25/* "csc" */,-42 , 27/* "csch" */,-42 , 26/* "acsc" */,-42 , 28/* "acsch" */,-42 , 29/* "cot" */,-42 , 31/* "coth" */,-42 , 30/* "acot" */,-42 , 32/* "acoth" */,-42 , 33/* "sqrt" */,-42 , 34/* "exp" */,-42 , 35/* "log" */,-42 , 39/* ")" */,-42 , 3/* "," */,-42 ),
    /* State 141 */ new Array( 59/* "$" */,-43 , 36/* "where" */,-43 , 5/* "-" */,-43 , 4/* "+" */,-43 , 6/* "*" */,-43 , 7/* "/" */,-43 , 8/* "^" */,-43 , 40/* "pi" */,-43 , 41/* "infinity" */,-43 , 42/* "IDENTIFIER" */,-43 , 43/* "INT" */,-43 , 44/* "FLOAT" */,-43 , 38/* "(" */,-43 , 9/* "sin" */,-43 , 12/* "sinh" */,-43 , 15/* "asin" */,-43 , 18/* "asinh" */,-43 , 10/* "cos" */,-43 , 13/* "cosh" */,-43 , 16/* "acos" */,-43 , 19/* "acosh" */,-43 , 11/* "tan" */,-43 , 14/* "tanh" */,-43 , 17/* "atan" */,-43 , 20/* "atanh" */,-43 , 21/* "sec" */,-43 , 23/* "sech" */,-43 , 22/* "asec" */,-43 , 24/* "asech" */,-43 , 25/* "csc" */,-43 , 27/* "csch" */,-43 , 26/* "acsc" */,-43 , 28/* "acsch" */,-43 , 29/* "cot" */,-43 , 31/* "coth" */,-43 , 30/* "acot" */,-43 , 32/* "acoth" */,-43 , 33/* "sqrt" */,-43 , 34/* "exp" */,-43 , 35/* "log" */,-43 , 39/* ")" */,-43 , 3/* "," */,-43 ),
    /* State 142 */ new Array( 59/* "$" */,-44 , 36/* "where" */,-44 , 5/* "-" */,-44 , 4/* "+" */,-44 , 6/* "*" */,-44 , 7/* "/" */,-44 , 8/* "^" */,-44 , 40/* "pi" */,-44 , 41/* "infinity" */,-44 , 42/* "IDENTIFIER" */,-44 , 43/* "INT" */,-44 , 44/* "FLOAT" */,-44 , 38/* "(" */,-44 , 9/* "sin" */,-44 , 12/* "sinh" */,-44 , 15/* "asin" */,-44 , 18/* "asinh" */,-44 , 10/* "cos" */,-44 , 13/* "cosh" */,-44 , 16/* "acos" */,-44 , 19/* "acosh" */,-44 , 11/* "tan" */,-44 , 14/* "tanh" */,-44 , 17/* "atan" */,-44 , 20/* "atanh" */,-44 , 21/* "sec" */,-44 , 23/* "sech" */,-44 , 22/* "asec" */,-44 , 24/* "asech" */,-44 , 25/* "csc" */,-44 , 27/* "csch" */,-44 , 26/* "acsc" */,-44 , 28/* "acsch" */,-44 , 29/* "cot" */,-44 , 31/* "coth" */,-44 , 30/* "acot" */,-44 , 32/* "acoth" */,-44 , 33/* "sqrt" */,-44 , 34/* "exp" */,-44 , 35/* "log" */,-44 , 39/* ")" */,-44 , 3/* "," */,-44 ),
    /* State 143 */ new Array( 59/* "$" */,-45 , 36/* "where" */,-45 , 5/* "-" */,-45 , 4/* "+" */,-45 , 6/* "*" */,-45 , 7/* "/" */,-45 , 8/* "^" */,-45 , 40/* "pi" */,-45 , 41/* "infinity" */,-45 , 42/* "IDENTIFIER" */,-45 , 43/* "INT" */,-45 , 44/* "FLOAT" */,-45 , 38/* "(" */,-45 , 9/* "sin" */,-45 , 12/* "sinh" */,-45 , 15/* "asin" */,-45 , 18/* "asinh" */,-45 , 10/* "cos" */,-45 , 13/* "cosh" */,-45 , 16/* "acos" */,-45 , 19/* "acosh" */,-45 , 11/* "tan" */,-45 , 14/* "tanh" */,-45 , 17/* "atan" */,-45 , 20/* "atanh" */,-45 , 21/* "sec" */,-45 , 23/* "sech" */,-45 , 22/* "asec" */,-45 , 24/* "asech" */,-45 , 25/* "csc" */,-45 , 27/* "csch" */,-45 , 26/* "acsc" */,-45 , 28/* "acsch" */,-45 , 29/* "cot" */,-45 , 31/* "coth" */,-45 , 30/* "acot" */,-45 , 32/* "acoth" */,-45 , 33/* "sqrt" */,-45 , 34/* "exp" */,-45 , 35/* "log" */,-45 , 39/* ")" */,-45 , 3/* "," */,-45 ),
    /* State 144 */ new Array( 59/* "$" */,-46 , 36/* "where" */,-46 , 5/* "-" */,-46 , 4/* "+" */,-46 , 6/* "*" */,-46 , 7/* "/" */,-46 , 8/* "^" */,-46 , 40/* "pi" */,-46 , 41/* "infinity" */,-46 , 42/* "IDENTIFIER" */,-46 , 43/* "INT" */,-46 , 44/* "FLOAT" */,-46 , 38/* "(" */,-46 , 9/* "sin" */,-46 , 12/* "sinh" */,-46 , 15/* "asin" */,-46 , 18/* "asinh" */,-46 , 10/* "cos" */,-46 , 13/* "cosh" */,-46 , 16/* "acos" */,-46 , 19/* "acosh" */,-46 , 11/* "tan" */,-46 , 14/* "tanh" */,-46 , 17/* "atan" */,-46 , 20/* "atanh" */,-46 , 21/* "sec" */,-46 , 23/* "sech" */,-46 , 22/* "asec" */,-46 , 24/* "asech" */,-46 , 25/* "csc" */,-46 , 27/* "csch" */,-46 , 26/* "acsc" */,-46 , 28/* "acsch" */,-46 , 29/* "cot" */,-46 , 31/* "coth" */,-46 , 30/* "acot" */,-46 , 32/* "acoth" */,-46 , 33/* "sqrt" */,-46 , 34/* "exp" */,-46 , 35/* "log" */,-46 , 39/* ")" */,-46 , 3/* "," */,-46 ),
    /* State 145 */ new Array( 59/* "$" */,-47 , 36/* "where" */,-47 , 5/* "-" */,-47 , 4/* "+" */,-47 , 6/* "*" */,-47 , 7/* "/" */,-47 , 8/* "^" */,-47 , 40/* "pi" */,-47 , 41/* "infinity" */,-47 , 42/* "IDENTIFIER" */,-47 , 43/* "INT" */,-47 , 44/* "FLOAT" */,-47 , 38/* "(" */,-47 , 9/* "sin" */,-47 , 12/* "sinh" */,-47 , 15/* "asin" */,-47 , 18/* "asinh" */,-47 , 10/* "cos" */,-47 , 13/* "cosh" */,-47 , 16/* "acos" */,-47 , 19/* "acosh" */,-47 , 11/* "tan" */,-47 , 14/* "tanh" */,-47 , 17/* "atan" */,-47 , 20/* "atanh" */,-47 , 21/* "sec" */,-47 , 23/* "sech" */,-47 , 22/* "asec" */,-47 , 24/* "asech" */,-47 , 25/* "csc" */,-47 , 27/* "csch" */,-47 , 26/* "acsc" */,-47 , 28/* "acsch" */,-47 , 29/* "cot" */,-47 , 31/* "coth" */,-47 , 30/* "acot" */,-47 , 32/* "acoth" */,-47 , 33/* "sqrt" */,-47 , 34/* "exp" */,-47 , 35/* "log" */,-47 , 39/* ")" */,-47 , 3/* "," */,-47 ),
    /* State 146 */ new Array( 59/* "$" */,-48 , 36/* "where" */,-48 , 5/* "-" */,-48 , 4/* "+" */,-48 , 6/* "*" */,-48 , 7/* "/" */,-48 , 8/* "^" */,-48 , 40/* "pi" */,-48 , 41/* "infinity" */,-48 , 42/* "IDENTIFIER" */,-48 , 43/* "INT" */,-48 , 44/* "FLOAT" */,-48 , 38/* "(" */,-48 , 9/* "sin" */,-48 , 12/* "sinh" */,-48 , 15/* "asin" */,-48 , 18/* "asinh" */,-48 , 10/* "cos" */,-48 , 13/* "cosh" */,-48 , 16/* "acos" */,-48 , 19/* "acosh" */,-48 , 11/* "tan" */,-48 , 14/* "tanh" */,-48 , 17/* "atan" */,-48 , 20/* "atanh" */,-48 , 21/* "sec" */,-48 , 23/* "sech" */,-48 , 22/* "asec" */,-48 , 24/* "asech" */,-48 , 25/* "csc" */,-48 , 27/* "csch" */,-48 , 26/* "acsc" */,-48 , 28/* "acsch" */,-48 , 29/* "cot" */,-48 , 31/* "coth" */,-48 , 30/* "acot" */,-48 , 32/* "acoth" */,-48 , 33/* "sqrt" */,-48 , 34/* "exp" */,-48 , 35/* "log" */,-48 , 39/* ")" */,-48 , 3/* "," */,-48 ),
    /* State 147 */ new Array( 59/* "$" */,-49 , 36/* "where" */,-49 , 5/* "-" */,-49 , 4/* "+" */,-49 , 6/* "*" */,-49 , 7/* "/" */,-49 , 8/* "^" */,-49 , 40/* "pi" */,-49 , 41/* "infinity" */,-49 , 42/* "IDENTIFIER" */,-49 , 43/* "INT" */,-49 , 44/* "FLOAT" */,-49 , 38/* "(" */,-49 , 9/* "sin" */,-49 , 12/* "sinh" */,-49 , 15/* "asin" */,-49 , 18/* "asinh" */,-49 , 10/* "cos" */,-49 , 13/* "cosh" */,-49 , 16/* "acos" */,-49 , 19/* "acosh" */,-49 , 11/* "tan" */,-49 , 14/* "tanh" */,-49 , 17/* "atan" */,-49 , 20/* "atanh" */,-49 , 21/* "sec" */,-49 , 23/* "sech" */,-49 , 22/* "asec" */,-49 , 24/* "asech" */,-49 , 25/* "csc" */,-49 , 27/* "csch" */,-49 , 26/* "acsc" */,-49 , 28/* "acsch" */,-49 , 29/* "cot" */,-49 , 31/* "coth" */,-49 , 30/* "acot" */,-49 , 32/* "acoth" */,-49 , 33/* "sqrt" */,-49 , 34/* "exp" */,-49 , 35/* "log" */,-49 , 39/* ")" */,-49 , 3/* "," */,-49 ),
    /* State 148 */ new Array( 59/* "$" */,-50 , 36/* "where" */,-50 , 5/* "-" */,-50 , 4/* "+" */,-50 , 6/* "*" */,-50 , 7/* "/" */,-50 , 8/* "^" */,-50 , 40/* "pi" */,-50 , 41/* "infinity" */,-50 , 42/* "IDENTIFIER" */,-50 , 43/* "INT" */,-50 , 44/* "FLOAT" */,-50 , 38/* "(" */,-50 , 9/* "sin" */,-50 , 12/* "sinh" */,-50 , 15/* "asin" */,-50 , 18/* "asinh" */,-50 , 10/* "cos" */,-50 , 13/* "cosh" */,-50 , 16/* "acos" */,-50 , 19/* "acosh" */,-50 , 11/* "tan" */,-50 , 14/* "tanh" */,-50 , 17/* "atan" */,-50 , 20/* "atanh" */,-50 , 21/* "sec" */,-50 , 23/* "sech" */,-50 , 22/* "asec" */,-50 , 24/* "asech" */,-50 , 25/* "csc" */,-50 , 27/* "csch" */,-50 , 26/* "acsc" */,-50 , 28/* "acsch" */,-50 , 29/* "cot" */,-50 , 31/* "coth" */,-50 , 30/* "acot" */,-50 , 32/* "acoth" */,-50 , 33/* "sqrt" */,-50 , 34/* "exp" */,-50 , 35/* "log" */,-50 , 39/* ")" */,-50 , 3/* "," */,-50 ),
    /* State 149 */ new Array( 59/* "$" */,-51 , 36/* "where" */,-51 , 5/* "-" */,-51 , 4/* "+" */,-51 , 6/* "*" */,-51 , 7/* "/" */,-51 , 8/* "^" */,-51 , 40/* "pi" */,-51 , 41/* "infinity" */,-51 , 42/* "IDENTIFIER" */,-51 , 43/* "INT" */,-51 , 44/* "FLOAT" */,-51 , 38/* "(" */,-51 , 9/* "sin" */,-51 , 12/* "sinh" */,-51 , 15/* "asin" */,-51 , 18/* "asinh" */,-51 , 10/* "cos" */,-51 , 13/* "cosh" */,-51 , 16/* "acos" */,-51 , 19/* "acosh" */,-51 , 11/* "tan" */,-51 , 14/* "tanh" */,-51 , 17/* "atan" */,-51 , 20/* "atanh" */,-51 , 21/* "sec" */,-51 , 23/* "sech" */,-51 , 22/* "asec" */,-51 , 24/* "asech" */,-51 , 25/* "csc" */,-51 , 27/* "csch" */,-51 , 26/* "acsc" */,-51 , 28/* "acsch" */,-51 , 29/* "cot" */,-51 , 31/* "coth" */,-51 , 30/* "acot" */,-51 , 32/* "acoth" */,-51 , 33/* "sqrt" */,-51 , 34/* "exp" */,-51 , 35/* "log" */,-51 , 39/* ")" */,-51 , 3/* "," */,-51 ),
    /* State 150 */ new Array( 59/* "$" */,-52 , 36/* "where" */,-52 , 5/* "-" */,-52 , 4/* "+" */,-52 , 6/* "*" */,-52 , 7/* "/" */,-52 , 8/* "^" */,-52 , 40/* "pi" */,-52 , 41/* "infinity" */,-52 , 42/* "IDENTIFIER" */,-52 , 43/* "INT" */,-52 , 44/* "FLOAT" */,-52 , 38/* "(" */,-52 , 9/* "sin" */,-52 , 12/* "sinh" */,-52 , 15/* "asin" */,-52 , 18/* "asinh" */,-52 , 10/* "cos" */,-52 , 13/* "cosh" */,-52 , 16/* "acos" */,-52 , 19/* "acosh" */,-52 , 11/* "tan" */,-52 , 14/* "tanh" */,-52 , 17/* "atan" */,-52 , 20/* "atanh" */,-52 , 21/* "sec" */,-52 , 23/* "sech" */,-52 , 22/* "asec" */,-52 , 24/* "asech" */,-52 , 25/* "csc" */,-52 , 27/* "csch" */,-52 , 26/* "acsc" */,-52 , 28/* "acsch" */,-52 , 29/* "cot" */,-52 , 31/* "coth" */,-52 , 30/* "acot" */,-52 , 32/* "acoth" */,-52 , 33/* "sqrt" */,-52 , 34/* "exp" */,-52 , 35/* "log" */,-52 , 39/* ")" */,-52 , 3/* "," */,-52 ),
    /* State 151 */ new Array( 59/* "$" */,-53 , 36/* "where" */,-53 , 5/* "-" */,-53 , 4/* "+" */,-53 , 6/* "*" */,-53 , 7/* "/" */,-53 , 8/* "^" */,-53 , 40/* "pi" */,-53 , 41/* "infinity" */,-53 , 42/* "IDENTIFIER" */,-53 , 43/* "INT" */,-53 , 44/* "FLOAT" */,-53 , 38/* "(" */,-53 , 9/* "sin" */,-53 , 12/* "sinh" */,-53 , 15/* "asin" */,-53 , 18/* "asinh" */,-53 , 10/* "cos" */,-53 , 13/* "cosh" */,-53 , 16/* "acos" */,-53 , 19/* "acosh" */,-53 , 11/* "tan" */,-53 , 14/* "tanh" */,-53 , 17/* "atan" */,-53 , 20/* "atanh" */,-53 , 21/* "sec" */,-53 , 23/* "sech" */,-53 , 22/* "asec" */,-53 , 24/* "asech" */,-53 , 25/* "csc" */,-53 , 27/* "csch" */,-53 , 26/* "acsc" */,-53 , 28/* "acsch" */,-53 , 29/* "cot" */,-53 , 31/* "coth" */,-53 , 30/* "acot" */,-53 , 32/* "acoth" */,-53 , 33/* "sqrt" */,-53 , 34/* "exp" */,-53 , 35/* "log" */,-53 , 39/* ")" */,-53 , 3/* "," */,-53 ),
    /* State 152 */ new Array( 59/* "$" */,-54 , 36/* "where" */,-54 , 5/* "-" */,-54 , 4/* "+" */,-54 , 6/* "*" */,-54 , 7/* "/" */,-54 , 8/* "^" */,-54 , 40/* "pi" */,-54 , 41/* "infinity" */,-54 , 42/* "IDENTIFIER" */,-54 , 43/* "INT" */,-54 , 44/* "FLOAT" */,-54 , 38/* "(" */,-54 , 9/* "sin" */,-54 , 12/* "sinh" */,-54 , 15/* "asin" */,-54 , 18/* "asinh" */,-54 , 10/* "cos" */,-54 , 13/* "cosh" */,-54 , 16/* "acos" */,-54 , 19/* "acosh" */,-54 , 11/* "tan" */,-54 , 14/* "tanh" */,-54 , 17/* "atan" */,-54 , 20/* "atanh" */,-54 , 21/* "sec" */,-54 , 23/* "sech" */,-54 , 22/* "asec" */,-54 , 24/* "asech" */,-54 , 25/* "csc" */,-54 , 27/* "csch" */,-54 , 26/* "acsc" */,-54 , 28/* "acsch" */,-54 , 29/* "cot" */,-54 , 31/* "coth" */,-54 , 30/* "acot" */,-54 , 32/* "acoth" */,-54 , 33/* "sqrt" */,-54 , 34/* "exp" */,-54 , 35/* "log" */,-54 , 39/* ")" */,-54 , 3/* "," */,-54 ),
    /* State 153 */ new Array( 59/* "$" */,-55 , 36/* "where" */,-55 , 5/* "-" */,-55 , 4/* "+" */,-55 , 6/* "*" */,-55 , 7/* "/" */,-55 , 8/* "^" */,-55 , 40/* "pi" */,-55 , 41/* "infinity" */,-55 , 42/* "IDENTIFIER" */,-55 , 43/* "INT" */,-55 , 44/* "FLOAT" */,-55 , 38/* "(" */,-55 , 9/* "sin" */,-55 , 12/* "sinh" */,-55 , 15/* "asin" */,-55 , 18/* "asinh" */,-55 , 10/* "cos" */,-55 , 13/* "cosh" */,-55 , 16/* "acos" */,-55 , 19/* "acosh" */,-55 , 11/* "tan" */,-55 , 14/* "tanh" */,-55 , 17/* "atan" */,-55 , 20/* "atanh" */,-55 , 21/* "sec" */,-55 , 23/* "sech" */,-55 , 22/* "asec" */,-55 , 24/* "asech" */,-55 , 25/* "csc" */,-55 , 27/* "csch" */,-55 , 26/* "acsc" */,-55 , 28/* "acsch" */,-55 , 29/* "cot" */,-55 , 31/* "coth" */,-55 , 30/* "acot" */,-55 , 32/* "acoth" */,-55 , 33/* "sqrt" */,-55 , 34/* "exp" */,-55 , 35/* "log" */,-55 , 39/* ")" */,-55 , 3/* "," */,-55 ),
    /* State 154 */ new Array( 59/* "$" */,-56 , 36/* "where" */,-56 , 5/* "-" */,-56 , 4/* "+" */,-56 , 6/* "*" */,-56 , 7/* "/" */,-56 , 8/* "^" */,-56 , 40/* "pi" */,-56 , 41/* "infinity" */,-56 , 42/* "IDENTIFIER" */,-56 , 43/* "INT" */,-56 , 44/* "FLOAT" */,-56 , 38/* "(" */,-56 , 9/* "sin" */,-56 , 12/* "sinh" */,-56 , 15/* "asin" */,-56 , 18/* "asinh" */,-56 , 10/* "cos" */,-56 , 13/* "cosh" */,-56 , 16/* "acos" */,-56 , 19/* "acosh" */,-56 , 11/* "tan" */,-56 , 14/* "tanh" */,-56 , 17/* "atan" */,-56 , 20/* "atanh" */,-56 , 21/* "sec" */,-56 , 23/* "sech" */,-56 , 22/* "asec" */,-56 , 24/* "asech" */,-56 , 25/* "csc" */,-56 , 27/* "csch" */,-56 , 26/* "acsc" */,-56 , 28/* "acsch" */,-56 , 29/* "cot" */,-56 , 31/* "coth" */,-56 , 30/* "acot" */,-56 , 32/* "acoth" */,-56 , 33/* "sqrt" */,-56 , 34/* "exp" */,-56 , 35/* "log" */,-56 , 39/* ")" */,-56 , 3/* "," */,-56 ),
    /* State 155 */ new Array( 59/* "$" */,-57 , 36/* "where" */,-57 , 5/* "-" */,-57 , 4/* "+" */,-57 , 6/* "*" */,-57 , 7/* "/" */,-57 , 8/* "^" */,-57 , 40/* "pi" */,-57 , 41/* "infinity" */,-57 , 42/* "IDENTIFIER" */,-57 , 43/* "INT" */,-57 , 44/* "FLOAT" */,-57 , 38/* "(" */,-57 , 9/* "sin" */,-57 , 12/* "sinh" */,-57 , 15/* "asin" */,-57 , 18/* "asinh" */,-57 , 10/* "cos" */,-57 , 13/* "cosh" */,-57 , 16/* "acos" */,-57 , 19/* "acosh" */,-57 , 11/* "tan" */,-57 , 14/* "tanh" */,-57 , 17/* "atan" */,-57 , 20/* "atanh" */,-57 , 21/* "sec" */,-57 , 23/* "sech" */,-57 , 22/* "asec" */,-57 , 24/* "asech" */,-57 , 25/* "csc" */,-57 , 27/* "csch" */,-57 , 26/* "acsc" */,-57 , 28/* "acsch" */,-57 , 29/* "cot" */,-57 , 31/* "coth" */,-57 , 30/* "acot" */,-57 , 32/* "acoth" */,-57 , 33/* "sqrt" */,-57 , 34/* "exp" */,-57 , 35/* "log" */,-57 , 39/* ")" */,-57 , 3/* "," */,-57 ),
    /* State 156 */ new Array( 59/* "$" */,-58 , 36/* "where" */,-58 , 5/* "-" */,-58 , 4/* "+" */,-58 , 6/* "*" */,-58 , 7/* "/" */,-58 , 8/* "^" */,-58 , 40/* "pi" */,-58 , 41/* "infinity" */,-58 , 42/* "IDENTIFIER" */,-58 , 43/* "INT" */,-58 , 44/* "FLOAT" */,-58 , 38/* "(" */,-58 , 9/* "sin" */,-58 , 12/* "sinh" */,-58 , 15/* "asin" */,-58 , 18/* "asinh" */,-58 , 10/* "cos" */,-58 , 13/* "cosh" */,-58 , 16/* "acos" */,-58 , 19/* "acosh" */,-58 , 11/* "tan" */,-58 , 14/* "tanh" */,-58 , 17/* "atan" */,-58 , 20/* "atanh" */,-58 , 21/* "sec" */,-58 , 23/* "sech" */,-58 , 22/* "asec" */,-58 , 24/* "asech" */,-58 , 25/* "csc" */,-58 , 27/* "csch" */,-58 , 26/* "acsc" */,-58 , 28/* "acsch" */,-58 , 29/* "cot" */,-58 , 31/* "coth" */,-58 , 30/* "acot" */,-58 , 32/* "acoth" */,-58 , 33/* "sqrt" */,-58 , 34/* "exp" */,-58 , 35/* "log" */,-58 , 39/* ")" */,-58 , 3/* "," */,-58 ),
    /* State 157 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 39/* ")" */,161 ),
    /* State 158 */ new Array( 59/* "$" */,-59 , 36/* "where" */,-59 , 5/* "-" */,-59 , 4/* "+" */,-59 , 6/* "*" */,-59 , 7/* "/" */,-59 , 8/* "^" */,-59 , 40/* "pi" */,-59 , 41/* "infinity" */,-59 , 42/* "IDENTIFIER" */,-59 , 43/* "INT" */,-59 , 44/* "FLOAT" */,-59 , 38/* "(" */,-59 , 9/* "sin" */,-59 , 12/* "sinh" */,-59 , 15/* "asin" */,-59 , 18/* "asinh" */,-59 , 10/* "cos" */,-59 , 13/* "cosh" */,-59 , 16/* "acos" */,-59 , 19/* "acosh" */,-59 , 11/* "tan" */,-59 , 14/* "tanh" */,-59 , 17/* "atan" */,-59 , 20/* "atanh" */,-59 , 21/* "sec" */,-59 , 23/* "sech" */,-59 , 22/* "asec" */,-59 , 24/* "asech" */,-59 , 25/* "csc" */,-59 , 27/* "csch" */,-59 , 26/* "acsc" */,-59 , 28/* "acsch" */,-59 , 29/* "cot" */,-59 , 31/* "coth" */,-59 , 30/* "acot" */,-59 , 32/* "acoth" */,-59 , 33/* "sqrt" */,-59 , 34/* "exp" */,-59 , 35/* "log" */,-59 , 39/* ")" */,-59 , 3/* "," */,-59 ),
    /* State 159 */ new Array( 59/* "$" */,-7 , 3/* "," */,-7 ),
    /* State 160 */ new Array( 4/* "+" */,46 , 5/* "-" */,47 , 59/* "$" */,-9 , 3/* "," */,-9 ),
    /* State 161 */ new Array( 59/* "$" */,-60 , 36/* "where" */,-60 , 5/* "-" */,-60 , 4/* "+" */,-60 , 6/* "*" */,-60 , 7/* "/" */,-60 , 8/* "^" */,-60 , 40/* "pi" */,-60 , 41/* "infinity" */,-60 , 42/* "IDENTIFIER" */,-60 , 43/* "INT" */,-60 , 44/* "FLOAT" */,-60 , 38/* "(" */,-60 , 9/* "sin" */,-60 , 12/* "sinh" */,-60 , 15/* "asin" */,-60 , 18/* "asinh" */,-60 , 10/* "cos" */,-60 , 13/* "cosh" */,-60 , 16/* "acos" */,-60 , 19/* "acosh" */,-60 , 11/* "tan" */,-60 , 14/* "tanh" */,-60 , 17/* "atan" */,-60 , 20/* "atanh" */,-60 , 21/* "sec" */,-60 , 23/* "sech" */,-60 , 22/* "asec" */,-60 , 24/* "asech" */,-60 , 25/* "csc" */,-60 , 27/* "csch" */,-60 , 26/* "acsc" */,-60 , 28/* "acsch" */,-60 , 29/* "cot" */,-60 , 31/* "coth" */,-60 , 30/* "acot" */,-60 , 32/* "acoth" */,-60 , 33/* "sqrt" */,-60 , 34/* "exp" */,-60 , 35/* "log" */,-60 , 39/* ")" */,-60 , 3/* "," */,-60 )
);

/* Goto-Table */
var goto_tab = new Array(
    /* State 0 */ new Array( 48/* p */,1 , 45/* e */,2 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 1 */ new Array( ),
    /* State 2 */ new Array( ),
    /* State 3 */ new Array( 45/* e */,49 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 4 */ new Array( ),
    /* State 5 */ new Array( ),
    /* State 6 */ new Array( 52/* NonNegDivExp */,52 , 54/* NonNegPowExp */,53 , 56/* Value */,54 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 7 */ new Array( ),
    /* State 8 */ new Array( ),
    /* State 9 */ new Array( 56/* Value */,56 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 10 */ new Array( ),
    /* State 11 */ new Array( ),
    /* State 12 */ new Array( ),
    /* State 13 */ new Array( ),
    /* State 14 */ new Array( ),
    /* State 15 */ new Array( ),
    /* State 16 */ new Array( ),
    /* State 17 */ new Array( ),
    /* State 18 */ new Array( 45/* e */,57 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
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
    /* State 42 */ new Array( ),
    /* State 43 */ new Array( ),
    /* State 44 */ new Array( ),
    /* State 45 */ new Array( 57/* NumericValue */,84 ),
    /* State 46 */ new Array( 49/* MulDivExp */,86 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 47 */ new Array( 49/* MulDivExp */,87 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 48 */ new Array( 46/* AssignList */,88 , 47/* Assign */,89 ),
    /* State 49 */ new Array( ),
    /* State 50 */ new Array( 50/* DivExp */,92 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 51 */ new Array( 53/* PowExp */,93 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 52 */ new Array( ),
    /* State 53 */ new Array( ),
    /* State 54 */ new Array( ),
    /* State 55 */ new Array( 55/* NegExp */,96 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 56 */ new Array( ),
    /* State 57 */ new Array( ),
    /* State 58 */ new Array( 45/* e */,98 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 59 */ new Array( 45/* e */,99 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 60 */ new Array( 45/* e */,100 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 61 */ new Array( 45/* e */,101 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 62 */ new Array( 45/* e */,102 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 63 */ new Array( 45/* e */,103 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 64 */ new Array( 45/* e */,104 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 65 */ new Array( 45/* e */,105 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 66 */ new Array( 45/* e */,106 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 67 */ new Array( 45/* e */,107 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 68 */ new Array( 45/* e */,108 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 69 */ new Array( 45/* e */,109 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 70 */ new Array( 45/* e */,110 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 71 */ new Array( 45/* e */,111 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 72 */ new Array( 45/* e */,112 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 73 */ new Array( 45/* e */,113 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 74 */ new Array( 45/* e */,114 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 75 */ new Array( 45/* e */,115 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 76 */ new Array( 45/* e */,116 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 77 */ new Array( 45/* e */,117 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 78 */ new Array( 45/* e */,118 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 79 */ new Array( 45/* e */,119 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 80 */ new Array( 45/* e */,120 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 81 */ new Array( 45/* e */,121 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 82 */ new Array( 45/* e */,122 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 83 */ new Array( 45/* e */,123 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 84 */ new Array( ),
    /* State 85 */ new Array( 45/* e */,125 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 86 */ new Array( ),
    /* State 87 */ new Array( ),
    /* State 88 */ new Array( ),
    /* State 89 */ new Array( ),
    /* State 90 */ new Array( ),
    /* State 91 */ new Array( 47/* Assign */,128 ),
    /* State 92 */ new Array( ),
    /* State 93 */ new Array( ),
    /* State 94 */ new Array( 54/* NonNegPowExp */,129 , 56/* Value */,54 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 95 */ new Array( 55/* NegExp */,130 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
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
    /* State 115 */ new Array( ),
    /* State 116 */ new Array( ),
    /* State 117 */ new Array( ),
    /* State 118 */ new Array( ),
    /* State 119 */ new Array( ),
    /* State 120 */ new Array( ),
    /* State 121 */ new Array( ),
    /* State 122 */ new Array( ),
    /* State 123 */ new Array( ),
    /* State 124 */ new Array( 45/* e */,157 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
    /* State 125 */ new Array( ),
    /* State 126 */ new Array( 47/* Assign */,159 ),
    /* State 127 */ new Array( 45/* e */,160 , 49/* MulDivExp */,4 , 50/* DivExp */,5 , 51/* MulNonExp */,6 , 53/* PowExp */,7 , 55/* NegExp */,8 , 56/* Value */,10 , 57/* NumericValue */,11 , 58/* ParenExp */,15 ),
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
    /* State 147 */ new Array( ),
    /* State 148 */ new Array( ),
    /* State 149 */ new Array( ),
    /* State 150 */ new Array( ),
    /* State 151 */ new Array( ),
    /* State 152 */ new Array( ),
    /* State 153 */ new Array( ),
    /* State 154 */ new Array( ),
    /* State 155 */ new Array( ),
    /* State 156 */ new Array( ),
    /* State 157 */ new Array( ),
    /* State 158 */ new Array( ),
    /* State 159 */ new Array( ),
    /* State 160 */ new Array( ),
    /* State 161 */ new Array( )
);



/* Symbol labels */
var labels = new Array(
    "p'" /* Non-terminal symbol */,
    "WHITESPACE" /* Terminal symbol */,
    "=" /* Terminal symbol */,
    "," /* Terminal symbol */,
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
    "where" /* Terminal symbol */,
    "derivative of" /* Terminal symbol */,
    "(" /* Terminal symbol */,
    ")" /* Terminal symbol */,
    "pi" /* Terminal symbol */,
    "infinity" /* Terminal symbol */,
    "IDENTIFIER" /* Terminal symbol */,
    "INT" /* Terminal symbol */,
    "FLOAT" /* Terminal symbol */,
    "e" /* Non-terminal symbol */,
    "AssignList" /* Non-terminal symbol */,
    "Assign" /* Non-terminal symbol */,
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
        act = 163;
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
        if( act == 163 )
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

            while( act == 163 && la != 59 )
            {
                if( _dbg_withtrace )
                    __dbg_print( "\tError recovery\n" +
                                    "Current lookahead: " + labels[la] + " (" + info.att + ")\n" +
                                    "Action: " + act + "\n\n" );
                if( la == -1 )
                    info.offset++;

                while( act == 163 && sstack.length > 0 )
                {
                    sstack.pop();
                    vstack.pop();

                    if( sstack.length == 0 )
                        break;

                    act = 163;
                    for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
                    {
                        if( act_tab[sstack[sstack.length-1]][i] == la )
                        {
                            act = act_tab[sstack[sstack.length-1]][i+1];
                            break;
                        }
                    }
                }

                if( act != 163 )
                    break;

                for( var i = 0; i < rsstack.length; i++ )
                {
                    sstack.push( rsstack[i] );
                    vstack.push( rvstack[i] );
                }

                la = __lex( info );
            }

            if( act == 163 )
            {
                if( _dbg_withtrace )
                    __dbg_print( "\tError recovery failed, terminating parse process..." );
                break;
            }


            if( _dbg_withtrace )
                __dbg_print( "\tError recovery succeeded, continuing" );
        }

        /*
        if( act == 163 )
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
         _dbg_expression = vstack[ vstack.length - 1 ];
    }
    break;
    case 2:
    {
         _dbg_expression = initsubstitute(vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]);
    }
    break;
    case 3:
    {
         _dbg_expression = initderivative(vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ]);
    }
    break;
    case 4:
    {
         rval = createNode( NODE_OP, OP_SUB, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] );
    }
    break;
    case 5:
    {
         rval = createNode( NODE_OP, OP_ADD, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] );
    }
    break;
    case 6:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 7:
    {
         rval = [vstack[ vstack.length - 3 ], {assign: vstack[ vstack.length - 1 ]}];
    }
    break;
    case 8:
    {
         rval = {assign: vstack[ vstack.length - 1 ]};
    }
    break;
    case 9:
    {
         rval = [createNode( NODE_SYM, vstack[ vstack.length - 3 ] ), vstack[ vstack.length - 1 ]];
    }
    break;
    case 10:
    {
         rval = createNode( NODE_OP, OP_MUL, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] );
    }
    break;
    case 11:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 12:
    {
         rval = createNode( NODE_OP, OP_MUL, vstack[ vstack.length - 2 ], vstack[ vstack.length - 1 ] );
    }
    break;
    case 13:
    {
         rval = createNode( NODE_OP, OP_DIV, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] );
    }
    break;
    case 14:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 15:
    {
         rval = createNode( NODE_OP, OP_MUL, vstack[ vstack.length - 2 ], vstack[ vstack.length - 1 ] );
    }
    break;
    case 16:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 17:
    {
         rval = createNode( NODE_OP, OP_DIV, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] );
    }
    break;
    case 18:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 19:
    {
         rval = createNode( NODE_OP, OP_POW, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] );
    }
    break;
    case 20:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 21:
    {
         rval = createNode( NODE_OP, OP_POW, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] );
    }
    break;
    case 22:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 23:
    {
         rval = createNode( NODE_OP, OP_NEG, vstack[ vstack.length - 1 ] );
    }
    break;
    case 24:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 25:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 26:
    {
         rval = createNode( NODE_SYM, vstack[ vstack.length - 1 ] );
    }
    break;
    case 27:
    {
         rval = createNode( NODE_SYM, vstack[ vstack.length - 1 ] );
    }
    break;
    case 28:
    {
         rval = createNode( NODE_SYM, vstack[ vstack.length - 1 ] );
    }
    break;
    case 29:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 30:
    {
         rval = createNode( NODE_INT, vstack[ vstack.length - 1 ] );
    }
    break;
    case 31:
    {
         rval = createNode( NODE_INT, vstack[ vstack.length - 1 ] );
    }
    break;
    case 32:
    {
         rval = vstack[ vstack.length - 2 ];
    }
    break;
    case 33:
    {
         rval = createNode( NODE_FUNC, FUNC_SIN, vstack[ vstack.length - 2 ] );
    }
    break;
    case 34:
    {
         rval = createNode( NODE_FUNC, FUNC_SINH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 35:
    {
         rval = createNode( NODE_FUNC, FUNC_ASIN, vstack[ vstack.length - 2 ] );
    }
    break;
    case 36:
    {
         rval = createNode( NODE_FUNC, FUNC_ASINH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 37:
    {
         rval = createNode( NODE_FUNC, FUNC_COS, vstack[ vstack.length - 2 ] );
    }
    break;
    case 38:
    {
         rval = createNode( NODE_FUNC, FUNC_COSH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 39:
    {
         rval = createNode( NODE_FUNC, FUNC_ACOS, vstack[ vstack.length - 2 ] );
    }
    break;
    case 40:
    {
         rval = createNode( NODE_FUNC, FUNC_ACOSH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 41:
    {
         rval = createNode( NODE_FUNC, FUNC_TAN, vstack[ vstack.length - 2 ] );
    }
    break;
    case 42:
    {
         rval = createNode( NODE_FUNC, FUNC_TANH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 43:
    {
         rval = createNode( NODE_FUNC, FUNC_ATAN, vstack[ vstack.length - 2 ] );
    }
    break;
    case 44:
    {
         rval = createNode( NODE_FUNC, FUNC_ATANH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 45:
    {
         rval = createNode( NODE_FUNC, FUNC_SEC, vstack[ vstack.length - 2 ] );
    }
    break;
    case 46:
    {
         rval = createNode( NODE_FUNC, FUNC_SECH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 47:
    {
         rval = createNode( NODE_FUNC, FUNC_ASEC, vstack[ vstack.length - 2 ] );
    }
    break;
    case 48:
    {
         rval = createNode( NODE_FUNC, FUNC_ASECH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 49:
    {
         rval = createNode( NODE_FUNC, FUNC_CSC, vstack[ vstack.length - 2 ] );
    }
    break;
    case 50:
    {
         rval = createNode( NODE_FUNC, FUNC_CSCH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 51:
    {
         rval = createNode( NODE_FUNC, FUNC_ACSC, vstack[ vstack.length - 2 ] );
    }
    break;
    case 52:
    {
         rval = createNode( NODE_FUNC, FUNC_ACSCH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 53:
    {
         rval = createNode( NODE_FUNC, FUNC_COT, vstack[ vstack.length - 2 ] );
    }
    break;
    case 54:
    {
         rval = createNode( NODE_FUNC, FUNC_COTH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 55:
    {
         rval = createNode( NODE_FUNC, FUNC_ACOT, vstack[ vstack.length - 2 ] );
    }
    break;
    case 56:
    {
         rval = createNode( NODE_FUNC, FUNC_ACOTH, vstack[ vstack.length - 2 ] );
    }
    break;
    case 57:
    {
         rval = createNode( NODE_FUNC, FUNC_SQRT, vstack[ vstack.length - 2 ] );
    }
    break;
    case 58:
    {
         rval = createNode( NODE_OP, OP_POW, createNode( NODE_SYM, SYM_EULER ), vstack[ vstack.length - 2 ] );
    }
    break;
    case 59:
    {
         rval = createNode( NODE_FUNC, FUNC_NLOG, vstack[ vstack.length - 2 ] );
    }
    break;
    case 60:
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

// Function responsible for parsing
function parse(str)
{
  var error_offsets = new Array();
  var error_lookaheads = new Array();
  var error_count = 0;
  if( ( error_count = __parse( str, error_offsets, error_lookaheads ) ) > 0 )
  { var errstr = new String(); for( var i = 0; i < error_count; i++ )
      errstr += "Parse error in line " + ( str.substr( 0, error_offsets[i] ).match( /\n/g ) ? str.substr( 0, error_offsets[i] ).match( /\n/g ).length : 1 ) + " near \"" + str.substr( error_offsets[i] ) + "\", expecting \"" + error_lookaheads[i].join() + "\"\n" ;
      throw errstr;
  }
  return _dbg_expression;
}
