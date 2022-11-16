'use strict';

const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.getElementById('score--1');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

scoreEl0.textContent = 0;
scoreEl1.textContent = 0;

let currentScore = 0;
let currentPlayer = 0;
const scores = [0, 0];
let isPlaying = true;

diceEl.classList.add('hidden');

const switchPlayer = function () {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  currentScore = 0;
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (isPlaying) {
    scores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];

    if (scores[currentPlayer] >= 20) {
      isPlaying = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
    //Player swithing function...

    /*document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  currentScore = 0;
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');*/
  }
});
