const video = document.querySelector("video");
video.currentTime = 5;
function playPause() {
  video.paused ? video.play() : video.pause();
}
function stopVideo() {
  video.pause();
  if (video.currentTime) {
    video.currentTime = 0;
  }
}
function replayVideo() {
  video.currentTime = 0;
  video.play();
}
function increaseVolume() {
  if (video.volume < 1) {
    video.volume = parseFloat(video.volume + 0.1).toFixed(1);
  }
}
function decreaseVolume() {
  if (video.volume > 0) {
    video.volume = parseFloat(video.volume - 0.1).toFixed(1);
  }
}
function muteVolume() {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
}
