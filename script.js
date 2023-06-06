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

console.log(getComputerChoice())