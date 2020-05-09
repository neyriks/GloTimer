'use strict';

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'fetch-polyfill';
import 'es6-promise';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calculator from './modules/calculator';
import images from './modules/images';
import sendForm from './modules/sendForm';
import calc from './modules/calc';

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
