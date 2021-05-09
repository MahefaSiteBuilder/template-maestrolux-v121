/**
 * @name trending carousel
 * @function handle carousel trending 
 * @description show only in mobile screen
 */

$(function() {
  var $carousel = $('#trending_carousel');
  // Slick go to the last slide
  // Handle carousel tag
  $carousel.slick({
    dots: false,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: false,
  });
});