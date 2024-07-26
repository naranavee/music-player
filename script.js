const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const rewindButton = document.getElementById('rewind');
const forwardButton = document.getElementById('forward');
const progress = document.getElementById('progress');
const volumeControl = document.getElementById('volume');
const albumArt = document.getElementById('album-art');

let tracks = ['tracks/track1.mp3', 'tracks/track2.mp3', 'tracks/track3.mp3','tracks/track4.mp3','tracks/track5.mp3','tracks/track6.mp3'];
let albumArts = ['images/album-art1.jpg', 'images/album-art2.jpg', 'images/album-art3.jpg'];
let currentTrack = 0;

function loadTrack(index) {
    audio.src = tracks[index];
    albumArt.src = albumArts[index];
    audio.play();
}

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause';
    } else {
        audio.pause();
        playButton.textContent = 'Play';
    }
});

nextButton.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
});

prevButton.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
});

rewindButton.addEventListener('click', () => {
    audio.currentTime -= 10;
});

forwardButton.addEventListener('click', () => {
    audio.currentTime += 10;
});

volumeControl.addEventListener('input', (event) => {
    audio.volume = event.target.value;
});

audio.addEventListener('timeupdate', () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener('input', (event) => {
    audio.currentTime = (event.target.value / 100) * audio.duration;
});

// Load the first track
loadTrack(currentTrack);
