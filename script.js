$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        let aid = $(this).attr("href");
        let menuButton = $("button.navbar-toggler");

        $('html,body').animate({scrollTop: $(aid).offset().top - 60},'slow');
        if ($(window).width() < 992) {
          $(menuButton).trigger('click');
        }
        
    });

    $('.see-more').on('click', function() {
        $('.hided-position').removeClass('hided-position');
        $(this).hide()
    })
})