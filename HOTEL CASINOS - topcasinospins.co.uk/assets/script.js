(function($) {
	"use strict";

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 200) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();

document.addEventListener("DOMContentLoaded", function() {
    var navToggler = document.querySelector('.nav-toggler');
    var hiddenBar = document.querySelector('.hidden-bar');
    var hiddenBarCloser = document.querySelector('.hidden-bar-closer');

    function toggleSidebar() {
        hiddenBar.classList.toggle('visible-sidebar');
    }

    if (navToggler && hiddenBar && hiddenBarCloser) {
        navToggler.addEventListener('click', toggleSidebar);
        hiddenBarCloser.addEventListener('click', toggleSidebar);
    }
});



	// Feedback Carousel Slider
	$('.content-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: true,
    items: 1,
})
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


 $('.popup').click(function(){
      $('.modal_new').addClass('show')
  })
  $('.btn-close').click(function(){
      $('.modal_new').removeClass('show')
  })
 
	$(window).on('scroll', function() {
		headerStyle();
	});


})(window.jQuery);