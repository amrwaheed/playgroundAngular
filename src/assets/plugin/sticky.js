jQuery( window ).on( "load", function() {
        "use strict";

// all var
var totop = jQuery('#totop');
var bodyScroll = jQuery('html,body');
var subnav = jQuery('.subnav');
var brandwhite = jQuery('.navbar-brand.white img.black');
var brandgold = jQuery('.navbar-brand.white img.white');
var headernav = jQuery('header');
var adminbar = jQuery('#wpadminbar');
var navdefwhite = jQuery('.navbar-default-white');
var wpadminmo = jQuery('.admin-bar .navbar-default-white');


var sticky = (function(){

	var $window, 
		$stickyNav, 
		$stickyParent, 
		stickyPos;

	var init = function(elem, options){
		$window 	       = jQuery(window);
		$stickyNav             = $(elem);
		$stickyParent          = $stickyNav.parent();
		stickyPos              = $stickyNav.offset().top  > 0 && top != 272 ;
		
		_eventHandlers();
	}

	var _stickyValidation = function(){

		var scrollPos = $window.scrollTop();
		
		if((scrollPos && jQuery(window).width() > 1199) >= stickyPos){
			 $stickyNav.addClass('sticky');
			 headernav.addClass('show');

			 if (brandwhite.length === 0) {
			 	brandgold.show();
			 } else if (brandgold.length === 0) {
			 	brandwhite.show();
			 } else {
			 	brandwhite.show();
			 	brandgold.hide();
			 }

			 subnav.fadeOut(100);
		}else{
			$stickyNav.removeClass('sticky');
			headernav.removeClass('show');

			if (brandwhite.length === 0) {
				brandgold.show();
			} else if (brandgold.length === 0) {
				brandwhite.show();
			} else {
				brandwhite.hide();
				brandgold.show();
			}
		    subnav.fadeIn(200);
		}
		if (jQuery(window).width() < 1200) {
        	if (brandwhite.length === 0) {
        		brandgold.show();
        	} else if (brandgold.length === 0) {
        		brandwhite.show();
        	} else {
        		brandwhite.show();
        		brandgold.hide();
        	}
        }
		if(scrollPos >= 100){
			totop.addClass('show');
		}else{
			totop.removeClass('show');
		}
		if((scrollPos && jQuery(window).width() < 601) >= stickyPos){
		    wpadminmo.addClass('show');
		}else{
		    wpadminmo.removeClass('show');
		}
	}
    
	var _eventHandlers = function(){
		window.addEventListener('scroll', _stickyValidation);
		jQuery(document).height(_stickyValidation);
	}

	return {
		init: init
	}

}());

//Create jquery plugin
if (window.jQuery) {
    (function($) {
        $.fn.sticky = function(options) {
            this.each(function() {
                sticky.init(this, options);
            });
            return this;
        };
    })(window.jQuery);
}else{
	console.warn("jQuery library not defined");
}
  
 // totop var
 totop.on("click", function(e) {
    e.preventDefault();
    bodyScroll.animate({
      scrollTop: 0
    }, 800);
  });

});
 
 

