'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
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
// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };

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
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const iterator of menu) {
    console.log(iterator);
}

for (const iterator of menu.entries()) {
    console.log(iterator);
}
/*For Of Loop */
