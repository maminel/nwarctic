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
        // scrollbar            : true,
        // scrollbarHide        : false,
        // scrollbarLocation    : 'bottom',
        // scrollbarHeight      : '6px',
        // scrollbarBackground  : 'url(_img/some-img.png) repeat 0 0',
        // scrollbarBorder      : '1px solid #000',
        // scrollbarMargin      : '0 30px 16px 30px',
        // scrollbarOpacity     : '0.75',
        // scrollbarContainer   : '.sliderContainer .scrollbarContainer',
        snapToChildren       : true,
        desktopClickDrag     : true,
        keyboardControls     : true,
        // responsiveSlideWidth : true,
        infiniteSlider       : true,
        // snapSlideCenter      : true,
        // autoSlide            : true,
        navSlideSelector     : $('.slider-buttons .button'),
        navPrevSelector      : $('.prev-slide'),
        navNextSelector      : $('.next-slide'),
        onSlideChange        : slideContentChange,
        onSlideComplete      : slideContentComplete,
        onSliderLoaded       : slideContentLoaded
    });

    function slideContentChange(args) {

        $('.slider-buttons .button').removeClass('selected');
        $('.slider-buttons .button:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');

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
        }, 1000, 'easeOutQuint');

        $(args.currentSlideObject).find('.swish1').animate({
            left: '125px',
            opacity: '1'
        }, 1000, 'easeOutQuint');

        $(args.currentSlideObject).find('.swish2').delay(1000).animate({
            left: '125px',
            opacity: '1'
        }, 1000, 'easeOutQuint');

    }

    function slideContentLoaded(args) {

        $(args.sliderObject).find('.fade1, .fade2, .fade3, .swish1, .swish2').attr('style', '');

        $(args.currentSlideObject).find('.fade1').delay( 400 ).animate({
            opacity: '1'
        }, 1000, 'easeOutQuint');

        $(args.currentSlideObject).find('.fade2').delay( 1200 ).animate({
            opacity: '1'
        }, 1000, 'easeOutQuint');

        $(args.currentSlideObject).find('.fade3').delay(1200).animate({
            opacity: '1'
        }, 1500, 'easeOutQuint');

        $(args.currentSlideObject).find('.swish1').animate({
            left: '125px',
            opacity: '1'
        }, 1000, 'easeOutQuint');

        $(args.currentSlideObject).find('.swish2').delay(1000).animate({
            left: '125px',
            opacity: '1'
        }, 1500, 'easeOutQuint');

    }

});
