'use strict';

//Data for Coding Challenge
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekDays[3]]: {
        open: 12,
        close: 22,
    },
    [weekDays[4]]: {
        open: 11,
        close: 23,
    },
    [weekDays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
        console.log(
            `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time}, ${address}`
        );
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
    openingHours: openingHours,
};

// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via del Sole, 21',
//     mainIndex: 2,
//     starterIndex: 0,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const {
//     fri: { open, close },
// } = openingHours;
// console.log(open, close);

/*Destructuring Array */

// console.log(restaurant.order(0, 2));

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[3];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

/*Destructuring Array */

/*Spread Operator */
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// /*Copy Array */
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
// /*Copy Array */

// /*Join Arrays */
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
/*Join Arrays */

/*Iterables: arrays, strings, maps, sets. NOT objects */
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
/*Iterables: arrays, strings, maps, sets. NOT objects */

/*Example */
// const ingredients = [
//     prompt("Let's make Pasta! Ingredient 1?"),
//     prompt("Let's make Pasta! Ingredient 2?"),
//     prompt("Let's make Pasta! Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);
/*Example */

/*Objects */
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristoranta Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
/*Objects */
/*Spread Operator */

/*Rest Pattern and Parameters*/
/*SPREAD, because on the RIGHT side of = */
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);
/*SPREAD, because on the RIGHT side of = */

/*REST, because on the LEFT side of = */
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
/*REST, because on the LEFT side of = */

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// function add(...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     console.log(sum);
// }

// add(2, 3, 4);

// restaurant.orderPizza('cheese', 'onion', 'olives', 'pepperoni');
/*Rest Pattern and Parameters*/

/*Coding Challenge 1 */

// //1
// const [players1, players2] = game.players;

// console.log(players1);
// console.log(players2);

// //2
// const [gk, ...fieldPlayers] = players1;

// console.log(gk);
// console.log(fieldPlayers);

// //3
// const allPlayers = [...players1, ...players2];
// console.log(`All Players ${allPlayers}`);

// //4
// const substitutePlayers = ['Thiago', 'Coutinho', 'Perisic'];
// const players1Final = [...players1, ...substitutePlayers];

// console.log(`Final Players for Bayern Munich ${players1Final}`);

// //5
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// //6
// function printGoals(...players) {
//     console.log(...players);
//     console.log('Total Goals: ', players.length);
// }

// printGoals(...game.scored);

// //7
// team1 > team2 && console.log('Team 2 is likely to win!');
// team1 < team2 && console.log('Team 1 is likely to win!');
/*Coding Challenge 1 */

/*For Of Loop */
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for (const item of menu) {
//     console.log(item);
// }

// for (const item of menu.entries()) {
//     console.log(item);
// }
/*For Of Loop */

/*Optional Chaining*/
//This will return an error
// console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours && restaurant.openingHours.mon) {
//     console.log(restaurant.openingHours.mon.open);
// }

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.fri?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//     const open = restaurant.openingHours[day]?.open ?? 'closed';
//     console.log(`On ${day}, we open at ${open == null ? '' : open}`);
// }

// //Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// //Arrays
// const users = [
//     {
//         name: 'Jonas',
//         email: 'hello@jonas.io',
//     },
// ];

// console.log(users[0]?.name ?? 'User array is empty');

/*Optional Chaining*/

/*Looping Objects */

// Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//     openStr += day + ', ';
// }

// console.log(openStr);

// //Property Values
// const values = Object.values(openingHours);
// console.log(values);

// //Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//     console.log(`On ${key}, we open at ${open} and close at ${close}`);
// }

/*Looping Objects */

/*Coding Challenge 2*/
// //1

// for (const [i, player] of game.scored.entries()) {
//     console.log(`Goal ${i + 1}: ${player}`);
// }

// //2
// let val = 0;
// let avg;
// const oddsValue = Object.values(game.odds);
// for (const odd of oddsValue) {
//     val += odd;
// }

// avg = val / oddsValue.length;
// console.log(avg);

// //3
// const oddsEntries = Object.entries(game.odds);
// console.log(oddsEntries);

// for (const [team, odd] of oddsEntries) {
//     const teamStr = team == 'x' ? 'draw' : `victory ${game[team]}`;
//     console.log(`Odd of ${teamStr} ${odd}`);
// }

// //4
// const scorers = {};
// for (const player of game.scored) {
//     scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// /*Coding Challenge 2*/

// /*Sets */
// const ordersSet = new Set([
//     'Pasta',
//     'Pizza',
//     'Pizza',
//     'Risotto',
//     'Pasta',
//     'Pizza',
// ]);

// console.log(ordersSet);
// console.log(ordersSet.size);
// console.log(ordersSet.has('Bread'));

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);

// ordersSet.delete('Risotto');
// console.log(ordersSet);

// for (const order of ordersSet) {
//     console.log(order);
// }

//Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffSet = new Set(staff);
// const staffUniqueArray = [...new Set(staff)];
// console.log(staffSet);
// console.log(staffUniqueArray);

/*Sets */

/*Maps */
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');

// //Chaining Methods
// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'We are open :D')
//     .set(false, 'We are closed :(');

// console.log(rest);
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();

// console.log(rest);
// console.log(rest.size);

// //This will not work since the array in get method points to a different object in memory
// rest.set([1, 2], 'Test');
// console.log(rest.get([1, 2]));

// //This will work
// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

/*Maps */

/*Maps Iteration*/
// const question = new Map([
//     ['question', 'What is the best programming language in the world?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'JavaScript'],
//     ['correct', 3],
//     [true, 'Correct!! :D'],
//     [false, 'Try Again!! :('],
// ]);

// console.log(question);

// //Convert Object to Map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//     if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(answer == question.get('correct')));

// //Convert Map to Array
// console.log([...question]);

/*Maps Iteration*/

/*Coding Challenge 3 */

// const gameEvents = new Map([
//     [17, '⚽️ GOAL'],
//     [36, '🔁 Substitution'],
//     [47, '⚽️ GOAL'],
//     [61, '🔁 Substitution'],
//     [64, '🔶 Yellow card'],
//     [69, '🔴 Red card'],
//     [70, '🔁 Substitution'],
//     [72, '🔁 Substitution'],
//     [76, '⚽️ GOAL'],
//     [80, '⚽️ GOAL'],
//     [92, '🔶 Yellow card'],
// ]);

// //1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //2
// gameEvents.delete(64);
// console.log(gameEvents);

// //3
// console.log(
//     `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//     `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// //4
// for (const [key, value] of gameEvents) {
//     console.log(
//         `${key <= 45 ? '[First Half]' : '[Second Half]'} ${key}: ${value}`
//     );
// }
/*Coding Challenge 3 */

/*Working with Strings pt1*/
let airline = 'TAP Air Portugal';
let plane = 'A320';

// console.log(plane[0]);
// console.log(airline.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4, 7));

// const checkMiddleSeat = function (seat) {
//     //B and E are middle seats
//     const s = seat.slice(-1);
//     if (s == 'B' || s == 'E') {
//         console.log('You got the middle seat!!');
//     } else {
//         console.log('You got lucky');
//     }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');

/*Working with Strings pt1*/

/*Working with Strings (Methods) pt2*/
// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());

// //Fix Capitalization
// const passenger = 'jOnaS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//     passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

// //Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// const normalizedLoginEmail = loginEmail.toLowerCase().trim();
// console.log(email);
// console.log(loginEmail);
// console.log(email == normalizedLoginEmail);

// //replacing
// const priceUS = '288,97$';
// const convRate = 124;
// const priceNP =
//     priceUS.slice(0, -1).replace(',', '.') * convRate +
//     priceUS.slice(-1).replace('$', 'Npr');
// console.log(priceNP);

// const annoucement = 'All passengers come to boarding door 23. Boarding door 23';
// console.log(annoucement.replace('door', 'gate'));
// //Using Function
// console.log(annoucement.replaceAll('door', 'gate'));
// //Using RegEx
// console.log(annoucement.replace(/door/g, 'gate'));

// //Booleans
// plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//     console.log('Part of the New Airbus family.');
// }

// const checkBaggage = function (items) {
//     const baggage = items.toLowerCase();
//     if (baggage.includes('knife') || baggage.includes('gun')) {
//         console.log('You are NOT allowed on board');
//     } else {
//         console.log('Welcome aboard');
//     }
// };
// checkBaggage('I have a Laptop, some Food and a pocket Knife');
// checkBaggage('Socks and Camera');
// checkBaggage('Got some snacks and a gun for protection');
/*Working with Strings (Methods) pt2*/

/*Working with Strings pt3*/
//Split
// console.log('a+very+nice+string'.split('+'));
// const fullName = 'Jonas Schmedtmann'.split(' ');
// console.log(fullName);

// const [firstName, lastName] = fullName;
// console.log(firstName);
// console.log(lastName);

// //Join
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// function capitalizeName(name) {
//     const names = name.split(' ');
//     const namesUpper = [];

//     for (const n of names) {
//         namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     }
//     console.log(namesUpper.join(' '));
// }

// const passenger2 = 'jessica ann smith davis';
// capitalizeName(passenger2);

// //Padding
// const message = 'Go to gate 23';
// console.log(message.padStart(20, '+').padEnd(30, '+'));

// function maskCreditCard(number) {
//     const str = String(number);
//     const last = str.slice(-4);
//     return last.padStart(str.length, '*');
// }

// console.log(maskCreditCard('0123456789012345'));

// //Repeat
// const message2 = 'Bad Weather... All Departures Delayed... ';
// console.log(message2.repeat(5));

/*Working with Strings pt3*/

/*Coding Challenge 4*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// function convertString() {
//     const text = document.querySelector('textarea').value;

//     const splitStr = text.split('\n');

//     for (const [key, item] of splitStr.entries()) {
//         const [first, second] = item.trim().split('_');
//         const camelCaseStr =
//             first[0].toLowerCase() +
//             first.slice(1) +
//             second[0].toUpperCase() +
//             second.slice(1);

//         const paddedStr = camelCaseStr.padEnd(20, ' ') + '✅'.repeat(key + 1);
//         console.log(paddedStr);
//     }
// }

// document.querySelector('button').addEventListener('click', convertString);

/*Coding Challenge 4*/

/*String Methods Pratice */

// const flights =
//     '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const splitFlights = flights.split('+');

// for (const flight of splitFlights) {
//     const [type, from, to, time] = flight.split(';');
//     const output = `${type.startsWith('_Delayed') ? '🛑' : ''}${type.replaceAll(
//         '_',
//         ' '
//     )} from ${from.slice(0, 3).toUpperCase()} to ${to
//         .slice(0, 3)
//         .toUpperCase()} (${time.replace(':', 'h')})`.padStart(45);

//     console.log(output);
// }
/*String Methods Pratice */
