$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'all') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    let team = $('#team').offset().top,
        service = $('#services').offset().top,
        work = $('#work').offset().top,
        contact = $('#contact').offset().top;

    window.addEventListener('resize', function () {
        let team = $('#team').offset().top,
            service = $('#services').offset().top,
            work = $('#work').offset().top,
            contact = $('#contact').offset().top;
    });

    $('#link-home').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    $('#link-team').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: team - 100
        }, 600);
    });

    $('#link-service').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: service - 100
        }, 600);
    });

    $('#link-work').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: work - 100
        }, 600);
    });

    $('#link-contact').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contact - 100
        }, 600);
    });

});