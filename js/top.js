 $(document).ready(function () {
	 
	 $("#wrap").hide();
	 $(document).ready(function () {
	 $("#loading").delay(4900).fadeOut();
	 $("#wrap").delay(5000).fadeIn();
	
	 
	 });
	 
	 
	 
 	$("#menu li").hover(function () {
 		//hoverした要素のポジションを取得
 		var lp = $(this).position();
 		//要素の位置までアニメーションさせる
 		//$("#menu .line").stop().animate({ "left": lp.left,"top": lp.top},300);
 		$("#menu .line").css({
 			"left": lp.left,
 			"top": lp.top
 		}, 300);
 	});
 	//function
 });