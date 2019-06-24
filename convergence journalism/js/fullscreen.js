// JavaScript Document


$(document).ready(function() {
	var winWidth=$(window).width();
	var winHeight=$(window).height();
	if(winWidth/winHeight<1280/504){
		$("#video-1").css("height",winHeight);		
		$("#video-1").css("width",winHeight*(1280/504));
	}
	else{
		$("#video-1").css("width",winWidth);
		$("#video-1").css("height",winWidth/(1280/504));
		
	}
	
	if(winWidth/winHeight<1920/1080){
		$("#video-2").css("height",winHeight);		
		$("#video-2").css("width",winHeight*(1920/1080));
	}
	else{
		$("#video-2").css("width",winWidth);
		$("#video-2").css("height",winWidth/(1920/1080));
		
	}

})
$(window).on("resize",function(){
	var winWidth=$(window).width();
	var winHeight=$(window).height();
	
	if(winWidth/winHeight<1280/504){
		$("#videobg").css("height",winHeight);		
		$("#videobg").css("width",winHeight*(1280/504));
	}
	else{
		$("#videobg").css("width","100%");
		$("#videobg").css("height",winWidth/(1280/504));
		
	}
})