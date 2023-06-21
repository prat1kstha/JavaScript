'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
    btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section1.getBoundingClientRect();
    // console.log(s1coords);

    // console.log(
    //     'Current scroll (X/Y): ',
    //     window.pageXOffset,
    //     window.pageYOffset
    // );

    // console.log(s1coords.top + window.pageYOffset);

    // console.log(e.target.getBoundingClientRect());

    // console.log(
    //     'height/width viewport',
    //     document.documentElement.clientHeight,
    //     document.documentElement.clientWidth
    // );

    // Scrolling
    // window.scrollTo(
    //     s1coords.left + window.pageXOffset,
    //     s1coords.top + window.pageYOffset
    // );

    // Smooth Scrolling
    // window.scrollTo({
    //     left: s1coords.left + window.pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: 'smooth',
    // });

    // Supported in modern browsers only
    section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// /* Selecting Elements */
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// document.querySelector('.header');

// const allSections = document.querySelector('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// /* Creating and Inserting Elements */
// const header = document.querySelector('.header');
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent =
// //   'We use cookies for improved functionality and analytics.';
// message.innerHTML =
//     'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// /* Delete Elements */
// document
//     .querySelector('.btn--close-cookie')
//     .addEventListener('click', function () {
//         message.remove();
//     });

// /* Styles, Attributes and Classes */
// /* Styles */
// message.style.backgroundColor = '#37383d';
// message.style.width = '100%';

// console.log(message.style.height);
// console.log(getComputedStyle(message).height);
// console.log(getComputedStyle(message).color);

// message.style.height =
//     Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
// console.log(getComputedStyle(message).height);

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// /* Attributes */
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// // Custom Attribute values can be fetched with the getAttribute method
// console.log(logo.desinger);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');
// console.log(logo.className);

// const link = document.querySelector('.nav__link--btn');
// console.log(link.getAttribute('href'));
// console.log(link.href);

// /* Data Attributes */
// console.log(logo.dataset.versionNumber);

// /* Classes */
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// // Removes all existing classes
// // logo.className = 'test';

// /* Types of Event and Event Listener */
// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//     alert('addEventListener: Hovered over heading');
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => {
//     h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

// // h1.onmouseenter = function (e) {
// //     alert('onmouseenter: Hovered over heading');
// // };
