/**
 * @name testimonial carousel
 * @function handle carousel tag
 */

$(function() {
  var $carousel = $('#testimonial_carousel');
  var $mobileDot = $('#testi_mobile_nav li button');
  // Handle carousel tag
  $carousel.slick({
    infinite: true,
    dots: false,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000
  });
  
  $carousel.on('afterChange', function(event, slick, currentSlide){
    var active = currentSlide + 1;
    $('#testi_mobile_nav li').removeClass("active");
    $('#testi_mobile_nav li:nth-child('+active+')').addClass("active");
  });
  
  // Handle slick navigation
  $('#prev_testi').click(function() {
    $carousel.slick('slickPrev');
  });
  $('#next_testi').click(function() {
    $carousel.slick('slickNext');
  });
  
  $mobileDot.click(function() {
    var index = $(this).data(index);
    $('#testi_mobile_nav li').removeClass("active");
    $(this).parent().addClass("active");
    $carousel.slick('slickGoTo', index);
  });
});