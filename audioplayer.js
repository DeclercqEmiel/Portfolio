function createAudioPlayer() {
  var audioPlayer;
  var trackList;
  var trackListLen;
  var currentTrack = 0;
  var informationDiv;
  var progressbar;
  var progressbarWidth;
  var progressmeter;

  return {
    init: init,
  };

  function play() {
    audioPlayer.play();
  }

  function pause() {
    audioPlayer.pause();
  }

  function stop() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  }

  function seeking(e) {
    var percent = e.offsetX / progressbarWidth;
    audioPlayer.currentTime = percent * audioPlayer.duration;
  }

  function displayTime(seconds) {
    var minutes = parseInt(seconds / 60);
    seconds = parseInt(seconds - minutes * 60);
    seconds = ("0" + seconds).slice(-2);
    return minutes + ":" + seconds;
  }

  function updateTime() {
    informationDiv.innerHTML =
      displayTime(audioPlayer.currentTime) +
      " / " +
      displayTime(audioPlayer.duration);
    var percent = audioPlayer.currentTime / audioPlayer.duration;
    progressmeter.style.width = percent * progressbarWidth + "px";
  }

  function playCurrentTrack() {
    audioPlayer.pause();
    audioPlayer.src = trackList[currentTrack].src;
    audioPlayer.load();
    audioPlayer.play();
    updateTime();
  }

  function init(playerElement) {
    trackList = JSON.parse(playerElement.textContent);
    trackListLen = trackList.length;
    audioPlayer = new Audio();
    audioPlayer.addEventListener("ended", function () {
      playNext();
    });
    audioPlayer.addEventListener("timeupdate", function () {
      updateTime();
    });
    audioPlayer.addEventListener("loadedmetadata", function () {
      updateTime();
    });
    audioPlayer.src = trackList[currentTrack].src;

    informationDiv = document.createElement("div");
    informationDiv.className = "audio-player-info";

    var stopButton = document.createElement("button");
    stopButton.innerHTML = '<i class="fa fa-stop" aria-hidden="true"></i>';
    stopButton.ariaLabel = "Stop";
    stopButton.className = "audioplayer-button";
    stopButton.onclick = stop;

    var playButton = document.createElement("button");
    playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    playButton.ariaLabel = "Play";
    playButton.className = "audioplayer-button";
    playButton.onclick = play;

    var pauseButton = document.createElement("button");
    pauseButton.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    pauseButton.ariaLabel = "Pause";
    pauseButton.className = "audioplayer-button";
    pauseButton.onclick = pause;

    var buttonsElement = document.createElement("div");
    buttonsElement.className = "audioplayer-buttons";

    playerElement.innerHTML = "";
    playerElement.append(informationDiv);
    playerElement.append(buttonsElement);
    buttonsElement.append(playButton);
    buttonsElement.append(pauseButton);
    buttonsElement.append(stopButton);
  }
}

window.onload = function () {
  var audioPlayers = document.querySelectorAll(".audio-player");
  for (var i = 0; i < audioPlayers.length; i++) {
    var player = createAudioPlayer();
    player.init(audioPlayers[i]);
  }
};
