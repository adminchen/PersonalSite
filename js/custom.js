

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
	
	$('.top').click(function(){
		$.scrollTo( '.head', 1200, {easing:'elasout'} );
	});
	
	$(".more").click(function(){
		$(".more-work").slideToggle({easing:'BounceEaseOut'});
		$('.more').toggle();
	});

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
		[20,'Rails'],
		[50,'Jquery'],
		[20,'SCSS'],
		[25,'Git cmds'],
		[90,'3DS Max'],
		[60,'Mubdox']		
	);


