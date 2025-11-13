(function($) {

    "use strict";
    

      var initSlider = function () {

        var swiper = new Swiper(".product-swiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
              el: "#featured-products .swiper-pagination",
              clickable: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              767: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1299: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            },
          });

          var swiper = new Swiper(".review-swiper", {
            spaceBetween: 30,
            pagination: {
              el: "#testimonials .swiper-pagination",
              clickable: true,
            },
          });
    
      };

      $(".youtube").colorbox({
          iframe: true,
          innerWidth: 960,
          innerHeight: 585
      });    

      // document ready
      $(document).ready(function () {
        initSlider();
      }); // document ready
        
})(jQuery);
