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

        const updateTimer = setInterval(() => {
            const timer = getTimeRemaining();
            timerHours.textContent = formatTime(timer.hours);
            timerMinutes.textContent = formatTime(timer.minutes);
            timerSeconds.textContent = formatTime(timer.seconds);

            if (timer.timeRemaining < 0) {
                clearInterval(updateTimer);
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }, 1000);
    }
    countTimer('30 april 2020');
    // Menu
    const toogleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));
        // Плавная прокрутка
        const anchors = document.querySelectorAll('li>a[href^="#"]');
        console.log(anchors);
        for (const anchor of anchors) {
            anchor.addEventListener('click', event => {
                event.preventDefault();
                const blockID = anchor.getAttribute('href');
                document.querySelector('' + blockID).scrollIntoVeiw({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
        // Плавная прокрутка для кнопки.
        const btnScrollDown = document.querySelector('a[href="#service-block"]');
        for (const dropDown of btnScrollDown) {
            dropDown.addEventListener('click', e => {
                e.preventDefault();
                const blockID = dropDown.getAttribute('href');
                document.querySelector('' + blockID).scrollIntoVeiw({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
        // Убираем анимацию у телефонов
        let count = -100;
        const menuAnimation = () => {
            if (document.documentElement.clientWidth  < 768) { // Проверка на экран
                menu.style.transition = 'none';
                return;
            }
            const fps = requestAnimationFrame(menuAnimation); //вычисляем фпс
            count += 2;
            menu.style.transform = `translate ${count}%`;
            if (count === 0) {
                cancelAnimationFrame(fps);
            }
        };
        menuAnimation();
    };
    toogleMenu();
    //popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close');
        popupBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
            });
        });
        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };
    togglePopUp();
});
