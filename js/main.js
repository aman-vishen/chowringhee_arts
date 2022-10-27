/*-------------------------------
[  Table of contents  ]
---------------------------------
  01. jQuery MeanMenu
  02. wow js active
  03. Portfolio  Masonry (width)
  04. Sticky Header
  05. ScrollUp
  06. Tooltip
  07. ScrollReveal Js Init
  08. Fixed Footer bottom script ( Newsletter )
  09. Search Bar
  10. Toogle Menu
  11. Shopping Cart Area
  12. Filter Area
  13. User Menu
  14. Overlay Close
  15. Home Slider 
  16. Popular Product Wrap
  17. Testimonial Wrap
  18. Magnific Popup  
  19. Price Slider Active
  20. Plus Minus Button
  21. jQuery scroll Nav

  

/*--------------------------------
[ End table content ]
-----------------------------------*/


(function($) {
    'use strict';


/*-------------------------------------------
  01. jQuery MeanMenu
--------------------------------------------- */
    
$('.mobile-menu nav').meanmenu({
    meanMenuContainer: '.mobile-menu-area',
    meanScreenWidth: "991",
    meanRevealPosition: "right",
});

/*-------------------------------------------
  02. wow js active
--------------------------------------------- */

  new WOW().init();



/*-------------------------------------------
  03. Product  Masonry (width)
--------------------------------------------- */ 

$('.htc__product__container').imagesLoaded( function() {
  
    // filter items on button click
    $('.product__menu').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    }); 
    // init Isotope
    var $grid = $('.product__list').isotope({
      itemSelector: '.single__pro',
      percentPosition: true,
      transitionDuration: '0.7s',
      layoutMode: 'fitRows',
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1,
      }
    });

});

$('.product__menu button').on('click', function(event) {
    $(this).siblings('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
    event.preventDefault();
});



/*-------------------------------------------
  04. Sticky Header
--------------------------------------------- */ 


  var win = $(window);
  var sticky_id = $("#sticky-header-with-topbar");
  win.on('scroll',function() {    
    var scroll = win.scrollTop();
    if (scroll < 245) {
      sticky_id.removeClass("scroll-header");
    }else{
      sticky_id.addClass("scroll-header");
    }
  });





/*--------------------------
  05. ScrollUp
---------------------------- */
$.scrollUp({
    scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});



/*---------------------------
  06. Tooltip
------------------------------*/    
$('[data-toggle="tooltip"]').tooltip({
    animated: 'fade',
    placement: 'top',
    container: 'body'
});



/*-----------------------------------
  07. ScrollReveal Js Init
-------------------------------------- */

  window.sr = ScrollReveal({ duration: 800 , reset: false });
    sr.reveal('.foo');
    sr.reveal('.bar');



/*-------------------------------------------------------
  08. Fixed Footer bottom script ( Newsletter )
--------------------------------------------------------*/

var $newsletter_height = $(".htc__foooter__area");
$('.fixed__footer').css({'margin-bottom': $newsletter_height.height() + 'px'});




/*------------------------------------    
  09. Search Bar
--------------------------------------*/ 
    
  $( '.search__open' ).on( 'click', function () {
    $( 'body' ).toggleClass( 'search__box__show__hide' );
    return false;
  });

  $( '.search__close__btn .search__close__btn_icon' ).on( 'click', function () {
    $( 'body' ).toggleClass( 'search__box__show__hide' );
    return false;
  });




/*------------------------------------    
  10. Toogle Menu
--------------------------------------*/

  $('.toggle__menu').on('click', function() {
    $('.offsetmenu').addClass('offsetmenu__on');
    $('.body__overlay').addClass('is-visible');

  });

  $('.offsetmenu__close__btn').on('click', function() {
      $('.offsetmenu').removeClass('offsetmenu__on');
      $('.body__overlay').removeClass('is-visible');
  });



/*------------------------------------    
  11. Shopping Cart Area
--------------------------------------*/

  $('.cart__menu').on('click', function() {
    $('.shopping__cart').addClass('shopping__cart__on');
    $('.body__overlay').addClass('is-visible');

  });

  $('.offsetmenu__close__btn').on('click', function() {
      $('.shopping__cart').removeClass('shopping__cart__on');
      $('.body__overlay').removeClass('is-visible');
  });


/*------------------------------------    
  12. Filter Area
--------------------------------------*/

  $('.filter__menu').on('click', function() {
    $('.filter__wrap').addClass('filter__menu__on');
    $('.body__overlay').addClass('is-visible');

  });

  $('.filter__menu__close__btn').on('click', function() {
      $('.filter__wrap').removeClass('filter__menu__on');
      $('.body__overlay').removeClass('is-visible');
  });



/*------------------------------------    
  13. User Menu
--------------------------------------*/

  $('.user__menu').on('click', function() {
    $('.user__meta').addClass('user__meta__on');
    $('.body__overlay').addClass('is-visible');

  });

  $('.offsetmenu__close__btn').on('click', function() {
      $('.user__meta').removeClass('user__meta__on');
      $('.body__overlay').removeClass('is-visible');
  });



/*------------------------------------    
  14. Overlay Close
--------------------------------------*/
  $('.body__overlay').on('click', function() {
    $(this).removeClass('is-visible');
    $('.offsetmenu').removeClass('offsetmenu__on');
    $('.shopping__cart').removeClass('shopping__cart__on');
    $('.filter__wrap').removeClass('filter__menu__on');
    $('.user__meta').removeClass('user__meta__on');
  });



/*-----------------------------------------------
  15. Home Slider
-------------------------------------------------*/

  if ($('.slider__activation__wrap').length) {
    $('.slider__activation__wrap').owlCarousel({
      loop: true,
      margin:0,
      nav:true,
      autoplay: false,
      navText: [ '<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],
      autoplayTimeout: 10000,
      items:1,
      dots: false,
      lazyLoad: true,
      responsive:{
        0:{
          items:1
        },
        1920:{
          items:1
        }
      }
    });
  }

  if ($('.slider__activation__02').length) {
    $('.slider__activation__02').owlCarousel({
      loop: true,
      margin:0,
      nav:false,
      autoplay: false,
      autoplayTimeout: 10000,
      items:1,
      dots: false,
      lazyLoad: true,
      responsive:{
        0:{
          items:1
        },
        1920:{
          items:1
        }
      }
    });
  }




/*-----------------------------------------------
  16. Popular Product Wrap
-------------------------------------------------*/


  $('.popular__product__wrap').owlCarousel({
      loop: true,
      margin:0,
      nav:true,
      autoplay: false,
      navText: [ '<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],
      autoplayTimeout: 10000,
      items:3,
      dots: false,
      lazyLoad: true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        800:{
          items:2
        },
        1024:{
          items:3
        },
        1200:{
          items:3
        },
        1400:{
          items:3
        },
        1920:{
          items:3
        }
      }
    });



/*-----------------------------------------------
  17. Testimonial Wrap
-------------------------------------------------*/


  $('.testimonial__wrap').owlCarousel({
      loop: true,
      margin:0,
      nav:false,
      autoplay: false,
      navText: false,
      autoplayTimeout: 10000,
      items:1,
      dots: false,
      lazyLoad: true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
        800:{
          items:1
        },
        1024:{
          items:1
        },
        1200:{
          items:1
        },
        1400:{
          items:1
        },
        1920:{
          items:1
        }
      }
    });




/*--------------------------------
  18. Magnific Popup
----------------------------------*/

$('.video-popup').magnificPopup({
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  zoom: {
      enabled: true,
  }
});

$('.image-popup').magnificPopup({
  type: 'image',
  mainClass: 'mfp-fade',
  removalDelay: 100,
  gallery:{
      enabled:true, 
  }
});





/*-------------------------------
  19. Price Slider Active
--------------------------------*/
  $("#slider-range").slider({
      range: true,
      min: 10,
      max: 500,
      values: [110, 400],
      slide: function(event, ui) {
          $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
  });
  $("#amount").val("$" + $("#slider-range").slider("values", 0) +
      " - $" + $("#slider-range").slider("values", 1));




/*-------------------------------
  20.  Plus Minus Button 
--------------------------------*/


    $(".cart-plus-minus").append('<div class="dec qtybutton">-</i></div><div class="inc qtybutton">+</div>');

    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });


/*--------------------------
  21. jQuery scroll Nav
---------------------------- */
    // $('.onepage--menu').onePageNav({
    //     scrollOffset: 0
    // }); 
    // function updateQuickView(url) {
    //   $('.product-images .images img').removeClass('selected').find('img[src="'+ url +'"]').parent('li').addClass('selected');
    // }

    // $('#this_img').on('click', function(event){
    //   var selectedImage = $(this).parent('.product__hover__info').children('.this_img'),
    //     slectedImageUrl = selectedImage.attr('src');
  
    //   // $('body').addClass('overlay-layer');
    //   // animateQuickView(selectedImage, sliderFinalWidth, maxQuickWidth, 'open');
  
    //   //update the visible slider image in the quick view panel
    //   //you don't need to implement/use the updateQuickView if retrieving the quick view data with ajax
    //   updateQuickView(slectedImageUrl);
    // });


})(jQuery);

var modal = document.getElementById("myModal");
var head = document.getElementById("sticky-header-with-topbar");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  head.style.display = "none";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
  head.style.display = "block";
}



// (function ($) {
// 	$.fn.countTo = function (options) {
// 		options = options || {};
		
// 		return $(this).each(function () {
// 			// set options for current element
// 			var settings = $.extend({}, $.fn.countTo.defaults, {
// 				from:            $(this).data('from'),
// 				to:              $(this).data('to'),
// 				speed:           $(this).data('speed'),
// 				refreshInterval: $(this).data('refresh-interval'),
// 				decimals:        $(this).data('decimals')
// 			}, options);
			
// 			// how many times to update the value, and how much to increment the value on each update
// 			var loops = Math.ceil(settings.speed / settings.refreshInterval),
// 				increment = (settings.to - settings.from) / loops;
			
// 			// references & variables that will change with each update
// 			var self = this,
// 				$self = $(this),
// 				loopCount = 0,
// 				value = settings.from,
// 				data = $self.data('countTo') || {};
			
// 			$self.data('countTo', data);
			
// 			// if an existing interval can be found, clear it first
// 			if (data.interval) {
// 				clearInterval(data.interval);
// 			}
// 			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
// 			// initialize the element with the starting value
// 			render(value);
			
// 			function updateTimer() {
// 				value += increment;
// 				loopCount++;
				
// 				render(value);
				
// 				if (typeof(settings.onUpdate) == 'function') {
// 					settings.onUpdate.call(self, value);
// 				}
				
// 				if (loopCount >= loops) {
// 					// remove the interval
// 					$self.removeData('countTo');
// 					clearInterval(data.interval);
// 					value = settings.to;
					
// 					if (typeof(settings.onComplete) == 'function') {
// 						settings.onComplete.call(self, value);
// 					}
// 				}
// 			}
			
// 			function render(value) {
// 				var formattedValue = settings.formatter.call(self, value, settings);
// 				$self.html(formattedValue);
// 			}
// 		});
// 	};
	
// 	$.fn.countTo.defaults = {
// 		from: 0,               // the number the element should start at
// 		to: 0,                 // the number the element should end at
// 		speed: 1000,           // how long it should take to count between the target numbers
// 		refreshInterval: 100,  // how often the element should be updated
// 		decimals: 0,           // the number of decimal places to show
// 		formatter: formatter,  // handler for formatting the value before rendering
// 		onUpdate: null,        // callback method for every time the element is updated
// 		onComplete: null       // callback method for when the element finishes updating
// 	};
	
// 	function formatter(value, settings) {
// 		return value.toFixed(settings.decimals);
// 	}
// }(jQuery));

// jQuery(function ($) {
//   // custom formatting example
//   $('.count-number').data('countToOptions', {
// 	formatter: function (value, options) {
// 	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
// 	}
//   });
  
//   // start all the timers
//   $('.timer').each(count);  
  
//   function count(options) {
// 	var $this = $(this);
// 	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
// 	$this.countTo(options);
//   }
// });



