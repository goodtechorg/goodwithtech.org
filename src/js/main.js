jQuery(document).ready(function($){

    $(document).scroll(function () {
        var maxScroll = $(document).height() - $(window).height();
        var y = $(this).scrollTop();
        if (y > 350 || y + 100 > maxScroll) {
            $('.alertbar').show();
        } else {
            $('.alertbar').hide();
        }
    });

});