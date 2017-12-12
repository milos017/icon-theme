
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

var currentRating = $('#example-fontawesome-o').data('current-rating');

$('.stars-example-fontawesome-o .current-rating')
        .find('span')
        .html(currentRating);

$('.stars-example-fontawesome-o .clear-rating').on('click', function (event) {
    event.preventDefault();

    $('#example-fontawesome-o')
            .barrating('clear');
});

$('#example-fontawesome-o').barrating({
    theme: 'fontawesome-stars-o',
    showSelectedRating: false,
    initialRating: currentRating,
    onSelect: function (value, text) {
        if (!value) {
            $('#example-fontawesome-o')
                    .barrating('clear');
        } else {
            $('.stars-example-fontawesome-o .current-rating')
                    .addClass('hidden');

            $('.stars-example-fontawesome-o .your-rating')
                    .removeClass('hidden')
                    .find('span')
                    .html(value);
        }
    },
    onClear: function (value, text) {
        $('.stars-example-fontawesome-o')
                .find('.current-rating')
                .removeClass('hidden')
                .end()
                .find('.your-rating')
                .addClass('hidden');
    }
});

