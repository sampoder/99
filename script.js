function setup() {
  const values = Object.values(mainData)
  const randomValue = values[parseInt(Math.random() * values.length)]
  var player;
  function onYouTubePlayerAPIReady() {
      player = new YT.Player('player', {
        width: '640',
        height: '390',
        videoId: '0Bmhjf0rKe8',
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      });
  }

  // autoplay video
  function onPlayerReady(event) {
      event.target.playVideo();
  }

  // when video ends
  function onPlayerStateChange(event) {        
      if(event.data === 0) {          
          alert('done');
      }
  }

}