const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
let resultBoard = document.querySelector('.resultBoard');

let resultRoundDiv = document.createElement('div');
let scoreDiv = document.createElement('div');
let resultRound = document.createElement('p');

let playerScore = document.createElement('p');
let computerScore = document.createElement('p');

const resetBtn = document.createElement('button');
resetBtn.textContent = 'Try Again';

let result = null;
let player = 0;
let computer = 0;

function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)] ;
}

function playRound(playerSelection, computerSelection){

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

resetBtn.addEventListener('click', () => {
    result = null;
    player = 0;
    computer = 0;
    resultRoundDiv.innerHTML = '';
    scoreDiv.innerHTML = '';
    
    rockBtn.style.display = 'inline'; 
    paperBtn.style.display = 'inline';
    scissorsBtn.style.display = 'inline';

    game();

});

function tallyPoints(){
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

    if (player === 5 || computer === 5){
        let winner = (player === 5) ? 'Player' : 'Computer';
        resultRound.textContent = `${winner} Wins The Match!`;
        resultRoundDiv.innerHTML = '';
        resultRoundDiv.appendChild(resultRound);
        resultBoard.appendChild(resetBtn);

        rockBtn.style.display = 'none'; 
        paperBtn.style.display = 'none';
        scissorsBtn.style.display = 'none';
    }
}

function game(){
    resultBoard.innerHTML = '';  
    resultBoard.appendChild(resultRoundDiv);
    resultBoard.appendChild(scoreDiv);
}


game();