$(function(){	
	//left part select add css
	$('.left-part-active').find('.left-part-div').css(
		{
			'background-color':'#07d782'
		}
	);

	//jump to mid-part when load the web
	$(document).ready(function() {
		if($(window).scrollTop()<$('.mid-part').offset().top){

			$("html, body").animate({
		      scrollTop: $('.mid-part').offset().top
		    }, 2000, 'easeInOutExpo');
		}
		return false;
	 //    $("html, body").animate({
	 //      scrollTop: $('#mid-part').offset().top
	 //    },1000);
		// return false;
	});


});