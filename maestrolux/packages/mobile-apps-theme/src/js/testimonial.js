/**
 * @name testimonial carousel
 * @function handle carousel slider
 */

$(function() {
  var $carouselText = $('#slider_text');
  var $carouselAvatar = $('#slider_avatar');
  // Handle carousel tag
  $carouselText.slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    asNavFor: '.slider-avatar'
  });
  $carouselAvatar.slick({
    dots: false,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    autoplay: true,
    centerPadding: '2px',
    centerMode: true,
    autoplaySpeed: 5000,
    slidesToShow: 7,
    pauseOnHover: false,
    arrows: false,
    asNavFor: '.slider-text',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
});