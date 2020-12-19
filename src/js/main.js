
    $(document).mouseover(function (event) {

        let target = event.target;

         if( !target.classList.contains("header") && $(".header").has(target).length === 0 && !target.classList.contains("submenu") && $(".submenu").has(target).length === 0 ) {
            $(".submenu").hide();
            console.log("hide");
        }

    });

    $(window).on("load resize", function() {

        if( $(window).width() >= 991 ) {

            // submenu on the desctop

            $(".nav_left .nav-item").hover(function(e) {

                e.preventDefault();

                let dataIndex = $(this).data("index"),
                    dataIndexInt  = parseInt(dataIndex);
                    submenu  = $(".submenu");

                    $(".submenu").hide();
                    $(".submenu[data-sub='"+dataIndexInt+"']").show();
            });
      
        } else if( $(window).width() < 991 ) {

            // submenu on the mobile

            $(".nav_left .nav-item").click(function(e) {

                e.preventDefault();

                console.log("click");

                let dataIndex = $(this).data("index"),
                    dataIndexInt  = parseInt(dataIndex);
                    submenu  = $(".submenu");

                    $(".nav-item").removeClass("active");
                    $(".submenu").hide();


                    $(".nav-item[data-index='"+ dataIndexInt +"']").addClass("active");
                    $(".submenu[data-sub='"+dataIndexInt+"']").show();
                    $("body, html").css("overflow-y", "hidden");
            });

                // burger close

            $(document).mouseup(function (event) {
                if ($(".submenu__modal").is(":visible")) {
                    var popup = $(".submenu__modal");
                    if (!popup.is(event.target) && popup.has(event.target).length === 0) {
                        $(".submenu__modal-overlay").removeClass("open");
                        $("body, html").css("overflow-y", "");
                    }
                }
            });

        }
      
      });

$(document).ready(function() {

    // close submenu

    $(".nav_right, .cart_and_search").hover(function() {
        $(".submenu").hide();
        console.log()
    });
    
    // search

    $(".search__icon").on("click", function() {

        let field = $(".search__field"),
            that  = $(this);

        if( field.is(":visible") ) {

            that.removeClass("active");
            field.hide();

        } else {

            that.addClass("active");
            field.show();

        }

    });
 
    // burger

    $(".open-menu-js").on("click", function() {
  
      $(".submenu__modal-overlay").addClass("open");
      $(".nav-item[data-index='"+ 1 +"']").addClass("active");
      $(".submenu[data-sub='"+ 1 +"']").show();
      $("body, html").css("overflow-y", "hidden");
  
    });


    // faq
    
    $(".faq__item").on("click", function(e) {


        let
            that = $(this),
            submenu = $(".faq__submnenu"),
            that_submenu = that.find(submenu);
    
        if ( that_submenu.is(":visible") ) {
            $(".faq__item-top").removeClass("active");
            $(".faq__item").removeClass("open");
            that.removeClass("open");
            submenu.slideUp(300)
        } else {
            $(".faq__item-top").removeClass("active");
            $(".faq__item").removeClass("open");
            that.addClass("open");
            that.find(".faq__item-top").addClass("active");
            submenu.slideUp(300)
            that.find(submenu).slideDown(300);
        }
    
    
    });

});