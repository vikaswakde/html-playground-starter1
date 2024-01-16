// Get all keys with the class 'key'
const keys = document.querySelectorAll(".key");

// Function to play audio
function playAudio(key) {
  const audioElement = document.querySelector(`audio[data-key="${key}"]`);
  if (audioElement) {
    audioElement.currentTime = 0; // Rewind to the start
    audioElement.play();
  }
}

// Event listener for keydown
document.addEventListener("keydown", (event) => {
  console.log("Keydown event:", event.key);
  const key = event.key.toLowerCase();
  const keyElement = document.getElementById(key);

  if (keyElement) {
    keyElement.classList.add("active"); // Apply the 'active' class
    playAudio(key);
  }
});

// Event listener for keyup
document.addEventListener("keyup", (event) => {
  console.log("Keyup event:", event.key);
  const key = event.key.toLowerCase();
  const keyElement = document.getElementById(key);

  if (keyElement) {
    keyElement.classList.remove("active"); // Remove the 'active' class
  }
});
