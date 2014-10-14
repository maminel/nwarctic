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
// Carousel
// ===========================

$(function() {
    $('#carousel_atc').carouFredSel({
        width: "100%",
        height: "100%",
        items: 1,
        // items: {
        //     visible: 1,
        //     start: 0
        // },
        scroll: {
            duration: 1000,
            pauseOnHover: true,
            onBefore: function( data ) {
                data.items.visible.children().css( 'opacity', 0 ).delay( 200 ).fadeTo( 400, 1 );
                data.items.old.children().fadeTo( 400, 0 );
            }
        },
        auto                : true,
        prev: {
            button          : "#prev",
            key             : "left"
        },
        next: {
            button          : "#next",
            key             : "right"
        },
        pagination: {
            container       : "#pager"
        },
        swipe: {
          onMouse           : true,
          onTouch           : true
        }
    });

    $('#carousel_star').carouFredSel({
        width: "100%",
        height: "100%",
        items: 1,
        // items: {
        //     visible: 1,
        //     start: 0
        // },
        scroll: {
            duration: 1000,
            pauseOnHover: true,
            onBefore: function( data ) {
                data.items.visible.children().css( 'opacity', 0 ).delay( 200 ).fadeTo( 400, 1 );
                data.items.old.children().fadeTo( 400, 0 );
            }
        },
        auto                : true,
        prev: {
            button          : "#prev",
            key             : "left"
        },
        next: {
            button          : "#next",
            key             : "right"
        },
        pagination: {
            container       : "#pager"
        },
        swipe: {
          onMouse           : true,
          onTouch           : true
        }
    });
});
