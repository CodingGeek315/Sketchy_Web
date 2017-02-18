$(document).ready(function(){
	$gridcontainer = $("#gridcontainer")
	initGrid(16);
});

function initGrid(squaresPerSide){
	$gridcontainer.empty();
	$gridcontainer.html("");
	containerWidth = $gridcontainer.width();
	var squareWidth = containerWidth / squaresPerSide - 2;
	for (var i = 0; i < squaresPerSide; i++){
		for (var j = 0; j < squaresPerSide; j++){
			var $square = $("<div class='square'></div>");
			$gridcontainer.append($square);
		}
		$gridcontainer.append("<div class='println'></div>");
	}
	var $allSquares = $(".square");
	$allSquares.mouseenter(function(){
		$(this).addClass('squareHovered');
	});
	$allSquares.width(squareWidth);
	$allSquares.height(squareWidth);
	
}

function reset(){
	$(".squareHovered").removeClass('squareHovered');
}