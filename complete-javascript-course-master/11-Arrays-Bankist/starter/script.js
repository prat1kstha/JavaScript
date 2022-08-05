'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

function displayMovement(movements, sort = false) {
    containerMovements.innerHTML = '';

    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movs.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = `<div class="movements__row">
                          <div class="movements__type movements__type--${type}">
                              ${i + 1} ${type}
                          </div>
                          <div class="movements__date">3 days ago</div>
                          <div class="movements__value">${mov} €</div>
                      </div>`;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
}

function calcDisplayBalance(acc) {
    acc.balance = acc.movements.reduce(function (acc, cur) {
        return acc + cur;
    }, 0);

    labelBalance.textContent = `${acc.balance} €`;
}

function calcDisplaySummary(acc) {
    const totalDeposits = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, cur) => acc + cur, 0);

    const totalWithdrawals = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, cur) => acc + cur, 0);

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter(int => int >= 1)
        .reduce((acc, cur) => acc + cur, 0);

    labelSumIn.textContent = `${totalDeposits} €`;
    labelSumOut.textContent = `${Math.abs(totalWithdrawals)} €`;
    labelSumInterest.textContent = `${Math.abs(interest)} €`;
}

function createUserNames(accs) {
    accs.forEach(function (acc) {
        acc.userName = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
}

function updateUI(acc) {
    //Display Movements
    displayMovement(acc.movements);

    //Display Balance
    calcDisplayBalance(acc);

    //Display Summary
    calcDisplaySummary(acc);
}

createUserNames(accounts);

// containerApp.style.opacity = 100;
// updateUI(account1);

/*Login Implementation */
let currentAccount;

btnLogin.addEventListener('click', function (e) {
    e.preventDefault();

    currentAccount = accounts.find(
        acc => acc.userName === inputLoginUsername.value
    );

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        //Display UI and Message
        labelWelcome.textContent = `Welcome Back, ${
            currentAccount.owner.split(' ')[0]
        }`;

        containerApp.style.opacity = 100;

        //Clear Input Fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        updateUI(currentAccount);
    }
});
/*Login Implementation */

/*Transfer Money */
btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();

    const receiverAcc = accounts.find(
        acc => acc.userName === inputTransferTo.value
    );
    const amount = Number(inputTransferAmount.value);

    inputTransferAmount.value = inputTransferTo.value = '';

    if (
        amount > 0 &&
        amount < currentAccount.balance &&
        receiverAcc?.userName !== currentAccount.userName &&
        receiverAcc
    ) {
        //Transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        //Update UI
        updateUI(currentAccount);
    }
});
/*Transfer Money */

/*Close Account */
btnClose.addEventListener('click', function (e) {
    e.preventDefault();

    if (
        inputCloseUsername.value === currentAccount.userName &&
        Number(inputClosePin.value) === currentAccount.pin
    ) {
        const index = accounts.findIndex(
            acc => acc.userName === currentAccount.userName
        );

        accounts.splice(index, 1);

        containerApp.style.opacity = 0;
    }

    inputCloseUsername.value = inputClosePin.value = '';
});
/*Close Account */

/*Request Loan*/
btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (
        amount > 0 &&
        currentAccount.movements.some(mov => mov >= 0.1 * amount)
    ) {
        currentAccount.movements.push(amount);
        updateUI(currentAccount);
    }
});
/*Request Loan*/

/*Sort Movements */
let sortedState = false;

btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovement(currentAccount.movements, !sortedState);
    sortedState = !sortedState;
});
/*Sort Movements */

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*Simple Array Methods */
//Slice -- Copy of an Array within the given index positions
// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(1, -2));

// //Splice -- Removes the extracted part from the Original Array
// // console.log(arr.splice(2));
// // console.log(arr);

// //Reverse -- Mutates the original Array
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //Concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //Join
// console.log(letters.join('-'));

/*Simple Array Methods */

/*At Method*/
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// //getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
/*At Method*/

/*forEach */
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log('------USING FOR OF LOOP------');
// for (const [i, movement] of movements.entries()) {
//     if (movement > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//     }
// }

// console.log('------USING FOR EACH LOOP------');
// movements.forEach(function (movement, i) {
//     if (movement > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//     }
// });
/*forEach */

/*forEach with Maps and Sets*/
// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//     console.log(`${key}: ${value}`);
// });

// const currenciesUq = new Set(currencies);
// currenciesUq.forEach(function (val) {
//     console.log(`${val}`);
// });
/*forEach with Maps and Sets*/

/*Coding Challenge 1 */
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// function checkDogs(dogsJulia, dogsKate) {
//     const dogsJuliaCorrected = dogsJulia.slice(1, -2);

//     function checkAge(arr) {
//         arr.forEach(function (age, i) {
//             if (age >= 3) {
//                 console.log(
//                     `Dog number ${i + 1} is an adult, and is ${age} years old.`
//                 );
//             } else {
//                 console.log(`Dog number ${i + 1} is still a puppy 🐶.`);
//             }
//         });
//     }

//     checkAge(dogsJuliaCorrected);
//     checkAge(dogsKate);
// }

// checkDogs(dogsJulia, dogsKate);

/*Coding Challenge 1 */

/*Map, Filter and Reduce */
//MAP
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUSD = 1.1;

// const movementsUSD = movements.map(mov => mov * euroToUSD);

// console.log(movements);
// console.log(movementsUSD);

// const movementsDescription = movements.map((mov, i) => {
//     return `Movement ${i + 1}: You ${
//         mov > 0 ? 'deposited' : 'withdrew'
//     } ${Math.abs(mov)}`;
// });

// console.log(movementsDescription.join('\n'));

/*Map, Filter and Reduce */

/*Filter */
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(function (mov) {
//     return mov > 0;
// });

// const withdrawals = movements.filter(function (mov) {
//     return mov < 0;
// });

// console.log(movements);
// console.log(deposits);
// console.log(withdrawals);

/*Filter */

/*Reduce */
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce(function (acc, cur, i, arr) {
//     return acc + cur;
// }, 0);

// console.log(balance);

// //Max Value
// const maxBalance = movements.reduce((acc, cur) => (acc > cur ? acc : cur), 0);

// console.log(maxBalance);

/*Reduce */

/*Coding Challenge 2 */
// const dogsJulia = [5, 2, 4, 1, 15, 8, 3];
// const dogsKate = [16, 6, 10, 5, 6, 1, 4];

// function calcAverageHumanAge(ages) {
//     const ageHuman = ages.map(dogAge =>
//         dogAge <= 2 ? 2 * dogAge : 16 + 4 * dogAge
//     );

//     const ageHumanAdults = ageHuman.filter(age => age > 18);

//     const avgHumanAge =
//         ageHumanAdults.reduce(function (acc, cur) {
//             return acc + cur;
//         }, 0) / ageHumanAdults.length;

//     return avgHumanAge;
// }

// console.log(calcAverageHumanAge(dogsJulia));
// console.log(calcAverageHumanAge(dogsKate));
/*Coding Challenge 2 */

/*Method Chaining */
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUSD = 1.1;
// const totalDepositsUSD = movements
//     .filter(mov => mov > 0)
//     .map(mov => mov * euroToUSD)
//     .reduce((acc, cur) => acc + cur, 0);

// console.log(totalDepositsUSD);
/*Method Chaining */

/*Coding Challenge 3 */
// const dogsJulia = [5, 2, 4, 1, 15, 8, 3];
// const dogsKate = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = ages =>
//     ages
//         .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + 4 * dogAge))
//         .filter(humanAge => humanAge > 18)
//         .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

// console.log(calcAverageHumanAge(dogsJulia));
// console.log(calcAverageHumanAge(dogsKate));
/*Coding Challenge 3 */

/*Find Method */
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

/*Find Method */

/*Some and Every Methods */
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// //Equality
// console.log(movements.includes(-130));

// //Condition
// const anyDeposit = movements.some(mov => mov > 0);
// console.log(anyDeposit);

// //Condition
// const allDeposit = movements.every(mov => mov > -1000);
// console.log(allDeposit);
/*Some and Every Methods */

/*Flat and FlatMap */

//Flat
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const totalBalace = accounts
//     .map(acc => acc.movements)
//     .flat()
//     .reduce((acc, mov) => acc + mov, 0);
// console.log(totalBalace);

// //FlatMap
// const totalBalaceFM = accounts
//     .flatMap(acc => acc.movements)
//     .reduce((acc, mov) => acc + mov, 0);
// console.log(totalBalaceFM);

/*Flat and FlatMap */

/*Sort */
//Sorts by string
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //return < 0, A, B (keep order)
// //return > 0, B, A (switch order)

// //Ascending
// // console.log(
// //     movements.sort((a, b) => {
// //         if (a > b) return 1;
// //         if (a < b) return -1;
// //     })
// // );

// console.log(movements.sort((a, b) => a - b));

// //Ascending
// // console.log(
// //     movements.sort((a, b) => {
// //         if (a > b) return -1;
// //         if (a < b) return 1;
// //     })
// // );

// console.log(movements.sort((a, b) => b - a));
/*Sort */

/*Creating and Filling Arrays */
// const x = new Array(1, 2, 3, 4, 5, 6);
// const y = new Array(7);

// y.fill(7);

// console.log(x);
// console.log(y);

// //Array.from
// const z = Array.from({ length: 7 }, () => 1);
// console.log(z);

// const a = Array.from({ length: 7 }, (cur, i) => i + 1);
// console.log(a);

// labelBalance.addEventListener('click', function () {
//     const movementsUI = Array.from(
//         document.querySelectorAll('.movements__value'),
//         el => Number(el.textContent.replace('€', ''))
//     );

//     console.log(movementsUI);
// });
/*Creating and Filling Arrays */

/*Array Methods Practice */
// //1
// const bankDepositSum = accounts
//     .flatMap(acc => acc.movements)
//     .filter(mov => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
// console.log(bankDepositSum);

// //2
// const numDeposits1000 = accounts
//     .flatMap(acc => acc.movements)
//     .filter(mov => mov >= 1000).length;

// console.log(numDeposits1000);

// const numDeposits1001 = accounts
//     .flatMap(acc => acc.movements)
//     .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposits1001);

// //3
// const sums = accounts
//     .flatMap(acc => acc.movements)
//     .reduce(
//         (sums, cur) => {
//             cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//             return sums;
//         },
//         { deposits: 0, withdrawals: 0 }
//     );

// console.log(sums);

// //4
// const convertTitleCase = function (title) {
//     const capitalize = str => str[0].toUpperCase() + str.slice(1);
//     const exceptions = [
//         'a',
//         'an',
//         'and',
//         'the',
//         'but',
//         'or',
//         'on',
//         'in',
//         'with',
//         'is',
//     ];

//     const titleCase = title
//         .toLowerCase()
//         .split(' ')
//         .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//         .join(' ');

//     return capitalize(titleCase);
// };
// console.log(convertTitleCase('this is nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another example'));

/*Array Methods Practice */

/*Coding Challenge #4 */
// HINT 2: Being within a range 10% above
// and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended * 1.10).
// Basically, the current portion should be between 90% and 110% of the recommended portion.
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1
dogs.forEach(function (dog) {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

//2
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);
console.log(
    `Sarah's dog is eating too ${
        sarahDog.curFood > sarahDog.recommendedFood ? 'much' : 'little'
    }`
);

//3
const ownersEatTooMuch = [];

/*Coding Challenge #4 */
/////////////////////////////////////////////////
