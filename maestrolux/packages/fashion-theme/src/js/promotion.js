var transition = {
  section: {
    show: "slideInRight",
    hide: "slideOutLeft",
    delayShow: "delay0s"
  },
  img: {
    show: "fadeInRight",
    hide: "fadeOutLeft",
    delayShow: "delay0-5s"
  },
  h2: {
    show: "fadeInRight",
    hide: "fadeOutLeft",
    delayShow: "delay0-5s"
  },
  h4: {
    show: "fadeIn",
    hide: "fadeOut",
    delayShow: "delay1s"
  },
  article: {
    show: "fadeIn",
    hide: "fadeOut",
    delayShow: "delay1s"
  },
  a: {
    show: "fadeInUp",
    hide: "fadeOutDown",
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
      3: transition
    }
  });
});