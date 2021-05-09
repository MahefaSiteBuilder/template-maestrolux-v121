/**
 * @name sowcase slider
 * @function handle amd sync two showcase slider
 */

$(function() {
  var $carouselCenter = $('#slider_center');
  var $carouselSide = $('#slider_side');
  var $mobileDot = $('#showcase_mobile_nav li button');
  // Handle carousel tag
  $carouselCenter.slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    asNavFor: '.slider-side'
  });
  $carouselSide.slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 5,
    arrows: false,
    asNavFor: '.slider-center',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  // Handle slick navigation
  $mobileDot.click(function() {
    var index = $(this).data("index");
    $('#showcase_mobile_nav li').removeClass("active");
    $(this).parent().addClass("active");
    $carouselCenter.slick('slickGoTo', index);
  });
  
  $carouselSide.on('afterChange', function(event, slick, currentSlide){
    var active = currentSlide;
    $('#showcase_mobile_nav li').removeClass("active");
    $('#showcase_mobile_nav li:nth-child('+active+')').addClass("active");
  });
});