// transition plugin for Cycle2;  http://malsup.com/jquery/cycle2/
(function($) {
"use strict";

$.fn.cycle.transitions.scrollVert = {
    before: function( opts, curr, next, fwd ) {
        opts.API.stackSlides( opts, curr, next, fwd );
        var height = opts.container.css('overflow','hidden').height();
        opts.cssBefore = { top: fwd ? -height : height, left: 0, opacity: 1, display: 'block' };
        opts.animIn = { top: 0 };
        opts.animOut = { top: fwd ? height : -height };
    }
};

})(jQuery);
