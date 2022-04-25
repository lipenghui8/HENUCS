$(function(){
	
	  // Initiate superfish on nav menu
	  $('.nav-menu').superfish({
	    animation: {opacity:'show'},
	    speed: 400
	  });

	  // Mobile Navigation
	  if( $('#nav-menu-container').length ) {
	      var $mobile_nav = $('#nav-menu-container').clone().prop({ id: 'mobile-nav'});
	      $mobile_nav.find('> ul').attr({ 'class' : '', 'id' : '' });
	      $('body').append( $mobile_nav );
	      $('body').prepend( '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>' );
	      $('body').append( '<div id="mobile-body-overly"></div>' );
	      $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

	      $(document).on('click', '.menu-has-children i', function(e){
	          $(this).next().toggleClass('menu-item-active');
	          $(this).nextAll('ul').eq(0).slideToggle();
	          $(this).toggleClass("fa-chevron-up fa-chevron-down");
	      });

	      $(document).on('click', '#mobile-nav-toggle', function(e){
	          $('body').toggleClass('mobile-nav-active');
	          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
	          $('#mobile-body-overly').toggle();
	      });

	      $(document).click(function (e) {
	          var container = $("#mobile-nav, #mobile-nav-toggle");
	          if (!container.is(e.target) && container.has(e.target).length === 0) {
	             if ( $('body').hasClass('mobile-nav-active') ) {
	                  $('body').removeClass('mobile-nav-active');
	                  $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
	                  $('#mobile-body-overly').fadeOut();
	              }
	          }
	      });
	  } else if ( $("#mobile-nav, #mobile-nav-toggle").length ) {
	      $("#mobile-nav, #mobile-nav-toggle").hide();
	  }

	  // Stick the header at top on scroll
	  $("#header").sticky({topSpacing:0, zIndex: '50'});


	//Banner swiper
	if($('.banner').length>0){
		var banner_swiper =new Swiper('.banner',{
			slidesPerView: 1,
	      	spaceBetween: 0,
			centeredSlides:true,
			autoplay:{
				delay:6000,
				disableOnInteraction:false,
			},
			loop:true,
			pagination:{
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation:{
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
		});
	}


	//english
	$('.english').hover(function(){
		$('.english p').stop().animate({
			'width':'100px',
		},500),
		$('.english p').html('English');
	},function(){
		$('.english p').stop().animate({
			'width':'36px',
		},500),
		$('.english p').html('En');
	});



	//Scroll Top link
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrolltop').fadeIn();
		} else {
			$('.scrolltop').fadeOut();
		}
	});

	$('.scrolltop, #logo a').click(function(){
		$("html, body").animate({
			scrollTop: 0
		}, 1000, 'easeInOutExpo');
		return false;
	});
});