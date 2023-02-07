let navMain = document.querySelector('.main-navigation');
let navToggle = document.querySelector('.main-navigation__button');
let navClose = document.querySelector('.main-navigation__button-close');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
  }
});

navClose.addEventListener('click', function () {
    if(navMain.classList.contains('main-navigation--opened')) {
        navMain.classList.remove('main-navigation--opened');
    navMain.classList.add('main-navigation--closed');
    } else {
        navMain.classList.add('main-navigation--opened');
        navMain.classList.remove('main-navigation--closed');
    }
});