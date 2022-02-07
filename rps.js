let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');


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
    let roundWinner = '';
     computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        roundWinner = 'It\'s a tie';
    } else if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        playerScore++;
       roundWinner = `You win! ${playerSelection} beats ${computerSelection}
        <br><br> player Score: ${playerScore} <br> computer Score: ${computerScore}`;
       if (playerScore == 5) {
       roundWinner += '<br> YOU WIN!! <br> RELOAD TO PLAY AGAIN!';
        disableButtons();
       }
    } else {
        computerScore++;
       roundWinner = `You lose! ${computerSelection} beats ${playerSelection}
       <br><br> player Score: ${playerScore} <br> computer Score: ${computerScore}`;
       if (computerScore == 5) {
        roundWinner += '<br>YOU LOSE!! <br> RELOAD TO PLAY AGAIN!';
        disableButtons();
        }
    }
    document.getElementById('outcome').innerHTML = roundWinner;
    return
}  

buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})