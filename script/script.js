'use strict';
window.addEventListener('DOMContentLoaded', () => {


    // Timer
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');


        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return { timeRemaining, hours, minutes, seconds };
        }

        function formatTime(time) {
            if (time < 10) {
                time = '0' + time;
            }
            return time;
        }


        setInterval(() => {
            const timer = getTimeRemaining();
            timerHours.textContent = formatTime(timer.hours);
            timerMinutes.textContent = formatTime(timer.minutes);
            timerSeconds.textContent = formatTime(timer.seconds);
        }, 1000);
        if (getTimeRemaining <= 0) {
            clearInterval(countTimer);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }

    }
    countTimer('23 april 2020');
});
