/* Rock Paper Scissors Console Game */

/* Global Variables */
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt().toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  // Winning Case Scenarios
  if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You Won! Rock beats Paper.");
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You Won! Paper beats Rock.");
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You Won! Scissors beats Paper.");
    humanScore++;
  }
  // Losing Case Scenarios
  if (computerChoice == "rock" && humanChoice == "scissors") {
    console.log("You Lost! Rock beats Paper.");
    computerScore++;
  } else if (computerChoice == "paper" && humanChoice == "rock") {
    console.log("You Lost! Paper beats Rock.");
    computerScore++;
  } else if (computerChoice == "scissors" && humanChoice == "paper") {
    console.log("You Lost! Scissors beats Paper.");
    computerScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  // Print Outcome
  if (humanScore > computerScore) {
    console.log(
      `You won the game!\n
      Your Score: ${humanScore}\n
      Computer Score: ${computerScore}`,
    );
  } else if (humanScore < computerScore) {
    console.log(
      `You lost the game.\n
      Your Score: ${humanScore}\n
      Computer Score: ${computerScore}`,
    );
  } else {
    console.log(
      `It's a tie!.\n
      Your Score: ${humanScore}\n
      Computer Score: ${computerScore}`,
    );
  }
}

/* Start Game */
playGame();
