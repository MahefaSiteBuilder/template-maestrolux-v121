/**
 * @name gallery carousel
 * @function handle carousel gallery
 */

$(function() {
  var $carousel = $('#gallery_carousel');
  // Handle carousel tag
  $carousel.slick({
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    arrows: false
  });
  
  $(".filter button").click(function(){
    var name = $(this).data("filter");
    $(".filter button").removeClass("selected");
    $(this).addClass("selected");
    if($(".massonry .item[data-category="+name+"]").length < 1) {
      $('#no_data').removeClass("hide")
    } else {
      $('#no_data').addClass("hide")
    }

    if (name !== 'all') {
      $(".massonry .item").css({"visibility": "hidden"}).hide();
      setTimeout(function() {
        $(".massonry .item[data-category="+name+"]").css({"visibility": "visible"}).show();
      }, 10)
    } else {
      setTimeout(function() {
        $(".massonry .item").css({"visibility": "visible"}).show();
      }, 10)
    }
    $(".massonry .item").removeClass("loaded");
    setTimeout(function() {
      $(".massonry .item").addClass("loaded");
    }, 700)
  });
});