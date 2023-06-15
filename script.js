const computerSelection = getComputerChoice();
const currentPlayerScore = 0;
const currentComputerScore = 0;
const scores = document.querySelector('#scores')

const playerScore = document.createElement('p')
playerScore.classList.add('playerScore')
playerScore.textContent = `Player: ${currentPlayerScore}`

const computerScore = document.createElement('p')
computerScore.classList.add('playerScore')
computerScore.textContent = `Player: ${currentComputerScore}`

scores.appendChild(playerScore);
scores.appendChild(computerScore);


function getComputerChoice(){
    choices = ['rock', 'paper', 'scissors'];
    choices = Math.floor(Math.random() * choices.length);
    if (choices == 0){
        return 'rock'
    } else if (choices == 1){
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock' && computerSelection == 'scissors'
    || playerSelection == 'scissors' && computerSelection == 'paper'
    || playerSelection == 'paper' && computerSelection == 'rock'){
        return `Player wins! ${playerSelection} beats ${computerSelection}.`
    } else if (playerSelection == 'rock' && computerSelection == 'paper'
    || playerSelection == 'scissors' && computerSelection == 'rock'
    || playerSelection == 'paper' && computerSelection == 'scissors'){
        return `Computer wins! ${computerSelection} beats ${playerSelection}.`
    } else {
        return `It's a tie! Both player and computer selected ${playerSelection}.`
    }
} 

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(button.id, computerSelection))
    })
})



