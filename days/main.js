'use strict';
const timerNow = document.querySelector('#tiwerNow');
const data = new Date();
const weekday = new Array(7);
weekday[0] = "Воскресенье";
weekday[1] = "Понедельник";
weekday[2] = "Вторник";
weekday[3] = "Среда";
weekday[4] = "Четверг";
weekday[5] = "Пятница";
weekday[6] = "Суббота";
const helloDay = new Date().getHours();
function helloBuddy() {
    if (helloDay > 1 && helloDay < 4) {
        console.log('Доброй ночи');
    } else if (helloDay > 5 && helloDay < 12) {
        console.log('Доброе утро');
    } else if (helloDay > 13 && helloDay < 23) {
        console.log('Добрый день');
    } else if (helloDay > 24 && helloDay < 1) {
        console.log('Доброй ночи');
    }
}
helloBuddy();
timerNow.textContent('Сегодня: ' + weekday[data.getDay()]);
console.log('Текущее время: ' + data.toLocaleTimeString('en'));
function countTimer(deadline) {
    function getTimeRemaining() {
        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60) % 24,
            days = Math.floor((timeRemaining / 60 / 60) / 24);
        console.log('До нового года осталось: ' + days + ' дней');
        return { timeRemaining, hours, minutes, seconds, days };
    }
    getTimeRemaining();
}
countTimer('1 january 2021');


