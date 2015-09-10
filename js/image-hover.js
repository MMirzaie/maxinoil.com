jQuery(document).ready(function(){
								
	
	
	$('.images').hover(function() {
		$(this).find('.vertical-align').stop().animate({
			'padding-top':'0px', opacity: 1, 'height':'200px'
		}, 300);
		$(this).find('.hover-bg').stop().animate({
			opacity: 1
		}, 400);
	}, function() {
		$(this).find('.vertical-align').stop().animate({
			'padding-top':'50px', opacity: 0, 'height':'150px'
		}, 300);
		$(this).find('.hover-bg').stop().animate({
			opacity: 0
		}, 400);
	});
 
	 
});