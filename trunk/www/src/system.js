$( "#equalbtn" ).click(function() {
	var str = $("#textinpt").val();
	if( ( error_count = __parse( str, error_offsets, error_lookaheads ) ) > 0 )
	    { var errstr = new String(); for( var i = 0; i < error_count; i++ )
	        errstr += "Parse error in line " + ( str.substr( 0, error_offsets[i] ).match( /\n/g ) ? str.substr( 0, error_offsets[i] ).match( /\n/g ).length : 1 ) + " near \"" + str.substr( error_offsets[i] ) + "\", expecting \"" + error_lookaheads[i].join() + "\"\n" ;
	        //alert( errstr );
	        $("#console").text(errstr);
	        
	    }
	$("#console").css("visibility", "visible");
});