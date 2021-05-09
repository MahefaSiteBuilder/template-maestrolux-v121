var transition = {
  section: {
    show: "slideInRight",
    hide: "slideOutLeft",
    delayShow: "delay0s"
  },
  figure: {
    show: "fadeInRight",
    hide: "fadeOutLeft",
    delayShow: "delay0-5s"
  },
  h4: {
    show: "fadeInRight",
    hide: "fadeOutLeft",
    delayShow: "delay0s"
  },
  article: {
    show: "fadeIn",
    hide: "fadeOut",
    delayShow: "delay0-5s"
  },
  '.property': {
    show: "fadeIn",
    hide: "fadeOut",
    delayShow: "delay1-5s"
  },
  a: {
    show: "fadeInUp",
    hide: "fadeOutDown",
    delayShow: "delay0-5s"
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
      3: transition
    }
  });
});