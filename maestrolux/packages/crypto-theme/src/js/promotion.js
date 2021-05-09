var transition = {
  section: {
    show: "slideInRight",
    hide: "slideOutLeft",
    delayShow: "delay0s"
  },
  '.img-wrap': {
    show: "fadeInRight",
    hide: "fadeOutLeft",
    delayShow: "delay1s"
  },
  h2: {
    show: "fadeInUp",
    hide: "fadeOutDown",
    delayShow: "delay0-5s"
  },
  p: {
    show: "fadeIn",
    hide: "fadeOut",
    delayShow: "delay1s"
  },
  '.time': {
    show: "fadeInRight",
    hide: "fadeOutLeft",
    delayShow: "delay1s"
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
      3: transition,
    }
  });
});