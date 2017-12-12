
$(document).ready(function () {

    $('.navbar-nav a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 150) {
            $('header').addClass('py-2');
            $('header').css('background-color', 'rgba(0.0.0.6)');
            $('.navbar-brand').addClass('small-logo');
        } else {
            $('header').removeClass('py-2');
            $('navbar-brand').removeClass('small-logo');
        }
    });

    //Round slider for percent

    $(window).scroll(function () {
        var vh = $(window).height();
        var scrool = $(window).scrollTop();
        $('.cont').each(function () {
            var position = $(this).offset().top;
        if (position < vh + scrool - 100) {
            var val = parseInt($(this).attr('data-pct'));
            var $circle = $(this).find('.svg .bar');



            var r = $circle.attr('r');
            var c = Math.PI * (r * 2);
        


        var circle = $(this).find('.svg .bar');
    

    




        var pct = ((100 - val) / 100) * c;

        $circle.css({strokeDashoffset: pct});

        // $('#cont').attr('data-pct',val);
    }
    });

});
});

if($('.owl-carousel'))

