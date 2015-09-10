$.fn.slideFadeToggle = function(options, callback) {
if (typeof callback == 'function') { // make sure the callback is a function
       callback.call(this); // brings the scope to the callback
   }
   return this.animate({opacity: 'toggle', height: 'toggle'}, 400);
};
jQuery(document).ready(function() {
    jQuery(".toggle").next(".hidden").hide();
    
    jQuery(".toggle").click(function() {
        $('.current').not(this).toggleClass('current').next('.hidden').slideFadeToggle();
        $(this).toggleClass('current').next().slideFadeToggle(500, function(){
        var this_element = $(this);
        setTimeout(function(){
        var scroll_to = this_element.prev('.toggle').offset().top;
        $('html, body').animate({scrollTop: scroll_to }, 500);
        }, 500);
        });
    });
});
	