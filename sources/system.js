$( "#equalbtn" ).click(function() {
	// Close canvas-plot when request new calculation
	$("#console-error").css("display", "none");
	$("#console-input").css("display", "none");
	$("#console-result").css("display", "none");
	$("#console-derivative").css("display", "none");
	$("#content-plot").css("display", "none");
	$("#value-derivative-step").css("display", "none");
	$("#canvas-plot").css("display", "none");
	// Start the parser
	var str = $("#textinpt").val();
	try
	{
		initparser(parse(str));
		$("#content-plot").css("display", "block");
		$("#console-input").css("display", "block");
		$("#console-result").css("display", "block");
		$("#console-derivative").css("display", "block");
	}
	catch(err)
	{
		$("#value-error").text(err);
		$("#console-error").css("display", "block");
	}
	// Show console and content-plot
	$("#console").css("display", "block");

});

$( "#derivative-step-btn" ).click(function() {
	$("#value-derivative-step").css("display", "block");
});

$( "#header-plot" ).click(function() {
	if($( "#canvas-plot" ).css("display") == "none"){
		if($.isNumeric(plot_value))
			plot_value = plot_value.toString();
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

// Global var for the function plot
var plot_value;

function initparser( node )
{
  console.log(node);
  var func = stringEquation( node );
  var diff = symbolic_diff( node );

  var BAE_node = BAE_transform(node);
  var simplified = automatic_simplify(node);
  console.log('execute', execute(simplified, {"x": 2, "a": 3}));
  console.log('automatic_diff', automatic_diff(simplified, {"x": 2, "a": 3}));
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
	$("#value-input").html("<p>$$"+toTex(BAE_node)+"$$</p>");
	$("#value-result").html("<p>$$"+toTex(simplified)+"$$</p>");
	$("#value-derivative").html("<p>$$d/{dx}("+toTex(simplified)+")="+toTex(automatic_simplify(symbolic_diff(simplified)))+"$$</p>");
	$("#value-derivative-step").html("<p>"+step_diff(simplified)+"</p>");
  //$("#value-derivative").html("<p>$$d/{dx}("+toTex(BAE_node)+") -> "+toTex( simplified )+" -> "+toTex(symbolic_diff(simplified))+" -> "+toTex(automatic_simplify(symbolic_diff(simplified)))+" $$</p><br><br>"+step_diff(simplified)+"<br><br>"+toTex( BAE_node )+"<br>"+stringEquation( BAE_node )+"<br>"+toTex( simplified )+"<br>"+stringEquation(simplified));
  // Set the global plot value as the strin equation of the differentiation (it is necessary to fix some functios as sec, cot..)
  plot_value = stringEquation(diff);
  M.trustHtml = true;
  M.parseMath(document.getElementById("console"));
}
