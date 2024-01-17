var currentlyPlayingAudio = null;

function playAudio(audioFile) {
  // Stop the currently playing audio
  if (currentlyPlayingAudio !== null) {
    currentlyPlayingAudio.pause();
    currentlyPlayingAudio.currentTime = 0;
  }

  // Create and play the new audio
  var audio = new Audio("piano-keys-music/" + audioFile);
  audio.play();

  // Set the new audio as the currently playing audio
  currentlyPlayingAudio = audio;
}
