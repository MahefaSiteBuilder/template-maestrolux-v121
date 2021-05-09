/**
 * @name Banner Animation
 * @function handle canvas animation using vanta.js
 */

var netEl = document.getElementById('net_art');
$(function(){
  setTimeout(function() {
    if(netEl !== null) {
      window.VANTA.NET({
        el: '#net_art',
        color: '#03A9F4',
        backgroundColor: '#B3E5FC',
        backgroundAlpha: 0,
        points: 4,
        maxDistance: 18,
        spacing: 12
      })
    }
  }, 1000);
});

/******** END Banner Animation ********/