let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function computerPlay() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }

}

/*function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = false;
    })
}
*/
function playRound(playerSelection, computerSelection) { 
     computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        console.log(roundWinner = 'It\'s a tie');
    } else if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        playerScore++;
       console.log(roundWinner = `You win! ${playerSelection} beats ${computerSelection}`);
    } else {
        computerScore++;
       console.log(roundWinner = `You lose! ${computerSelection} beats ${playerSelection}`);
    }
    endGame();
}  

function endGame() {
   if (playerScore == 5) {
       console.log("Player is the winner!")
   } else if (computerScore == 5) {
       console.log("Computer is the Winner!")
   }

};
 playRound("ROCK", computerPlay());

