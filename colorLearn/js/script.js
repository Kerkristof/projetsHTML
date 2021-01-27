$(function(){

	var learningSet;
	$("select").v
	$("button").click(function(){
		carree();
	});





	



	function carree(){
		$("div").css("width",100);
		$("div").css("height",100);
		$("div").css("background-color",randomColor);
	}

	function randomColor(){
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		var col = "rgb("+r+","+g+","+b+")";
		return col ;
	}

});