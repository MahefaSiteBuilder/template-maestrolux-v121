/**
 * @name featured products carousel
 * @function handle carousel featured products
 */

$(function() {
  var $carousel = $('#product_carousel');
  // Handle carousel tag
  $carousel.slick({
    dots: true,
    speed: 500,
    slidesToShow: 6,
    arrows: false,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  });

  // Handle slick navigation
  $('#prev_product').click(function() {
    $carousel.slick('slickPrev');
  });
  $('#next_product').click(function() {
    $carousel.slick('slickNext');
  });
});