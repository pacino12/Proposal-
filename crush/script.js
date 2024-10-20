document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('quiz').classList.remove('hidden');
    this.classList.add('hidden');
});

const quizButtons = document.querySelectorAll('.quizBtn');
quizButtons.forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('quiz').classList.add('hidden');
        document.getElementById('result').classList.remove('hidden');
        playFunnySound();
    });
});

document.getElementById('yesBtn').addEventListener('click', function() {
    showFinalScreen(true);
});

document.getElementById('maybeBtn').addEventListener('mouseover', function() {
    this.style.position = 'absolute';
    this.style.top = `${Math.random() * 300}px`;
    this.style.left = `${Math.random() * 300}px`;
});

function showFinalScreen(isYes) {
    if (isYes) {
        document.getElementById('result').classList.add('hidden');
        document.getElementById('final').classList.remove('hidden');
        document.querySelector('.container').classList.add('explode');
        setTimeout(showFireworks, 1000);
    }
}

function showFireworks() {
    let fireworksContainer = document.getElementById('fireworks');
    fireworksContainer.innerHTML = '🎉🎉🎉 Fireworks! 🎉🎉🎉';
    playFunnySound();
}

function playFunnySound() {
    let sound = document.getElementById('funnySound');
    sound.play();
}
