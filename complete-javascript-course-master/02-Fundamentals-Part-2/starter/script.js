'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

/*functions */
// function logger() {
//     console.log("My name is Jonas");
// }

// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 4));

/*functions */

/*function declaration vs expressions */

/*Function Declaration */
// const age1 = calcAge1(1991);

// function calcAge1(birthYear) {
//     return 2022 - birthYear;
// }
// console.log(age1);

// /*Function Expression */
// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;
// }
// console.log(calcAge2(1990));
/*function declaration vs expressions */

/*Arrow Fucntion */

// const calcAge3 = birthYear => 2022 - birthYear;
// console.log(calcAge3(1998));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 60 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1998, "Jonas"));
/*Arrow Function */

/*Functions calling other function */
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangesPieces = cutFruitPieces(oranges);

//     console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangesPieces} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

/*Functions calling other function */

/*Coding Challenge 1 */
// let dolphinScore1 = 85;
// let dolphinScore2 = 54;
// let dolphinScore3 = 41;

// let koalaScore1 = 23;
// let koalaScore2 = 34;
// let koalaScore3 = 27;

// let calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3;
// }

// let dolphinAvgScore = calcAverage(dolphinScore1, dolphinScore2, dolphinScore3);
// let koalaAvgScore = calcAverage(koalaScore1, koalaScore2, koalaScore3);

// console.log(dolphinAvgScore);
// console.log(koalaAvgScore);

// function checkWinner(dolphinAvgScore, koalaAvgScore) {
//     if (dolphinAvgScore >= koalaAvgScore * 2) {
//         console.log(`Dolphins win (${dolphinAvgScore} vs. ${koalaAvgScore})`);
//     }
//     else if (dolphinAvgScore * 2 <= koalaAvgScore) {
//         console.log(`Koalas win (${koalaAvgScore} vs. ${dolphinAvgScore})`);
//     }
//     else {
//         console.log("No one wins");
//     }
// }

// checkWinner(dolphinAvgScore, koalaAvgScore);
/*Coding Challenge 1 */


/*Arrays */
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// console.log(friends[0]);

// console.log(friends.length);

// friends[1] = "Jay";
// console.log(friends);


// function calcAge(birthYear) {
//     return 2022 - birthYear;
// }

// const years = [1990, 1998, 2010];
// years.forEach(element => {
//     console.log(calcAge(element));
// });
/*Arrays */


/*Basic Array Methods */

// /*Add Elements*/
// const friends = ["Michael", "Steven", "Peter"];
// friends.push("Jay");
// friends.unshift("John");
// console.log(friends);
// /*Add Elements*/

// /*Remove Elements*/
// friends.pop();
// friends.shift();
// console.log(friends);
// /*Remove Elements*/

// console.log(friends.indexOf("Steven"));
// console.log(friends.includes("Parker"));
/*Basic Array Methods */

/*Coding Challenge 2 */

// function calcTip(billValue) {
//     if (billValue >= 50 && billValue <= 300) {
//         return billValue * 0.15;
//     }
//     else {
//         return billValue * 0.20;
//     }
// }

// let billArray = [125, 555, 44];
// let totalBillArray = [];

// billArray.forEach(element => {
//     let tip = calcTip(element);

//     console.log(tip);

//     totalBillArray.push(element + tip);
// });

// console.log(totalBillArray);

/*Coding Challenge 2 */

/*Objects */
// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2022 - 1991,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"]
// }

// console.log(jonas.firstName);

// const interestedIn = prompt("What do want to know about Jonas? Choose between firstName, lastName, age, job, and friends.");
// console.log(jonas[interestedIn]);

// jonas.location = "Portugal";

// console.log(jonas);

// let friendsCount = jonas.friends.length;
// let bestFriend = jonas.friends[0];

// console.log(`Jonas has ${friendsCount} friends, and his best friend is ${bestFriend}`);
/*Objects */

/*Object Methods */
// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     birthYear: 1998,
//     job: "teacher",
//     hasDriverLicense: false,
//     friends: ["Michael", "Peter", "Steven"],
//     calcAge: function () {
//         return new Date().getFullYear() - this.birthYear;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license.`
//     }
// }

// console.log(jonas.getSummary());
/*Object Methods */

/*Coding Challenge 3*/
// let mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//     }
// }

// let john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// if (mark.BMI > john.BMI) {
//     console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI}).`);
// }
// else if (mark.BMI == john.BMI) {
//     console.log(`${mark.fullName} and ${john.fullName} have the same BMI.`);
// }
// else {
//     console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI}).`);
// }
/*Coding Challenge 3*/


/*For Loops*/
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repition ${rep} 🏋️`);
// }

// const jonas = [
//     "Jonas",
//     "Schmedtmann",
//     2022 - 1991,
//     "Teacher",
//     ["Michael", "Peter", "Steven"]
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//     const element = jonas[i];
//     console.log(element);

//     types.push(typeof element);
// }

// console.log(types);

/*Continue and Break*/
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] != "string") continue;

//     console.log(jonas[i]);
// }

// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] == "number") break;

//     console.log(jonas[i]);
// }
/*Continue and Break*/

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`--Starting Exercise ${exercise}--`);
//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`----Starting Repitition ${rep}----`);
//     }
// }

/*For Loops*/

/*While Loops */

// let rep = 1;
// while (rep <= 10) {
//     console.log(`--Starting Exercise ${rep}--`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1

// while (dice != 6) {
//     console.log(`You rolled a dice ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;

//     if (dice == 6) {
//         console.log(`You rolled a dice ${dice}. END OF LOOP!!`);
//     }
// }
/*While Loops */

/*Coding Challenge 4 */

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tip;
// let tips = [];
// let totals = [];

// function calcTip(billValue) {
//     if (billValue >= 50 && billValue <= 300) {
//         return billValue * 0.15;
//     }
//     else {
//         return billValue * 0.20;
//     }
// }

// for (let i = 0; i < bills.length; i++) {
//     const element = bills[i];
//     tip = calcTip(element);
//     tips.push(tip);
//     totals.push(element + tip);
// }

// console.log(bills);
// console.log(tips);
// console.log(totals);

// function calcAverage(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }

//     return sum / array.length;
// }

// console.log(calcAverage(totals));
/*Coding Challenge 4 */