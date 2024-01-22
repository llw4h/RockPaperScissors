const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
let resultBoard = document.querySelector('.resultBoard');

let resultRoundDiv = document.createElement('div');
let scoreDiv = document.createElement('div');

function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)] ;
}

function playRound(playerSelection, computerSelection){
    let resultRound = document.createElement('p');

    if ((playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')){
        resultRound.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        resultRoundDiv.innerHTML = '';  
        resultRoundDiv.appendChild(resultRound);
        return false;
    } 

    if (playerSelection === computerSelection) {
        computerSelection = getComputerChoice();
        return playRound(playerSelection, computerSelection);
    }

    resultRound.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    resultRoundDiv.innerHTML = '';
    resultRoundDiv.appendChild(resultRound);
    return true;
}

let result = null;
let player = 0;
let computer = 0;

rockBtn.addEventListener('click', () => {
    result = playRound('rock', getComputerChoice());
    tallyPoints();
});

paperBtn.addEventListener('click', () => {
    result = playRound('paper', getComputerChoice());
    tallyPoints();
});

scissorsBtn.addEventListener('click', () => {
    result = playRound('scissors', getComputerChoice());
    tallyPoints();
});

function tallyPoints(){
    let playerScore = document.createElement('p');
    let computerScore = document.createElement('p');

    if (result === true) {
        player++;
    } else {
        computer++;
    }

    playerScore.textContent = `Player: ${player}`;
    computerScore.textContent = `Computer: ${computer}`;

    scoreDiv.innerHTML = '';
    scoreDiv.appendChild(playerScore);
    scoreDiv.appendChild(computerScore);
}

function game(){
    // }

    // let resultMatch = document.createElement('p');
    // if (player > computer) {
    //     resultMatch.textContent = `You wins the match with a score of ${player}!`;
    // } else{
    //     resultMatch.textContent = `Computer wins the match with a score of ${computer}!`;
    // }
    
    resultBoard.innerHTML = '';  // Clear previous content
    // resultBoard.appendChild(resultMatch);
    resultBoard.appendChild(resultRoundDiv);
    resultBoard.appendChild(scoreDiv);
}

game();