$(document).ready(function() {

  // open mob menu

    $(".header__toggle").on("click", function(e) {
        e.preventDefault();
        $(".header-mob").slideToggle();
        $(this).toggleClass("header__toggle--active");
    });

    // faq
    
    $(".faq__item-top").on("click", function() {

      let
          that = $(this),
          submenu = $(".faq__submnenu"),
          that_submenu = that.siblings(submenu);

      if ( that_submenu.is(":visible") ) {
          $(".faq__item-top").removeClass("active");
          submenu.slideUp(300)
      } else {
          $(".faq__item-top").removeClass("active");
          that.addClass("active");
          submenu.slideUp(300)
          that.siblings(submenu).slideDown(300);
      }

  });

});