document.addEventListener('DOMContentLoaded', function () {
    var music = document.getElementById('background-music');

    // Attempt to play the music
    music.play().then(() => {
        console.log('Music is playing.');
    }).catch((error) => {
        console.log('Autoplay failed, will require user interaction.');
        // Handle autoplay restrictions here, like showing a play button or alert
    });
});