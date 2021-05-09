/**
 * @name blog carousel
 * @function handle carousel tag
 */

$(function() {
  var $carouselImg = $('#blog_img_carousel');
  var $carouselText = $('#blog_text_carousel');
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
    asNavFor: '.slider-blog-text'
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
    asNavFor: '.slider-blog-image'
  });
  
  // Handle slick navigation
  $('#prev_blog').click(function() {
    $carouselText.slick('slickPrev');
  });
  $('#next_blog').click(function() {
    $carouselText.slick('slickNext');
  });
});