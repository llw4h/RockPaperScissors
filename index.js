const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

let resultBoard = document.querySelector('.resultBoard');

function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)] ;
}

function playRound(playerSelection, computerSelection){
    let resultRound = document.createElement('p');

    if ((playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')){
        // console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        resultRound.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        resultBoard.innerHTML = '';  // Clear previous content
        resultBoard.appendChild(resultRound);
        return false;
    } 

    if (playerSelection === computerSelection) {
        computerSelection = getComputerChoice();
        return playRound(playerSelection, computerSelection);
    }
    // console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    resultRound.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    resultBoard.innerHTML = '';
    resultBoard.appendChild(resultRound);
    return true;
}

function game(){
    let playerScore = document.createElement('p');
    let computerScore = document.createElement('p');

    let player = 0;
    let computer = 0;

    // for (let i = 0; i < 5; i++){
        let result;

        rockBtn.addEventListener('click', () => {
            result = playRound('rock', getComputerChoice());
        });

        paperBtn.addEventListener('click', () => {
            result = playRound('paper', getComputerChoice());
        });
        scissorsBtn.addEventListener('click', () => {
            result = playRound('scissors', getComputerChoice());
        });

        // let computerSelection = getComputerChoice();
        // let result = playRound(playerSelection, computerSelection);
        if (result) {
            player++;
        } else {
            computer++;
        }

        // playerScore.textContent = `Player: ${player}`;
        // computerScore.textContent = `Computer: ${computer}`;

    // }

    // let resultMatch = document.createElement('p');
    // if (player > computer) {
    //     resultMatch.textContent = `You wins the match with a score of ${player}!`;
    // } else{
    //     resultMatch.textContent = `Computer wins the match with a score of ${computer}!`;
    // }
    
    // resultBoard.innerHTML = '';  // Clear previous content
    // resultBoard.appendChild(resultMatch);
    // resultBoard.appendChild(playerScore);
    // resultBoard.appendChild(computerScore);
}

game();