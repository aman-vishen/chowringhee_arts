(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue+"+");
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});

function unhide() {
    var hid = document.getElementsByClassName("exp");
	var hid2 = document.getElementsByClassName("tohide");
    // Emulates jQuery $(element).is(':hidden');
    if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
        hid[0].style.visibility = "visible";
		// hid2[0].style.visibility = "hidden";
    }
	if(hid2[0].offsetWidth > 0 && hid2[0].offsetHeight > 0) {
        // hid2[0].style.visibility = "visible";
		hid2[0].style.display = "none";
    }
}


function myFunction() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Read more";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "inline";
	}
  }
function myFunction1() {
	var dots1 = document.getElementById("dots1");
	var moreText1 = document.getElementById("more1");
	var btnText1 = document.getElementById("myBtn1");
  
	if (dots1.style.display === "none") {
	  dots1.style.display = "inline";
	  btnText1.innerHTML = "Read more";
	  moreText1.style.display = "none";
	} else {
	  dots1.style.display = "none";
	  btnText1.innerHTML = "Read less";
	  moreText1.style.display = "inline";
	}
  }


  function myFunction2() {
	var dots2 = document.getElementById("dots2");
	var moreText2 = document.getElementById("more2");
	var btnText2 = document.getElementById("myBtn2");
  
	if (dots2.style.display === "none") {
	  dots2.style.display = "inline";
	  btnText2.innerHTML = "Read more";
	  moreText2.style.display = "none";
	} else {
	  dots2.style.display = "none";
	  btnText2.innerHTML = "Read less";
	  moreText2.style.display = "inline";
	}
  }


function glasses() {
	var dots = document.getElementById("Glasses");
	var moreText = document.getElementById("bowls");
	// var btnText = document.getElementById("myBtn");
	var horn = document.getElementById("Horn_plates");
	var salad = document.getElementById("Salad");
	var Tray = document.getElementById("Tray");
	var furn = document.getElementById("furn");
	dots.style.display = "inline";
	moreText.style.display = "none";
	horn.style.display = "none";
	salad.style.display="none";
	Tray.style.display="none";
	furn.style.display="none";

  }


function bowls() {
	var dots = document.getElementById("Glasses");
	var moreText = document.getElementById("bowls");
	// var btnText = document.getElementById("myBtn");
	var horn = document.getElementById("Horn_plates");
	var salad = document.getElementById("Salad");
	var Tray = document.getElementById("Tray");
	var furn = document.getElementById("furn");
	dots.style.display = "none";
	moreText.style.display = "inline";
	horn.style.display = "none";
	salad.style.display="none";
	Tray.style.display="none";
	furn.style.display="none";
}

function Horn_plates() {
	var dots = document.getElementById("Glasses");
	var moreText = document.getElementById("bowls");
	var horn = document.getElementById("Horn_plates");
	var salad = document.getElementById("Salad");
	var Tray = document.getElementById("Tray");
	var furn = document.getElementById("furn");
	// var btnText = document.getElementById("myBtn");
	dots.style.display = "none";
	moreText.style.display = "none";
	horn.style.display = "inline";
	salad.style.display="none";
	Tray.style.display="none";
	furn.style.display="none";
}

function Salad() {
	var dots = document.getElementById("Glasses");
	var moreText = document.getElementById("bowls");
	var horn = document.getElementById("Horn_plates");
	var salad = document.getElementById("Salad");
	var Tray = document.getElementById("Tray");
	var furn = document.getElementById("furn");

	// var btnText = document.getElementById("myBtn");
	dots.style.display = "none";
	moreText.style.display = "none";
	horn.style.display = "none";
	salad.style.display="inline";
	Tray.style.display="none";
	furn.style.display="none";
}



function Tray() {
	var dots = document.getElementById("Glasses");
	var moreText = document.getElementById("bowls");
	var horn = document.getElementById("Horn_plates");
	var salad = document.getElementById("Salad");
	var furn = document.getElementById("furn");
	var Tray = document.getElementById("Tray");
	// var btnText = document.getElementById("myBtn");
	dots.style.display = "none";
	moreText.style.display = "none";
	horn.style.display = "none";
	salad.style.display="none";
	Tray.style.display="inline";
	furn.style.display="none";
}




function furniture() {
	var dots = document.getElementById("Glasses");
	var moreText = document.getElementById("bowls");
	var horn = document.getElementById("Horn_plates");
	var salad = document.getElementById("Salad");
	var Tray = document.getElementById("Tray");
	var furn = document.getElementById("furn");
	// var btnText = document.getElementById("myBtn");
	dots.style.display = "none";
	moreText.style.display = "none";
	horn.style.display = "none";
	salad.style.display="none";
	Tray.style.display="none";
	furn.style.display="inline";
}