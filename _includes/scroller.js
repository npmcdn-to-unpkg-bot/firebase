
/* ======= Fixed header when scrolled ======= */

$(window).on('scroll load', function() {

    if ($(window).scrollTop() > 0) {
        $('#navbar').addClass('scrolled');
    }
    else {
        $('#navbar').removeClass('scrolled');

    }
});

