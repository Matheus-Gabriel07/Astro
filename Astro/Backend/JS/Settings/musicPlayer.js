import songs from "/Astro/Backend/JS/Playlist/playlist-Second.js";

const player = document.querySelector("#player")
const musicName = document.querySelector("#musicName")
const artistName = document.querySelector("#artistName")
const imgSong = document.querySelector("#imgSong")
const heartMusic = document.querySelector("#heartMusic")
const playPauseButton = document.querySelector("#playPauseButton")
const prevButton = document.querySelector("#prevButton")
const nextButton = document.querySelector("#nextButton")
const currentTime = document.querySelector("#currentTime")
const duration = document.querySelector("#duration")
const progressBar = document.querySelector(".progress-bar")
const progress = document.querySelector(".progress")
const voulmeSom = document.querySelector("#voulmeSom")
const volumeButton = document.querySelector("#volumeButton")

// Icones para botão
const textButtonPlay = "<i class='bx bx-caret-right'></i>";
const textButtonPause = "<i class='bx bx-pause'></i>";
const textMutedAudio = "<i class='fi fi-ss-volume-mute'></i>";
const textNormalAudio = "<i class='fi fi-ss-volume'></i>";
const textNormalHeartMusic = "<i class='fi fi-rr-heart'>"
const textLikeHeartMusic = "<i class='fi fi-sr-heart'></i>"

// Variaveis globais
let index = 0;
let isMuted = false;
let liked = false;

//Eventos
document.addEventListener("keydown", pressPrevNext);
prevButton.onclick = () => prevNextMusic("prev");
nextButton.onclick = () => prevNextMusic();
playPauseButton.onclick = () => playPause();
player.ontimeupdate = () => updateTime();
volumeButton.onclick = () => stateButtonVolume();
heartMusic.onclick = () => likeMusic();

const playPause = () => {
  if (player.paused) {
    player.play();
    playPauseButton.innerHTML = textButtonPause;
  } else {
    player.pause();
    playPauseButton.innerHTML = textButtonPlay;
  }
};

const updateTime = () => {
  const currentMinutes = Math.floor(player.currentTime / 60);
  const currentSeconds = Math.floor(player.currentTime % 60);
  currentTime.textContent = currentMinutes + ":" + formatZero(currentSeconds);

  const durationFormatted = isNaN(player.duration) ? 0 : player.duration;
  const durationMinutes = Math.floor(durationFormatted / 60);
  const durationSeconds = Math.floor(durationFormatted % 60);
  duration.textContent = durationMinutes + ":" + formatZero(durationSeconds);

  const progressWidth = durationFormatted
    ? (player.currentTime / durationFormatted) * 100
    : 0;

  progress.style.width = progressWidth + "%";
};

const formatZero = (n) => (n < 10 ? "0" + n : n);

progressBar.onclick = (e) => {
  const newTime = (e.offsetX / progressBar.offsetWidth) * player.duration;
  player.currentTime = newTime;
};

// Range Volume
document.addEventListener("DOMContentLoaded", function () {
  player.volume = voulmeSom.value;
  volumeButton.innerHTML = textNormalAudio;

  voulmeSom.addEventListener("input", function () {
    player.volume = voulmeSom.value;

    if (voulmeSom.value == 0) {
      volumeButton.innerHTML = textMutedAudio;
    } else {
      volumeButton.innerHTML = textNormalAudio;
    }
  });
});

const stateButtonVolume = () => {
  isMuted = !isMuted; // Alterna entre mutar e desmutar
  player.muted = isMuted;

  if (player.muted = isMuted) {
    volumeButton.innerHTML = textMutedAudio;
    
  } else {
    volumeButton.innerHTML = textNormalAudio;
    
  }
};

//Like music
const likeMusic = () => {
  liked = !liked;
  player.likeMusic = liked;

  if (player.likeMusic = liked) {
    heartMusic.innerHTML = textLikeHeartMusic;
  } else {
    heartMusic.innerHTML = textNormalHeartMusic;
  }
};

// Proximas faixas
const prevNextMusic = (type = "next") => {
  if ((type == "next" && index + 1 === songs.length) || type === "init") {
    index = 0;
  } else if (type == "prev" && index === 0) {
    index = songs.length;
  } else {
    index = type === "prev" && index ? index - 1 : index + 1;
  }

  player.src = songs[index].src;
  musicName.innerHTML = songs[index].name;
  artistName.innerHTML = songs[index].artist;
  imgSong.src = songs[index].imgSong;
  heartMusic.innerHTML = textNormalHeartMusic;
  
  if (type !== "init") playPause();
  updateTime();
};

player.onended = () => {
  prevNextMusic();
};

// Keyboard atalhos
function pressPrevNext(event) {
  if (event.key === "a" || event.key === "A") {
    prevNextMusic("prev");
  }
  if (event.key == "d" || event.key == "D") {
    prevNextMusic();
  }
  if (event.key === "m" || event.key === "M") {
    stateButtonVolume();
  }
  if (event.key == 'p' || event.key == 'P'){
    playPause();
  }
}

prevNextMusic("init");
