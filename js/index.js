const canciones = [
    new Audio("music/0-song.ogg"),
    new Audio("music/1-song.ogg"),
    new Audio("music/2-song.ogg"),
    new Audio("music/3-song.ogg"),
    new Audio("music/4-song.ogg")
];

function updateButtons(index) {
    canciones.forEach((_, i) => {
        const playButton = document.getElementById(`play-button-${i}`);
        const pauseButton = document.getElementById(`pause-button-${i}`);

        if (i === index) {
            if (canciones[i].paused) {
                playButton.style.display = "block";
                pauseButton.style.display = "none";
            } else {
                playButton.style.display = "none";
                pauseButton.style.display = "block";
            }
        } else {
            playButton.style.display = "block";
            pauseButton.style.display = "none";
        }
    });
}

function playMusic(index) {
    canciones.forEach((cancion, i) => {
        if (i !== index) {
            cancion.pause();
            cancion.currentTime = 0;
        }
    });

    canciones[index].play();
    updateButtons(index);
}

function pauseMusic(index) {
    canciones[index].pause();
    updateButtons(index);
}

// Detener canción
function stopMusic(index) {
    canciones[index].pause();
    canciones[index].currentTime = 0;
    updateButtons(index);
}
