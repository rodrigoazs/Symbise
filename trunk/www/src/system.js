$( "#equalbtn" ).click(function() {
	// Close canvas-plot when request new calculation
	$("#canvas-plot").css("display", "none");
	// Start the parser
	var str = $("#textinpt").val();
	if( ( error_count = __parse( str, error_offsets, error_lookaheads ) ) > 0 )
	    { var errstr = new String(); for( var i = 0; i < error_count; i++ )
	        errstr += "Parse error in line " + ( str.substr( 0, error_offsets[i] ).match( /\n/g ) ? str.substr( 0, error_offsets[i] ).match( /\n/g ).length : 1 ) + " near \"" + str.substr( error_offsets[i] ) + "\", expecting \"" + error_lookaheads[i].join() + "\"\n" ;
	        //alert( errstr );
	        $("#console").text(errstr);
	        
	    }
	// Show console and content-plot
	$("#console").css("display", "block");
	$("#content-plot").css("display", "block");
});

$( "#header-plot" ).click(function() {
	if($( "#canvas-plot" ).css("display") == "none"){
		var instance = functionPlot({
			  target: '#canvas-plot',
			  disableZoom: true,
			  width: 300,
			  height: 200,
			  yAxis: {domain: [-1.5, 1.5]},
			  xAxis: {domain: [-6.28, 6.28]},
			  data: [{
			    fn: plot_value
			  }]
			})
	 	$( "#canvas-plot" ).slideDown( 1000, function() {
    		$( this ).focus();
    	});
	}else{
		$( "#canvas-plot" ).slideUp( 1000, function() {
			$( this ).css("display", "none");
    	});
	}
});