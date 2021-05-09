/**
 * @name video-banner
 * @function handle youtube video banner
 */

$(function(){
  var $youtubeElm = $('#youtube'),
      $cover = $('#banner_cover'),
      $video = $('#banner .video'),
      $btnPlay = $('#btn_play'),
      $btnPlayText = $('#btn_play span'),
      $iconPlay = $('#btn_play .play'),
      $iconPause = $('#btn_play .pause'),
      isPlay = true,
      isMobile = window.matchMedia(mq.mdDown).matches;
  // Initial youtube config
  $youtubeElm.YTPlayer({
    videoId: 'CK1ndZEkBcE',
    width: 1080,
    repeat: true,
    showControls: false,
    realfullscreen: true,
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      ecver: 2,
      origin: 'http://localhost:9010'
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
        $btnPlayText.addClass('hidden');
        $iconPause.show();
      } else {
        player.pauseVideo();
        $iconPlay.show();
        $btnPlayText.removeClass('hidden');
        $iconPause.hide();
      }
    })
  }
});

/******** END Video banner ********/