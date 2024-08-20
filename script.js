'use strict';
/*
console.log(document.querySelector('.message').textContent);

console.log(
  (document.querySelector('.message').textContent = 'Correct Number')
);

console.log((document.querySelector('.guess').value = 5));
*/

// document.querySelector('.check')  --> this returns an element
//document.addeventListener() --> this is a method. All methods needs to be called with a ()

/*document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});*/
//También se puede hacer lo mismo pero guardandolo en una variable

//INITIAL SETTINGS
let secretNumber = Math.trunc(Math.random() * 20) + 1; //This is because we want to include de 20
let score = 20; //STATE VARIABLE
let highscore = 0;

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //-----------------------------------WHEN THERE IS NO INPUT----------------------------------------
  if (!guess) {
    displayMessage('There is no number');

    //-----------------------------------WHEN THE PLAYER WINS-----------------------------------------
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //-------------------------------------WHEN THE PLAYER IS WRONG------------------------------------
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('You lost the game');
  }
});

//     //WHEN GUESS IS TOO HIGH
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game';
//     }

//     //WHEN GUESS IS TOO LOW
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game';
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
