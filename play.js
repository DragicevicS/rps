const choice = document.querySelectorAll('.choice');

choice.forEach((choice) => {
  choice.addEventListener('click', () =>{
    choice.style.borderColor = 'red';
    const r = "rock";
    const p = "paper";
    const s = "scissors"
    let player = choice.getAttribute('id');
    function getCompChoice() {
    let choice = Math.random();
    if (choice >= 0 && choice < 0.33) return r;
    else if (choice >= 0.33 && choice < 0.66) return p;
    else return s;
    };
    let compChoice = getCompChoice();
    
    console.log(player);
    console.log(compChoice);
    let roundResults = document.querySelector('.round-results');
    roundResults.firstChild.textContent = "Player chose: " + player;
    roundResults.childNodes[1].textContent = "Computer chose: " + compChoice;

    if ((player == r && compChoice == r) || (player == p && compChoice == p) || (player == s && compChoice == s)) {
      roundResults.lastChild.textContent = "It's a draw!"
      return 0;
    } else if ((player == r && compChoice == s) || (player == p && compChoice == r) || (player == s && compChoice == p)) {
      roundResults.lastChild.textContent = "Player wins this round!" 
      return 1;
    } else if ((player == r && compChoice == p) || (player == p && compChoice == s) || (player == s && compChoice == r)) {
      roundResults.lastChild.textContent = "Computer wins this round!"
      return -1;
    } else return;
  });
});

document.querySelector('.again').addEventListener('click', () => {
  location.reload();
});


/*
function game() {
    let result = 0;
    for (let i=0; i<=4; i++) {
      result = result + playRound();
      console.log(result);
    };
    if (result == 0) {
      alert("Final result: DRAW!");
      location.reload();
    } else if (result > 0) {
      alert("Final result: PLAYER WINS!");
      location.reload();
    } else if (result < 0) {
      alert("Final result: COMPUTER WINS!");
      location.reload();
    } else location.reload();
};


game();
*/