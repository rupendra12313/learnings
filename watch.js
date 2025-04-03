let timer;
let seconds = 0;
let isRunning = false;

const timeDisplay = document.getElementById('time-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

function updateTime() {
    seconds++;

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;

    timeDisplay.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(remainingSeconds);
}

function formatTime(time) {
    if (time < 10) {
        return '0' + time;
    } else {
        return time;
    }
}

function start() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 1000); // Update every second
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
}

function stop() {
    clearInterval(timer);
    isRunning = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    timeDisplay.textContent = "00:00:00";
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
