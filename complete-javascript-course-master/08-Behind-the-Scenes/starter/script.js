'use strict';

/*Scope and Scope Chain */

// function calcAge(birthYear) {
//     const age = 2022 - birthYear;

//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             output = 'New Output!!';
//             const firstName = 'Steven';
//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }
//         }

//         console.log(millenial);
//         console.log(output);
//         // console.log(str);
//         // console.log(add(1, 9));
//     }

//     printAge();

//     return age;
// }

// const firstName = 'Jonas';
// calcAge(1992);

/*Scope and Scope Chain */

/*Hoisting */

// //Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// var job = 'Teacher';
// var year = 1991;

// //Functions
// console.log(addDecl(1, 3));
// console.log(addExpr(1, 3));
// console.log(addArrow(1, 3));

// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function (a, b) {
//     return a + b;
// };

// const addArrow = (a, b) => a + b;

// // Example
// if (!numProducts) deleteShopping();
// var numProducts = 10;

// function deleteShopping() {
//     console.log('All products deleted!');
// }

/*Hoisting */

/*this keyword */
// console.log(this);

// function calcAge(birthYear) {
//     const age = 2022 - birthYear;
//     console.log(this);
// }
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//     const age = 2022 - birthYear;
//     console.log(this);
// };
// calcAgeArrow(1995);

// const jonas = {
//     year: 1998,
//     calcAge: function () {
//         console.log(this);
//         console.log(2022 - this.year);
//     },
// };
// jonas.calcAge();

// const matilda = {
//     year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// const jonas = {
//     firstName: 'Jonas',
//     year: 1998,
//     calcAge: function () {
//         console.log(this);
//         console.log(2022 - this.year);

//         const isMillenial = function () {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };
//         isMillenial();
//     },
//     greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.greet();
// jonas.calcAge();

/*this keyword */

/*arguments keyword*/

// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };

// addExpr(2, 5, 6);

/*arguments keyword*/

/*primitives vs objects */
// let age = 30;
// let oldAge = 30;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'Jonas',
//     age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log('Friend:', friend);
// console.log('Me:', me);

/*Primitive Types*/
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);
/*Primitive Types*/

/*Object Types*/
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';
console.log('Before Marriage: ', jessica);
console.log('After Marriage: ', marriedJessica);

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = 'Williams';
console.log('Copied Before Marriage: ', jessicaCopy);

/*Object Types*/

/*primitives vs objects */
