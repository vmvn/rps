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

function playGame() {
  
  let humanScore = 0;
  let computerScore = 0;
  
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      console.log('Tie!');
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
      console.log('You lose! Paper beats Rock!');
      computerScore++;
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
      console.log('You win! Rock beats Scissors!');
      humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
      console.log('You lose! Scissors beat Paper!');
      computerScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
      console.log('You win! Paper beats Rock!');
      humanScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
      console.log('You lose! Rock beats Scissors!');
      computerScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
      console.log('You win! Scissors beats Paper!');
      humanScore++;
    }
  }
  
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log('Current score: \nYou ' + humanScore + '-' + computerScore + ' Computer');
  }
  
  if (humanScore > computerScore) {
    console.log('You beat the computer! Congrats!')
  } else if (computerScore > humanScore) {
    console.log('You lost to the computer! Loser!')
  } else {
    console.log('You tied with the computer!')
  }
}

playGame();