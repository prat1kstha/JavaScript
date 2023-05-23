'use strict';

/*Default Parameters */
// const bookings = [];

// function createBooking(
//     flightNum,
//     numPassengers = 10,
//     price = 40 * numPassengers
// ) {
//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123', 50);
// console.log(bookings);
/*Default Parameters */

/*Value vs Reference */
// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas Scmedtmann',
//     passport: 246777,
// };

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport == 246777) {
//         alert('Checked In');
//     } else {
//         alert('Wrong Passport!!');
//     }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 100000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);
/*Value vs Reference */

/*Function Accepting CallBack Function */
// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher Order Function
// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//     console.log('👋');
// };

// ['Jonas', 'Martha', 'Adam'].forEach(high5);
/*Function Accepting CallBack Function */

/*Function Returning Function */
// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');

// greet('Hello')('Jonas');

// //Using Arrow Function
// const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

// const greeterArrowHi = greetArrow('Hi');
// greeterArrowHi('Jonas');
/*Function Returning Function */

/*Call and Apply Methods */
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

// lufthansa.book(129, 'Jonas');
// lufthansa.book(444, 'Mike');
// console.log(lufthansa.bookings);

const euroWings = {
    airline: 'EuroWings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// //Does not work
// // book(675, 'Sarah');
// //CALL Method
// book.call(euroWings, 23, 'Sarah');
// console.log(euroWings);

// //APPLY Method -- Requires arguments to be passed as an Array
// const flighData = [294, 'George'];
// book.apply(euroWings, flighData);
// console.log(euroWings);

/*Call and Apply Methods */

/*Bind Method */
// const bookEW = book.bind(euroWings);
// const bookLH = book.bind(lufthansa);
// bookEW(1231, 'Steven');
// bookLH(4451, 'Spielberg');

// //With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//     console.log(this);

//     this.planes++;
//     console.log(this.planes);
// };

// document
//     .querySelector('.buy')
//     .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //Partial Application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.13);
// console.log(addVAT(200));

// //Using Function Calling Other Functions
// const addTaxRate = function (rate) {
//     return function (value) {
//         return value + value * rate;
//     };
// };

// const addVAT2 = addTaxRate(0.13);
// console.log(addVAT2(200));
/*Bind Method */

/*Coding Challenge 1*/
// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     answers: new Array(4).fill(0),
// };

// function registerNewAnswer() {
//     const question = `${poll.question} \n ${poll.options.join('\n')}`;

//     const ans = prompt(question);

//     if (ans >= 0 && ans <= 3) {
//         poll.answers[ans]++;
//     } else {
//         console.log('Invalid Answer');
//     }

//     displayResults('array');
//     displayResults('string');
// }

// function displayResults(type) {
//     if (type == 'string') {
//         console.log(`Poll results are ${[...poll.answers]}`);
//     } else if (type == 'array') {
//         console.log(poll.answers);
//     }
// }

// document.querySelector('.poll').addEventListener('click', registerNewAnswer);
/*Coding Challenge 1*/

/*Immediately Invoked Function Expression */
// const runOnce = function () {
//     console.log('This will never run again1');
// };

// runOnce();
// runOnce();

// //IIFE
// (function () {
//     console.log('This will never run again2');
// })();

// (() => console.log('This will never run again3'))();
/*Immediately Invoked Function Expression */

/*Closures */
// const secureBooking = function () {
//     let passengerCount = 0;
//     return function () {
//         passengerCount++;
//         console.log(passengerCount);
//     };
// };

// const booker = secureBooking();
// booker();

//Example 1
// let f;
// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     };
// };

// const h = function () {
//     const b = 777;
//     f = function () {
//         console.log(b * 2);
//     };
// };

// g();
// f();

// //Re-assigning f function
// h();
// f();

// console.dir(f);

// //Example 2
// const boardPassengers = function (n, wait) {
//     const perGroup = n / 3;

//     setTimeout(function () {
//         console.log(`We are now boarding all ${n} passengers.`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     }, wait * 1000);

//     console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 3);

/*Closures */

/*Coding Challenge 2 */
// (function () {
//     const header = document.querySelector('h1');
//     header.style.color = 'red';

//     document.querySelector('body').addEventListener('click', function () {
//         header.style.color = 'blue';
//     });
// })();
/*Coding Challenge 2 */
