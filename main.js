function getComputerChoice() {
  let random = Math.floor(Math.random()*3);
  if (random == 0) {
    return 'rock';
  } else if (random == 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getHumanChoice() {
  return prompt().toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

const text = document.querySelector('.text')

function playRound(humanChoice) {
  
  const computerChoice = getComputerChoice();
  const choices = {
    rock: 'paper',
    paper: 'scissors',
    scissors: 'rock',
  }
  
  if (humanChoice == computerChoice) {
    text.textContent = 'Tie!';
  } else if (computerChoice === choices[humanChoice]) {
    text.textContent = 'You lose!';
    computerScore++;
  } else {
    text.textContent = 'You win!';
    humanScore++;
  }
  
  document.querySelector('.human .counter').textContent = humanScore;
  document.querySelector('.ai .counter').textContent = computerScore;
  
  if (humanScore >= 5) {
    alert('You beat the AI with the score of '
    + humanScore
    + '-'
    + computerScore
    + ' !');
    humanScore = 0;
    computerScore = 0;
    document.querySelector('.human .counter').textContent = humanScore;
    document.querySelector('.ai .counter').textContent = computerScore;
  } else if (computerScore >= 5) {
    alert('You lost to the AI with the score of '
    + humanScore
    + '-'
    + computerScore
    + ' !');
    humanScore = 0;
    computerScore = 0;
    document.querySelector('.human .counter').textContent = humanScore;
    document.querySelector('.ai .counter').textContent = computerScore;
  }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {playRound('rock', getComputerChoice())});
paper.addEventListener('click', () => {playRound('paper', getComputerChoice())});
scissors.addEventListener('click', () => {playRound('scissors', getComputerChoice())});