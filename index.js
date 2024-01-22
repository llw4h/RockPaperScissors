function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)] ;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return false;
    } 

    if (playerSelection === computerSelection) {
        computerSelection = getComputerChoice();
        return playRound(playerSelection, computerSelection);
    }
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return true;
}

function game(){
    let player = 0;
    let computer = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, Paper, Scissors: ");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result) {
            player++;
            continue;
        }
        computer ++;
    }
    if (player > computer) {
        console.log(`Player wins the match with a score of ${player}!`);
    } else{
        console.log("Computer wins the match with a score of ${computer}!");
    }
}

game();