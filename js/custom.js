


// Credits: Robert Penners easing equations (http://www.robertpenner.com/easing/).
jQuery.easing['BounceEaseOut'] = function(p, t, b, c, d) {
	if ((t/=d) < (1/2.75)) {
		return c*(7.5625*t*t) + b;
	} else if (t < (2/2.75)) {
		return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
	} else if (t < (2.5/2.75)) {
		return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
	} else {
		return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
	}
};

//borrowed from jQuery easing plugin
	//http://gsgd.co.uk/sandbox/jquery.easing.php
	$.easing.elasout = function(x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	};
	


jQuery(document).ready(function() {
    jQuery('#mycarousel').jcarousel({
		scroll: 1,
		easing: 'BounceEaseOut',
        animation: 1000
	});
	
	$('.punch-line b').click(function(){
		$.scrollTo( '.work', 1200, {easing:'elasout'} );
	});
	
	$(".more").click(function(){
		$(".more-work").slideToggle({easing:'BounceEaseOut'});
		$('.more').toggle();
	});
	
	$("#up").click(function(){
		$.scrollTo( '.about', 1200, {offset:-500} );
	});
	
	$("#down").click(function(){
		$.scrollTo( '.work', 1200, {} );
	});
	
	$(".fancybox")
		.attr('rel', 'gallery')
		.fancybox({
			openMethod : 'dropIn',
			openSpeed : 250,

			closeMethod : 'dropOut',
			closeSpeed : 150,
			
			nextMethod : 'slideIn',
			nextSpeed : 250,
			
			prevMethod : 'slideOut',
			prevSpeed : 250
		});
		
	$('[rel=tooltip]').tooltip();
	
	$('input[placeholder], textarea[placeholder]').placeholder();

});

	$('.about').waypoint(function() {
		$('#graph').jqBarGraph({ 
			data: graphByMonth, 
			width: 450,
			color: '#d8dbdb',
			barSpace: 5
		});
		
		}, {
		
			triggerOnce: true,
			offset: '60%'

	});
	
graphByMonth = new Array(
		[90,'Photoshop'],
		[80,'HTML/CSS'],
		[50,'jQuery'],
		[20,'SCSS'],
		[25,'Git'],
		[90,'3DS Max'],
		[60,'Mubdox']		
	);


	(function ($, F) {
    
    // Opening animation - fly from the top
    F.transitions.dropIn = function() {
        var endPos = F._getPosition(true);

        endPos.top = (parseInt(endPos.top, 10) - 200) + 'px';
        endPos.opacity = 0;
        
        F.wrap.css(endPos).show().animate({
            top: '+=200px',
            opacity: 1
        }, {
            duration: F.current.openSpeed,
            complete: F._afterZoomIn
        });
    };

    // Closing animation - fly to the top
    F.transitions.dropOut = function() {
        F.wrap.removeClass('fancybox-opened').animate({
            top: '-=200px',
            opacity: 0
        }, {
            duration: F.current.closeSpeed,
            complete: F._afterZoomOut
        });
    };
    
    // Next gallery item - fly from left side to the center
    F.transitions.slideIn = function() {
        var endPos = F._getPosition(true);

        endPos.left = (parseInt(endPos.left, 10) - 200) + 'px';
        endPos.opacity = 0;
        
        F.wrap.css(endPos).show().animate({
            left: '+=200px',
            opacity: 1
        }, {
            duration: F.current.nextSpeed,
            complete: F._afterZoomIn
        });
    };
    
    // Current gallery item - fly from center to the right
    F.transitions.slideOut = function() {
        F.wrap.removeClass('fancybox-opened').animate({
            left: '+=200px',
            opacity: 0
        }, {
            duration: F.current.prevSpeed,
            complete: function () {
                $(this).trigger('onReset').remove();
            }
        });
    };
	
	}(jQuery, jQuery.fancybox));
