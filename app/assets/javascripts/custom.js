// ===========================
// Drop-down Navigation
// ===========================

$('nav li ul').hide().removeClass('fallback');
$('nav li').hover(
  function () {
    $('ul', this).stop().slideDown(200);
  },
  function () {
    $('ul', this).stop().slideUp(200);
  }
);


// ===========================
//  iosslider
// ===========================

$(document).ready(function() {

    $('.iosslider').iosSlider({
        snapToChildren       : true,
        snapSlideCenter      : true,
        desktopClickDrag     : true,
        keyboardControls     : true,
        // responsiveSlideContainer : true,
        // responsiveSlides     : true,
        navSlideSelector     : $('.slider-buttons .button'),
        navPrevSelector      : $('.prev-slide'),
        navNextSelector      : $('.next-slide'),
        // autoSlide            : true,
        // autoSlideTimer       : 5000,
        // autoSlideHoverPause  : true,
        infiniteSlider       : true,
        onSlideChange        : slideContentChange,
        onSlideComplete      : slideContentComplete,
        onSliderLoaded       : slideContentLoaded
    });

    function slideContentChange(args) {

        $('.slider-buttons .button').removeClass('selected');
        $('.slider-buttons .button:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');

    }

    function slideContentLoaded(args) {

        $(args.sliderObject).find('.fade1, .fade2').attr('style', '');

        $(args.currentSlideObject).find('.fade1').delay(400).animate({
            opacity: '1'
        }, 1000, 'easeOutQuint');

        $(args.currentSlideObject).find('.fade2').delay(1200).animate({
            opacity: '1'
        }, 1000, 'easeOutQuint');

    }

    function slideContentComplete(args) {

        if(!args.slideChanged) return false;

        $(args.sliderObject).find('.fade1, .fade2, .fade3, .swish1, .swish2').attr('style', '');

        $(args.currentSlideObject).find('.fade1').delay(400).animate({
            opacity: '1'
        }, 1000, 'easeOutQuint');

        $(args.currentSlideObject).find('.fade2').delay(1200).animate({
            opacity: '1'
        }, 1000, 'easeOutQuint');

        $(args.currentSlideObject).find('.fade3').delay(1200).animate({
            opacity: '1'
        }, 1400, 'easeOutQuint');

        $(args.currentSlideObject).find('.swish1').animate({
            left: '125px',
            opacity: '1'
        }, 1000, 'easeOutQuint');

        $(args.currentSlideObject).find('.swish2').delay(1500).animate({
            left: '125px',
            opacity: '1'
        }, 1000, 'easeOutQuint');

    }

});
