require([
    "jquery"
], function($){

    let viewport = $(window).width();


    if (viewport > 1024) {

        let nav = $('.nav-sections');

        $(window).scroll(function(){
            if ($(window).scrollTop() >= 100) {
                nav.addClass('sticky');
            }
            else {
                nav.removeClass('sticky');
            }
        });
    }
});
