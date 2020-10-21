$(document).ready(function(){
	
	/*slider start*/
	
	$('.owl-carousel').owlCarousel({
		items: 1,
		autoplay: 5000,
		loop: true,
		
	});
	
	
	
	/*slider end*/
	
	
	
	
	
	
	
	
	
	
	
	
	/*mobileMenu start*/
	
	$(".open_button").click(function(){
		$("#navigation_menu").animate({left:"0"},1000);
		$(this).hide();
		$(".close_button").css('display','block');
	});
	
	$(".close_button").click(function(){
		$("#navigation_menu").animate({left:"-200"},1000);
		$(this).hide();
		$(".close_button").css('display','none');
		$(".open_button").css('display','block');
	});
	
	
	
	
	
	/*mobileMenu end*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$(window).on('scroll', function(){
		if ($(window).scrollTop()){
			$('header').addClass('black');
			$('.submenu_ul_li').addClass('black');
		}
		else{
			$('header').removeClass('black');
		}
	});
	
	
	
	
	$(window).on('scroll', function(){
		if ($(window).scrollTop()){
			$('.submenu_ul_li').addClass('black');
		}
		else{
			$('.submenu_ul_li').removeClass('black');
		}
	});
	
	$(window).on('scroll', function(){
		if ($(window).scrollTop()){
			$('.go-to-top').addClass('active');
		}
		else{
			$('.go-to-top').removeClass('active');
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$("a[href='#page-top']").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
	
	
	
	
});





























