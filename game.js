const pirateTerms = [
  "ahoy",
  "adventure",
  "anchor",
  "attack",
  "bounty",
  "prisoner",
  "captain",
  "cannon",
  "capture",
  "compass",
  "eyepatch",
  "gunpowder",
  "galley",
  "jewels",
  "treasure",
  "masthead",
  "shipmate",
  "floorboards",
  "lookout"
]

const resetbtn = document.getElementById('reset');
const newroundbtn = document.getElementById('newRound')

let answer = " ";
let answerArray = []; // new array for guessed answers
let maxWrong = 5;
let mistakes = 0;
let wordStatus = null;
let player1 = 1;
// const score = document.querySelector(`#p${player1}-score-counter`).innerText;

// Pick a random word from the pirateTerms array
function randomWord() {
  answer = pirateTerms[Math.floor(Math.random() * pirateTerms.length)]
}
randomWord();

// Generate alphabet keyboard
function generateButtons() {
  let btnAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn-primary"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('alphabetKeyboard').innerHTML = btnAlphabet;
}
generateButtons();

/* for (let i = 0; i < landmarks.length; i++){
  answerArray[i] = "_";
} */

// Shows the # of letters in randomly generated word using underscores
function guessWord() {
  wordStatus = answer.split('').map(letter => (answerArray.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('randomWord').innerText = wordStatus;
}
guessWord(); // if this is commented out, word underscores disappear


// Clicked letters show up/push into randomly generated word
function handleGuess(clickedLetter) {
  answerArray.indexOf('clickedLetter') === -1 ? answerArray.push(clickedLetter) : null;
  document.getElementById(clickedLetter).setAttribute('disabled', true); // disables clicked button so you can't click on it more than once

  alert(answer) // === delete later ====

  if (answer.indexOf(clickedLetter) >= 0) {
    guessWord();
    increaseScoreboard();// how to alternate between P1 and P2?
    winRound();
    gameWon();
    // increase mistake count by 1 if clickedLetter doesn't exist in the word
  } else if (answer.indexOf(clickedLetter) === -1) {
    mistakes += 1;
    increaseMistakes();
    gameLost();
  }
}
// handleGuess();

const increaseScoreboard = () => {
  // const scoreHTML = document.querySelector(`#p${player1}-score-counter`);
  // console.dir(score);
  const score = document.querySelector(`#p${player1}-score-counter`);
  let count = Number(score.innerText);
  score.innerText = count + 1;
  // return score;
}


function swapPlayer() {
  document.querySelector(`.wrongScore${player1}`).classList.remove('newClass');
  mistakes = 0;
  if (player1 < 2) {
    player1++;
  } else {
    player1--;
  }
  document.querySelector(`.wrongScore${player1}`).classList.add('newClass');
}

// HOW TO INCORPORATE PLAYER 2??? 
/* const p2_increaseScoreboard = () => {
  const score = document.querySelector('#p2-score-counter').innerText;
  const scoreHTML = document.querySelector('#p2-score-counter');
  let count = Number(score);
  scoreHTML.innerText = count + 1;
} */

// trying to alternate players after 1 full round and maintain score on scoreboard. This just switches +1 point per correctly clicked letter
/* function increaseScore() {
  if (player1) {
    p1_increaseScoreboard()
    player1 = false;
  } else {
    p2_increaseScoreboard()
    player1 = true;
  }
} */

function increaseMistakes() {
  document.querySelector(`#mistakes${player1}`).innerText = mistakes;
}

function winRound() {
  if (wordStatus === answer) {
    document.getElementById('winlosetext').innerText = "Congrats you won this round!"
  }
}

function gameWon() {
  if (document.getElementById('p1-score-counter').innerText == 10) {
    document.getElementById('winlosetext').innerText = "Player 1, You win! You saved the prisoner's life!"
  } else if (document.getElementById('p2-score-counter').innerText == 10) {
    document.getElementById('winlosetext').innerText = "Player 2, You win! You saved the prisoner's life!"
  }
}

function gameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('randomWord').innerText = "The answer was " + answer;
    document.getElementById('winlosetext').innerText = "Oh no!! You lost and the prisoner jumped off the plank into a pool of sharks"

  }
}

// Reset game using reset button
function resetGame() {
  mistakes = 0;
  answerArray = [];
  // randomWord(); // commenting out allows player 2 to attempt the same word
  guessWord();
  increaseMistakes();
  generateButtons();
  document.getElementById('winlosetext').innerText = ''; // reset winlosetext
  swapPlayer()
}
resetbtn.addEventListener('click', resetGame);

// New round of game
function newRound() {
  mistakes = 0;
  answerArray = [];
  randomWord();
  guessWord();
  increaseMistakes();
  generateButtons();
  document.getElementById('winlosetext').innerText = ''; // reset winlosetext
}
newroundbtn.addEventListener('click', newRound);

/* function toggle(event) {
  player1 ? increaseScoreboard() : p2_increaseScoreboard()
} */

// Shows maximum # of wrong guesses - only showing up for 1st matching element
// document.getElementById('maxWrong').innerText = maxWrong


const prisonerImg = document.getElementById('prisoner')
while (i < maxWrong) {
  prisonerImg
}