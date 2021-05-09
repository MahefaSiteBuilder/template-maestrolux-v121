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
/**
 * @name featured products carousel
 * @function handle carousel featured products
 */

$(function() {
  var $carousel = $('#product_carousel');
  // Handle carousel tag
  $carousel.slick({
    dots: true,
    speed: 500,
    slidesToShow: 6,
    arrows: false,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  });

  // Handle slick navigation
  $('#prev_product').click(function() {
    $carousel.slick('slickPrev');
  });
  $('#next_product').click(function() {
    $carousel.slick('slickNext');
  });
});
/**
 @name Header
 @function Handle dark/light mode
 @function initial dropdown menu
 @function initial side navigation for mobile
 */

var darkMode = 'false';
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || 'false';
}

var $header = $('#header'),
    $menu = $('#mobile_menu'),
    $slideMenu = $('#slide-menu')
    isOpen = false;

$(document).ready(function(){
  // Dark and Light mode config
  if(darkMode === 'true') {
    $('#app').removeClass('theme--light');
    $('#app').addClass('theme--dark');
    $('#theme_switcher').prop('checked', true);
  }
  $('#theme_switcher').change(function() {
    if($(this).is(':checked')) {
      // dark
      localStorage.setItem('luxiDarkMode', "true");
      $('#app').removeClass('theme--light');
      $('#app').addClass('theme--dark');
    } else {
      // light
      localStorage.setItem('luxiDarkMode', "false");
      $('#app').removeClass('theme--dark');
      $('#app').addClass('theme--light');
    }
  });

  // initial dropdown
  $('.dropdown-trigger').dropdown({
    closeOnClick: false,
    alignment: "left"
  });

  // Initial sidenav for mobile menu
  $('#mobile_menu').click(function() {
    isOpen = !isOpen;
    if(isOpen) {
      $('.sidenav').sidenav('open')  
    } else {
      $('.sidenav').sidenav('close')  
    }
  });

  $('.sidenav').sidenav({
    onOpenStart: function() {
      isOpen = true;
      $header.addClass('open-drawer');
      $menu.addClass('is-active');
      $slideMenu.addClass('menu-open');
    },
    onCloseEnd: function() {
      isOpen = false;
      $header.removeClass('open-drawer');
      $menu.removeClass('is-active');
      $slideMenu.removeClass('menu-open');
    }
  });
})

/******** END Common JS ********/
/**
 * @name Language
 * @function redirect to language specified page
 * @function via js through header and footer
 */

$(function(){
  // Language select in Headed
  $('#lang_menu li a').click(function(){
    var url = window.location.toString(),
        path = window.location.pathname.split('/'),
        path_lang = path[path.length - 2],
        file = path[path.length - 1]
    var lang = $(this).data("lang");
    
    window.location = url.replace(path_lang + "/" + file, lang + "/" + file);
  })
  
  // Language select in footer
  $('#lang_select').on('change', function() {
    var lang = $(this).val(); 
    var url = window.location.toString(),
        path = window.location.pathname.split('/'),
        path_lang = path[path.length - 2],
        file = path[path.length - 1]
    
    if(lang) {
      window.location = url.replace(path_lang + "/" + file, lang + "/" + file);
    }
    return false;
  });
});
/**
 * Handle css class by using Media query
 * @description It will append className to element according media width
 * @alias xs, sm, md, lg, xl
 * @class Up css className: mq-sm-up, mq-md-up, mq-lg-up, mq-xl-up
 * @class Down css className: mq-xs-down, mq-sm-down, mq-md-down, mq-lg-down
 * 
 * @example <div class="other-class mq-sm-up" data-class="for-mobile-above">
 * once screen resized on (min-wdth: 600px)
 * it will become <div class="other-class mq-sm-up for-mobile-above" data-class="for-mobile-above">
 */

var mq = {
  smUp: "screen and (min-wdth: 600px)",
  mdUp: "screen and (min-width: 960px)",
  lgUp: "screen and (min-width: 1280px)",
  xlUp: "screen and (min-width: 1920px)",
  xsDown: "screen and (max-width: 599px)",
  smDown: "screen and (max-width: 959px)",
  mdDown: "screen and (max-width: 1279px)",
  lgDown: "screen and (max-width: 1919px)"
}

function mqAddClass(selectors) {
  $(selectors).each(function(){
    var classes = $(this).data('class');
    $(this).addClass(classes)
  })
}

function mqRemoveClass(selectors) {
  $(selectors).each(function(){
    var classes = $(this).data('class');
    $(this).removeClass(classes)
  })
}

// Define handler action
var handler_smUp = {
      match : function() { mqAddClass('.mq-sm-up')},
      unmatch : function() { mqRemoveClass('.mq-sm-up')}
    },
    handler_mdUp = {
      match : function() { mqAddClass('.mq-md-up')},
      unmatch : function() { mqRemoveClass('.mq-md-up')}
    },
    handler_lgUp = {
      match : function() { mqAddClass('.mq-lg-up')},
      unmatch : function() { mqRemoveClass('.mq-lg-up')}
    },
    handler_xlUp = {
      match : function() { mqAddClass('.mq-xl-up')},
      unmatch : function() { mqRemoveClass('.mq-xl-up')}
    },
    handler_xsDown = {
      match : function() { mqAddClass('.mq-xs-down')},
      unmatch : function() { mqRemoveClass('.mq-xs-down')}
    },
    handler_smDown = {
      match : function() { mqAddClass('.mq-sm-down')},
      unmatch : function() { mqRemoveClass('.mq-sm-down')}
    },
    handler_mdDown = {
      match : function() { mqAddClass('.mq-md-down')},
      unmatch : function() { mqRemoveClass('.mq-md-down')}
    },
    handler_lgDown = {
      match : function() { mqAddClass('.mq-lg-down')},
      unmatch : function() { mqRemoveClass('.mq-lg-down')}
    };

// Register to enquire.js
enquire
  .register(mq.smUp, handler_smUp)
  .register(mq.mdUp, handler_mdUp)
  .register(mq.lgUp, handler_lgUp)
  .register(mq.xlUp, handler_xlUp)
  .register(mq.xsDown, handler_xsDown)
  .register(mq.smDown, handler_smDown)
  .register(mq.mdDown, handler_mdDown)
  .register(mq.lgDown, handler_lgDown);

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
/**
 * @name trending carousel
 * @function handle carousel trending 
 * @description show only in mobile screen
 */

$(function() {
  var $carousel = $('#trending_carousel');
  // Slick go to the last slide
  // Handle carousel tag
  $carousel.slick({
    dots: false,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: false,
  });
});
/**
 * @name video-banner
 * @function handle youtube video banner
 */

$(function(){
  var $youtubeElm = $('#youtube'),
      $cover = $('#banner_cover'),
      $btnPlay = $('#btn_play'),
      $iconPlay = $('#btn_play .play'),
      $iconPause = $('#btn_play .pause'),
      isPlay = true,
      isMobile = window.matchMedia(mq.mdDown).matches;
  // Initial youtube config
  $youtubeElm.YTPlayer({
    videoId: '3_VKCIKsn80',
    width: 1080,
    repeat: true,
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      origin: 'http://localhost:9004'
    },
    callback: function() {
      videoCallbackEvents();
    }
  });
  
  // Access all of YouTube's API events and methods by using player
  var videoCallbackEvents = function() {
    var player = $youtubeElm.data('ytPlayer').player;
    player.addEventListener('onStateChange', function(){
      if(isMobile) {
        player.pauseVideo();
      } else {
        $cover.hide();
      }
      $btnPlay.removeClass('hide');
    });
    // Handle play/pause player
    $btnPlay.click(function(){
      isPlay = !isPlay;
      if(isPlay) {
        player.playVideo();
        $iconPlay.hide();
        $iconPause.show();
      } else {
        player.pauseVideo();
        $iconPlay.show();
        $iconPause.hide();
      }
    })
  }
});

/******** END Video banner ********/
/**
 * @name _common
 * @function handle scroling
 * @function initial parallax, tooltip, carousel, etc
 */


var $header = $("#header");
var $pageNav = $("#page_nav");
var sticky = 0;

if($("#header").length > 0) {
  sticky = header.offsetTop + 100;
}

// Bottom right navigation, including scroll to top
function fixedNav() {
  if (window.pageYOffset > sticky) {
    $header.addClass("fixed");
  } else {
    $header.removeClass("fixed");
  }
}

function fixedFabNav() {
  if (window.pageYOffset > 500) {
    $pageNav.addClass("show");
  } else {
    $pageNav.removeClass("show");
  }
}

// Scroll fixed
window.onscroll = function() {
  fixedNav();
  fixedFabNav();
};

$(document).ready(function(){
  // Preloader
  $('#preloader').delay(1000).fadeOut('fast');
  $('.transition-page').addClass('page-fadeUp-transition-enter').delay(1000).queue(function(){
    $(this)
    .removeClass('page-fadeUp-transition-enter')
    .addClass('page-fadeUp-transition-enter-active')
    .dequeue()
    .delay(1400).queue(function(){
      $(this)
      .removeClass('page-fadeUp-transition-enter-active')
      .addClass('page-fadeUp-transition-exit')
      .dequeue();
    })
  });
  
  // Open Page scroll navigation
  $('.scrollnav').navScroll({
    scrollSpy: true,
    activeParent: true,
    activeClassName: 'current'
  });
  
  // initial wow
  new WOW().init();
  
  // initial parallax
  $('#testimonials, #blog').enllax();
  
  // Accordion init
  $('.collapsible').collapsible();

  // Select
  $('.select').formSelect();

  // Tooltip initial
  $('.tooltipped').tooltip();
  
  // Validate form
  var toastHTML = '<span>Message Sent</span><button onclick="M.Toast.dismissAll()" class="btn-icon waves-effect toast-action"><i class="material-icons">close</i></button>';
  $.validate({
    form: "#contact_form",
    onSuccess: function(form) {
      M.toast({html: toastHTML});
      return false;
    }
  })
});
/******** END Common JS ********/
