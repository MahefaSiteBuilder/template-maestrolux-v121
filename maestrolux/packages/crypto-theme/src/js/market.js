/**
 * @name market price carousel
 * @function handle carousel slider
 */

$(function() {
  var $carousel = $('#market_carousel');
  // Handle carousel tag
  $carousel.slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    cssEase: 'linear',
    pauseOnHover: true
  });
});