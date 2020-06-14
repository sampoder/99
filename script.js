function setup() {
  
  const values = Object.values(mainData)
  const randomValue = values[parseInt(Math.random() * values.length)]
  var player;
  var request = new XMLHttpRequest();
  request.open("GET", "https://friendly-words.glitch.me/word-pairs", true);
  request.onload = function() {
    
    var div_id_random = JSON.parse(this.response)[0];
    console.log(div_id_random)
    document.getElementById('player').innerHTML=String("<div id = '").concat(String(div_id_random),"'></div><button id='de' onclick='setup()'>Watch</button>")
    
    player = new YT.Player(String(div_id_random), {
      width: '95%',
      videoId: randomValue['ID'],
      playerVars: {
        end: randomValue['Time Seconds']- 10

      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    });
    

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
  request.send(); 

}