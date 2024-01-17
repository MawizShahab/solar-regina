document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: -100,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 800,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000, // Set the autoplay delay to 5000 milliseconds (5 seconds)
      disableOnInteraction: false, // Allow manual interaction (e.g., slide change by user) without stopping autoplay
    },
  });
});

/* Handle to close the burger-menu on mobile when any of the menu item clicked */

$(document).ready(function () {
  // Close Bootstrap burger menu when a menu item is clicked
  $(".navbar-nav .link a").on("click", function () {
    // Check if the burger menu is open
    if ($("#navbarToggler").attr("aria-expanded") === "true") {
      // Close the burger menu
      $("#navbarNav").collapse("hide");
    }
  });
});

/* Our team slider code */

$(document).ready(function () {
  $(".team-slider .owl-carousel").owlCarousel({
    items: 3, // Display three images per slide
    nav: true, // Show navigation arrows
    loop: true, // Enable infinite loop
    margin: 15, // Add spacing between images
    autoplay: true, // Add autoplay
    autoplayTimeout: 3000, // Set autoplay interval to 5000 milliseconds (5 seconds)
    responsive: {
      0: {
        items: 1, // On small screens, show one image per slide
      },
      768: {
        items: 2, // On medium screens, show two images per slide
      },
      992: {
        items: 3, // On larger screens, show three images per slide
      },
    },
  });
});
