/**
 * @name video-iframe
 * @function handle youtube video iframe
 */

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

$(function(){
  var player;
  function onYouTubeIframeAPIReady(id) {
    player = new YT.Player('video_iframe', {
      height: '360',
      width: '640',
      videoId: id,
      playerVars : {
        autoplay: 1,
        rel: 0,
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    // event.target.playVideo();
  }

  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      // setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function playVideo() {
    player.playVideo();
  }

  function stopVideo() {
    $('iframe#video_iframe').remove();
    $('#video_modal .text-center').append("<div id='video_iframe'></div>")
  }
  $('.modal').modal({
    onOpenEnd: function(e, btn) {
      var videoId = btn.getAttribute("data-video");
      onYouTubeIframeAPIReady(videoId);
    },
    onCloseEnd: function() {
      stopVideo()
    }
  });
  $('.modal .modal-close').click(function(){
    stopVideo();
  })
});

/******** END Video Iframe ********/


/**
 * @name project carousel
 * @function handle carousel project
 */

$(function() {
  var $carousel = $('#featured_carousel');
  // Handle carousel
  $carousel.slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 750,
    fade: true,
    arrows: false
  });
})
/******** END Video carousel ********/