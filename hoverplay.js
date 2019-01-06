(function($) {
    $(function() {
        $('video').hover(function() {
            this.play();
        }, function() {
            this.pause()
        });
    });
})(jQuery);