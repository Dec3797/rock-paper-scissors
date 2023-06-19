const computerSelection = getComputerChoice();
let currentPlayerScore = 0;
let currentComputerScore = 0;
const scores = document.querySelector('#scores')
const result = document.querySelector('#result')
const winText = document.createElement('p');
winText.classList.add('winText');


const playerScore = document.createElement('p')
playerScore.classList.add('playerScore')
playerScore.textContent = `Player: ${currentPlayerScore}`

const computerScore = document.createElement('p')
computerScore.classList.add('pcomputerScore')
computerScore.textContent = `Computer: ${currentComputerScore}`

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
    if (playerSelection === 'rock' && computerSelection === 'scissors'
    || playerSelection === 'scissors' && computerSelection === 'paper'
    || playerSelection === 'paper' && computerSelection === 'rock'){
        currentPlayerScore++;
        winText.textContent =  `Player wins! ${playerSelection} beats ${computerSelection}.`
        
    } else if (playerSelection === 'rock' && computerSelection === 'paper'
    || playerSelection === 'scissors' && computerSelection === 'rock'
    || playerSelection === 'paper' && computerSelection === 'scissors'){
        currentComputerScore++;
        winText.textContent =  `Computer wins! ${computerSelection} beats ${playerSelection}.`
        
        
    } else {
        winText.textContent =  `It's a tie! Both player and computer selected ${playerSelection}.`
        
    }
} 

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerSelection)
    })

    result.appendChild(winText)})

function game() {
    while (playerScore < 5 && computerScore < 5) {
            playRound(playerSelection, computerSelection);
    }
}
    


game()