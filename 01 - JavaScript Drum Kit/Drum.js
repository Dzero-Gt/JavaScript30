function playSound(e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return;  //stops function if invalid key is entered
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return; //skip if not transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);