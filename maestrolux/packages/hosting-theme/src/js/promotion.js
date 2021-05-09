var transition = {
  section: {
    show: "slideInRight",
    hide: "slideOutLeft",
    delayShow: "delay0s"
  },
  figure: {
    show: "zoomIn",
    hide: "fadeOut",
    delayShow: "delay0-5s"
  },
  img: {
    show: "fadeIn",
    hide: "fadeOut",
    delayShow: "delay1s"
  },
  h2: {
    show: "fadeInUp",
    hide: "fadeOutDown",
    delayShow: "delay1s"
  },
  p: {
    show: "fadeInUp",
    hide: "fadeOutDown",
    delayShow: "delay1-5s"
  },
  '.time': {
    show: "fadeIn",
    hide: "fadeOut",
    delayShow: "delay1-5s"
  }
}

$(function(){
  // animate slider
  $(".anim-slider").animateSlider({
    autoplay: true,
    interval: 10000,
    animations: {
      0: transition,
      1: transition,
      2: transition,
    }
  });
});