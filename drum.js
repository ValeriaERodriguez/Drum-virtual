
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // Evita que la funcion se ejecute toda al mismo tiempo
    audio.currentTime = 0; //volver al inicio
    audio.play();
    key.classList.add();
}

function removeTransition(e) {
    if (e.propertyName !== 'Transform') return; //ssáltatelo si no es una transformación
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

document.addEventListener('click', playSound);



