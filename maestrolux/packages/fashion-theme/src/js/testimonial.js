/**
 * @name testimonial carousel
 * @function handle carousel tag
 */

$(function() {
  var $carouselImg = $('#testi_img_carousel');
  var $carouselText = $('#testi_text_carousel');
  // Handle carousel tag
  $carouselImg.slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    fade: true,
    arrows: false,
    asNavFor: '.slider-testi-text'
  });
  $carouselText.slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    pauseOnHover: false,
    arrows: false,
    asNavFor: '.slider-testi-image'
  });
  
  // Handle slick navigation
  $('#prev_testi').click(function() {
    $carouselText.slick('slickPrev');
  });
  $('#next_testi').click(function() {
    $carouselText.slick('slickNext');
  });
});