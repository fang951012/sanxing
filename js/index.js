(function ($) {
//广告
	$('.advert2').bind('click',function(){
		$('.advert').css('display','none');
	});
	
	//三条杠
	$('.header0').bind('click',function(){
		$('.header00').css('display','none');
		$(".header01").css('display','block');
	});
	$('.heade').bind('click',function(){
		$('.header00').css('display','block');
		$(".header01").css('display','none');
	});
	
})(jQuery);