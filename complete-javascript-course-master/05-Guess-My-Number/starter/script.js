'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log((document.querySelector('.guess').value = 23));

let secretNumber = Math.trunc(Math.random() * 20) + 1;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    let score = document.querySelector('.score').textContent;
    let highscore = document.querySelector('.highscore').textContent;

    //When there is no input
    if (!guess) {
        displayMessage('🚫 No Number!');

        //When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore)
            document.querySelector('.highscore').textContent = score;

        //When guess is incorrect
    } else if (guess !== secretNumber) {
        if (document.querySelector('.score').textContent > 1) {
            displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
            document.querySelector('.score').textContent--;
        } else {
            displayMessage('💥You lost the game!');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#8b0000';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.removeProperty('width');
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.removeProperty('background-color');
});
