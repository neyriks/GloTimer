'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calculator from './modules/calculator';
import images from './modules/images';
import sendForm from './modules/sendForm';
import calc from './modules/calculator';

// Timer
countTimer('30 may 2020');
// Menu
toggleMenu();
//popup
togglePopUp();
// табы
tabs();
// Слайдер
slider();
// Калькулятор
calculator();
// Смена аватара
images();

// Калькулятор
calc(100);
//send-ajax-form
sendForm();
