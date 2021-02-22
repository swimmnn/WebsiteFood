import tabs from './moduls/tabs';
import modal from './moduls/modal';  
import timer from './moduls/timer';
import cards from './moduls/cards';
import slider from './moduls/slider';
import forms from './moduls/forms';
import calculator from './moduls/calculator';
import {openModal} from './moduls/modal';

window.addEventListener('DOMContentLoaded', () => { 
    
    const modalTimeId = setTimeout(() => openModal('.modal', modalTimeId), 50000); 

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimeId);
    timer('.timer', '2021-07-10');
    cards();
    slider({
        container:'.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
    });
    forms('form', modalTimeId);
    calculator();
});



