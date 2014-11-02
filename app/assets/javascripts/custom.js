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
        // onSlideComplete      : slideContentComplete,
        // onSliderLoaded       : slideContentLoaded
    });

    function slideContentChange(args) {

        $('.slider-buttons .button').removeClass('selected');
        $('.slider-buttons .button:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');

    }

    function slideContentComplete(args) {

        if(!args.slideChanged) return false;

        /* animation */
        $(args.sliderObject).find('.text1, .text2').attr('style', '');

        $(args.currentSlideObject).find('.text1').animate({
            left: '30px',
            opacity: '1'
        }, 1000, 'easeOutQuint');

        $(args.currentSlideObject).find('.text2').delay(200).animate({
            left: '30px',
            opacity: '1'
        }, 1000, 'easeOutQuint');

    }

    function slideContentLoaded(args) {

        /* animation */
        $(args.sliderObject).find('.text1, .text2').attr('style', '');

        $(args.currentSlideObject).find('.text1').animate({
            left: '30px',
            opacity: '1'
        }, 1000, 'easeOutQuint');

        $(args.currentSlideObject).find('.text2').delay(200).animate({
            left: '30px',
            opacity: '1'
        }, 1000, 'easeOutQuint');

    }

});
