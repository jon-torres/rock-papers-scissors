'use strict';

// Initial values for the scores
let playerScore = 0;
let computerScore = 0;

// The computer picks a random move between the items in the array.
const computerPlay = function() {
  const moves = [
    'rock',
    'paper',
    'scissors'
  ];
  return moves[Math.floor(Math.random() * moves.length)];
};

const playRound = function() {
  let roundResult = '';
  let playerSelection = prompt('Make your move and pick paper, rock or scissors!').toLowerCase();
  const computerSelection = computerPlay();

  // Tie
  if (playerSelection === computerSelection) {
    roundResult = `Tie! No one wins this round. The current score is ${playerScore} vs. ${computerScore}`;

    console.log(`You picked ${playerSelection} and the computer picked ${computerSelection}.
    ${roundResult}`);

    //Player win conditions
  } else if (
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    playerScore++;

    roundResult = `You won this round! The score is now ${playerScore} vs. ${computerScore}`;

    console.log(`You picked ${playerSelection} and the computer picked ${computerSelection}.
    ${roundResult}`);

    // Machine win conditions
  } else if (
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    computerScore++;
    roundResult = `You lose this round! The score is now ${playerScore} vs. ${computerScore}`;

    console.log(`You picked ${playerSelection} and the computer picked ${computerSelection}.
    ${roundResult}`);
  } else {
    console.log(`Please, enter rock, paper or scissors.`);
  }
};

// Plays 5 rounds of rock, paper and scissors and print the final results.
const game = function() {
  for (let i = 1; i <= 5; i++) {
    playRound();
  }

  if (playerScore === computerScore) {
    console.log(`It's a Tie! \n The final score is ${playerScore} vs. ${computerScore}.`);
  } else if (playerScore < computerScore) {
    console.log(`The computer won. Try again! \n The final score is ${playerScore} vs. ${computerScore}.`);
  } else {
    console.log(`Congratulations! You won! \n The final score is ${playerScore} vs. ${computerScore}.`);
  }
};

game();
