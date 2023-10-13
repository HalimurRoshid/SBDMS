(function ($) {
  "use strict";

  // Dropdown on mouse hover
  // $(document).ready(function () {
  //   function toggleNavbarMethod() {
  //     if ($(window).width() > 992) {
  //       $(".navbar .dropdown")
  //         .on("mouseover", function () {
  //           $(".dropdown-toggle", this).trigger("click");
  //         })
  //         .on("mouseout", function () {
  //           $(".dropdown-toggle", this).trigger("click").blur();
  //         });
  //     } else {
  //       $(".navbar .dropdown").off("mouseover").off("mouseout");
  //     }
  //   }
  //   toggleNavbarMethod();
  //   $(window).resize(toggleNavbarMethod);
  // });
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .nav-item.dropdown")
          .on("mouseenter", function () {
            $(this).addClass("show");
            $(this).find(".dropdown-menu").addClass("show");
          })
          .on("mouseleave", function () {
            $(this).removeClass("show");
            $(this).find(".dropdown-menu").removeClass("show");
          });
      } else {
        $(".navbar .nav-item.dropdown").off("mouseenter").off("mouseleave");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Date and time picker
  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Price carousel
  $(".price-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 45,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // Team carousel
  $(".team-carousel, .related-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 45,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 3,
      },
    },
  });
  // Team carousel
  $(".about-carousel, .related-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 45,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: true,
    loop: true,
  });
  /*===============================
			Clients Slider JS
		=================================*/
  $(".clients-slider").owlCarousel({
    items: 5, // Initially, display 5 items
    autoplay: true,
    autoplayTimeout: 3500,
    margin: 15,
    smartSpeed: 400,
    autoplayHoverPause: true,
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2, // Display 1 item on screens less than 480px wide
      },
      480: {
        items: 2, // Display 2 items on screens between 480px and 768px wide
      },
      768: {
        items: 6, // Display 6 items on screens between 768px and 1170px wide
      },
      1170: {
        items: 6, // Display 6 items on screens 1170px wide or wider
      },
    },
  });

  /*====================
		Preloader JS
	======================*/
  $(window).on("load", function () {
    $(".preloader").addClass("preloader-deactivate");
  });
})(jQuery);
