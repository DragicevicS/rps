const r = "rock";
const p = "paper";
const s = "scissors"
const numOfRounds = prompt('How many round would you like to play? (between 1 to 15)');

function getNoR(){
  if (numOfRounds > 0 && numOfRounds < 16) return;
  else location.reload();
};

getNoR();

let round = 0;
let playerScore = 0;
let compScore = 0;

function getCompChoice() {
  let randomChoice = Math.random();
  if (randomChoice >= 0 && randomChoice < 0.33) return r;
  else if (randomChoice >= 0.33 && randomChoice < 0.66) return p;
  else return s;
};

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) callback(e);
  });
};

function playRound(playerChoice, compChoice) {
  let roundResults = document.querySelector('.round-results');
  roundResults.firstChild.textContent = "Player chose: " + playerChoice;
  roundResults.childNodes[1].textContent = "Computer chose: " + compChoice;

  if (round+1 <= numOfRounds) {
    if ((playerChoice == r && compChoice == r) || (playerChoice == p && compChoice == p) || (playerChoice == s && compChoice == s)) {
      roundResults.lastChild.textContent = "It's a draw!"
    } else if ((playerChoice == r && compChoice == s) || (playerChoice == p && compChoice == r) || (playerChoice == s && compChoice == p)) {
      roundResults.lastChild.textContent = "Player wins this round!" 
      playerScore++;
    } else {
      roundResults.lastChild.textContent = "Computer wins this round!"
      compScore++;
    };
    round++;
  };
  
};

const ul = document.querySelectorAll('.results');
const results = document.querySelector('.results');
ul.forEach(ul => {
  for (let i=1; i <= numOfRounds; i++) {
    const li = document.createElement('li');
    li.classList.add(i);
    ul.appendChild(li);
  };
});

const again = document.querySelector('.again');
again.addEventListener('click', () => {location.reload()});

function alertScore() {
  if (playerScore == compScore && round == numOfRounds) {
    setTimeout(() => {alert("DRAW!");}, 50);
  } else if (playerScore > compScore && round == numOfRounds) {
    setTimeout(() => {alert("PLAYER WON THE GAME!");}, 50);
  } else if (playerScore < compScore & round == numOfRounds) {
    setTimeout(() => {alert("COMPUTER WON THE GAME!");}, 50);
  };
};

addGlobalEventListener('click', 'img', e => {
  let comp = getCompChoice();
  let player = e.target.getAttribute('id');
  playRound(player, comp);
  
  results.childNodes[round+4].textContent = round + ". Player " + playerScore + " : " + compScore + " Computer";
  alertScore();
});


