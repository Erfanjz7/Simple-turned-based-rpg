// Initialize audio elements
const bgm = document.getElementById("bgm");
const muteBtn = document.getElementById("muteBtn");
let isMuted = false;

// Set initial volume (adjust as needed)
bgm.volume = 0.5;

// Mute toggle function
function toggleMute() {
    isMuted = !isMuted;
    bgm.muted = isMuted;
    const icon = document.querySelector('.mute-button .icon');
    icon.classList.toggle('fa-volume-up', !isMuted);
    icon.classList.toggle('fa-volume-mute', isMuted);
    muteBtn.classList.toggle('muted', isMuted);
  }
// Event listeners
muteBtn.addEventListener("click", toggleMute);

// Audio initialization handler
function initAudio() {
  bgm.play().catch(error => {
    console.log("Autoplay prevented, waiting for user interaction");
  });
}

// Start audio on first user interaction
document.addEventListener("click", function firstClickHandler() {
  initAudio();
  document.removeEventListener("click", firstClickHandler);
});

// Game functions
function newGame() {
  alert("New Game selected");
  // Add your actual game initialization code here
}

function loadGame() {
  alert("Load Game selected");
  // Add your game loading logic here
}

function settings() {
  alert("Settings selected");
  // Add settings menu implementation here
}

// Optional: Initialize audio when window loads (may not work due to browser policies)
window.addEventListener("load", () => {
  bgm.play().catch(error => {
    console.log("Autoplay blocked - waiting for user interaction");
  });
});