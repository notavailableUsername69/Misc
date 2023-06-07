window.onload = function() {
  var audioPlayer = document.getElementById('audioPlayer');
  var playlist = document.getElementById('playlist');
  var links = playlist.getElementsByTagName('a');
  var currentTrack = 0;

  audioPlayer.src = links[currentTrack];

  for (var i = 0; i < links.length; i++) {
      var link = links[i];
      link.addEventListener('click', function(e) {
          e.preventDefault();
          audioPlayer.src = this.getAttribute('href');
          audioPlayer.play();
          currentTrack = Array.from(links).indexOf(this);
      });
  }

  audioPlayer.addEventListener('ended', function() {
      currentTrack++;
      if (currentTrack >= links.length) {
          currentTrack = 0;
      }
      audioPlayer.src = links[currentTrack].getAttribute('href');
      audioPlayer.play();
  });
};