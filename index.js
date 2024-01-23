const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
let resultBoard = document.querySelector('.resultBoard');
let selectionBoard = document.querySelector('.selectionBoard');
let playerImg = document.querySelector('.playerImg');
let computerImg = document.querySelector('.computerImg');
let playerScoreBoard = document.querySelector('.playerScoreBoard');
let computerScoreBoard = document.querySelector('.computerScoreBoard');

let resultRoundDiv = document.createElement('div');
let scoreDiv = document.createElement('div');

let resultRound = document.createElement('p');
resultRound.classList.add('result');

let playerScore = document.createElement('p');
let computerScore = document.createElement('p');

const resetBtn = document.createElement('button');
const resetSpan = document.createElement('span');
resetSpan.textContent = 'TRY AGAIN';

let rockImg = document.createElement('img');
let paperImg = document.createElement('img');
let scissorsImg = document.createElement('img');
rockImg.src = "img/rock.png";
rockImg.alt = "rock";
paperImg.src = "img/paper.png";
paperImg.alt = "paper";
scissorsImg.src = "img/scissors.png";
scissorsImg.alt = "scissors";
rockImg.classList.add("rockImg");
paperImg.classList.add("paperImg");
scissorsImg.classList.add("scissorsImg");

let result = null;
let player = 0;
let computer = 0;

function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)] ;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        computerSelection = getComputerChoice();
        return playRound(playerSelection, computerSelection);
    }

    // checks which image is player/computer then displays it
    selectionBoard.innerHTML = '';
    let selectedChoice = [rockImg, paperImg, scissorsImg];
    // displays the player's choice first
    playerImg.innerHTML = '';
    computerImg.innerHTML = '';
    for (let i = 0; i < selectedChoice.length; i++){
        if (selectedChoice[i].src.includes(playerSelection)){
            playerImg.appendChild(selectedChoice[i]); // repeating for rock: FIXED
            break;
        }
    }
    for (let i = 0; i < selectedChoice.length; i++){
        if (selectedChoice[i].src.includes(computerSelection)){
            computerImg.appendChild(selectedChoice[i]);
            break;
        }
    }
    selectionBoard.appendChild(playerScoreBoard);
    selectionBoard.appendChild(playerImg);
    selectionBoard.appendChild(computerImg);
    selectionBoard.appendChild(computerScoreBoard);

    if ((playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')){
        resultRound.textContent = `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
        resultRoundDiv.innerHTML = '';  
        resultRoundDiv.appendChild(resultRound);
        return false;
    } 

    resultRound.textContent = `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
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
    // scoreDiv.innerHTML = '';
    playerScoreBoard.innerHTML = '';
    computerScoreBoard.innerHTML = '';
    playerImg.innerHTML = '';
    computerImg.innerHTML = '';
    selectionBoard.innerHTML = '';
    
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

    playerScore.textContent = `PLAYER: ${player}`;
    computerScore.textContent = `COMPUTER: ${computer}`;

    // scoreDiv.innerHTML = '';
    // scoreDiv.appendChild(playerScore);
    // scoreDiv.appendChild(computerScore);
    
    playerScoreBoard.innerHTML = '';
    playerScoreBoard.appendChild(playerScore);
    computerScoreBoard.appendChild(computerScore);

    if (player === 5 || computer === 5){
        let winner = (player === 5) ? 'Player' : 'Computer';
        resultRound.textContent = `${winner} Wins The Match!`;
        resultRoundDiv.innerHTML = '';
        resultRoundDiv.appendChild(resultRound);
        resetBtn.appendChild(resetSpan);
        resultBoard.appendChild(resetBtn);

        rockBtn.style.display = 'none'; 
        paperBtn.style.display = 'none';
        scissorsBtn.style.display = 'none';
    }
}

function game(){
    selectionBoard.append(rockImg);
    selectionBoard.append(paperImg);
    selectionBoard.append(scissorsImg);
    resultBoard.innerHTML = '';  
    resultBoard.appendChild(resultRoundDiv);
    // resultBoard.appendChild(scoreDiv);
}

game();