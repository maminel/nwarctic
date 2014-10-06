$(function() {
    $('#carousel_atc').carouFredSel({
        width: "100%",
        height: "100%",
        // items: 1,
        items: {
            visible: 1,
            start: -1
        },
        scroll: {
            duration: 1000,
            onBefore: function( data ) {
                data.items.visible.children().css( 'opacity', 0 ).delay( 200 ).fadeTo( 400, 1 );
                data.items.old.children().fadeTo( 400, 0 );
            }
        },

        auto                : false,
        prev: {
            button          : "#prev",
            key             : "left"
        },
        next: {
            button          : "#next",
            key             : "right"
        },
        pagination: {
            container       : "#pager",
            deviation       : 1
        },
        swipe: {
          onMouse           : true,
          onTouch           : true
        }
    });

    $('#carousel_star').carouFredSel({
        width: "100%",
        height: "100%",
        // items: 1,
        items: {
            visible: 1,
            start: -1
        },
        scroll: {
            duration: 1000,
            onBefore: function( data ) {
                data.items.visible.children().css( 'opacity', 0 ).delay( 200 ).fadeTo( 400, 1 );
                data.items.old.children().fadeTo( 400, 0 );
            }
        },

        auto                : false,
        prev: {
            button          : "#prev",
            key             : "left"
        },
        next: {
            button          : "#next",
            key             : "right"
        },
        pagination: {
            container       : "#pager",
            deviation       : 1
        },
        swipe: {
          onMouse           : true,
          onTouch           : true
        }
    });
});
