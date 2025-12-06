// ---------------- CONFETTI ----------------
const confettiCanvas = document.getElementById("confetti-canvas");
const confetti = confettiCanvas.getContext("2d");
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confettiPieces = [];
for (let i = 0; i < 150; i++) {
  confettiPieces.push({
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * confettiCanvas.height - confettiCanvas.height,
    size: Math.random() * 8 + 2,
    speed: Math.random() * 3 + 1
  });
}

function drawConfetti() {
  confetti.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  confettiPieces.forEach((p) => {
    confetti.fillStyle = ["#4ea3ff", "#7bb6ff", "#a7d0ff"][Math.floor(Math.random() * 3)];
    confetti.fillRect(p.x, p.y, p.size, p.size);
    p.y += p.speed;
    if (p.y > confettiCanvas.height) p.y = -10;
  });

  requestAnimationFrame(drawConfetti);
}
drawConfetti();


// ---------------- MUSIC TOGGLE SYSTEM ----------------

// Create audio players
let birthdaySong = new Audio("happyboris.mp3");
let favSong = new Audio("favsong.mp3");

// Track states
let birthdayPlaying = false;
let favPlaying = false;


// ---- FAVORITE SONG (TOGGLE) ----
document.getElementById("playFav").onclick = () => {

  // If currently playing → pause
  if (favPlaying) {
    favSong.pause();
    favPlaying = false;
    document.getElementById("playFav").innerText = "▶ Your Favorite Song";
  } 
  
  // If not playing → play
  else {
    favSong.play();
    favPlaying = true;
    document.getElementById("playFav").innerText = "⏸ Stop Favorite Song";

    // Stop birthday song if it's playing
    if (birthdayPlaying) {
      birthdaySong.pause();
      birthdayPlaying = false;
      document.getElementById("playSound").innerText = "🎵 Play Birthday Song";
    }
  }
};


// ---- BIRTHDAY SONG (TOGGLE) ----
document.getElementById("playSound").onclick = () => {

  // If currently playing → pause
  if (birthdayPlaying) {
    birthdaySong.pause();
    birthdayPlaying = false;
    document.getElementById("playSound").innerText = "🎵 Play Birthday Song";
  } 
  
  // If not playing → play
  else {
    birthdaySong.play();
    birthdayPlaying = true;
    document.getElementById("playSound").innerText = "⏸ Stop Birthday Song";

    // Stop favorite song if it's playing
    if (favPlaying) {
      favSong.pause();
      favPlaying = false;
      document.getElementById("playFav").innerText = "▶ Your Favorite Song";
    }
  }
};


// ---------------- FLOATING BLUE + WHITE MOVING STARS ----------------
const starContainer = document.getElementById("star-container");
let movingStars = [];
const STAR_COUNT = 120;

for (let i = 0; i < STAR_COUNT; i++) {
  movingStars.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 0.7 + 0.2,
    glow: Math.random() * 0.6 + 0.4,
    color: Math.random() < 0.5 ? "white" : "#4ea3ff"
  });
}

function drawStars() {
  starContainer.innerHTML = "";

  movingStars.forEach((star) => {
    let el = document.createElement("div");
    el.classList.add("star-move");
    el.style.left = star.x + "px";
    el.style.top = star.y + "px";
    el.style.width = star.size + "px";
    el.style.height = star.size + "px";
    el.style.opacity = star.glow;
    el.style.background = star.color;

    el.style.boxShadow =
      star.color === "white"
        ? "0 0 6px white"
        : "0 0 10px #4ea3ff";

    starContainer.appendChild(el);

    star.y += star.speed;
    if (star.y > window.innerHeight) {
      star.y = -10;
      star.x = Math.random() * window.innerWidth;
    }
  });

  requestAnimationFrame(drawStars);
}
drawStars();


// ---------------- LIGHTBOX ----------------
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (lightbox && lightboxImg) {
  document.querySelectorAll(".lightbox-item img").forEach(img => {
    img.onclick = () => {
      lightboxImg.src = img.src;
      lightbox.classList.remove("hidden");
    };
  });

  lightbox.onclick = () => {
    lightbox.classList.add("hidden");
  };
}
