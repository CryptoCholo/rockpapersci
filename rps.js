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

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

function playRound(playerSelection, computerSelection) { 
     computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        roundWinner = 'It\'s a tie';
    } else if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        playerScore++;
       roundWinner = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
       roundWinner = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}  

function endGame() {
    return playerScore = 5 || computerScore = 5)  
}

function 
