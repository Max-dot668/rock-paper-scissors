/* Rock Paper Scissors Console Game */

/* Global Variables */
let humanScore = 0;
let computerScore = 0;

/* Function Implementations */
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

function getHumanChoice(btnChoice) {
  return btnChoice;
}

function playRound(humanChoice, computerChoice) {
  // For Debugging (Remove later)
  console.log(`user's choice: ${humanChoice}`);
  console.log(`computer's choice: ${computerChoice}`);

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
  // Tie
  if (humanChoice === computerChoice) {
    console.log("It's a tie! no one earns a point");
  }
}

function displayResults(humanScore, computerScore) {
  const results = document.querySelector(".results");

  const resultHeader = document.createElement("h1");
  resultHeader.textContent = "RESULTS";
  results.appendChild(resultHeader);

  const playerTotalPoints = document.createElement("p");
  playerTotalPoints.classList.add("player-score");
  playerTotalPoints.textContent = `Player Score: ${humanScore}`;
  results.appendChild(playerTotalPoints);

  const computerTotalPoints = document.createElement("p");
  computerTotalPoints.classList.add("computer-score");
  computerTotalPoints.textContent = `Computer Score: ${computerScore}`;
  results.appendChild(computerTotalPoints);

  const winner = document.createElement("p");
  winner.classList.add("winner");
  if (humanScore > computerScore) {
    winner.textContent = "You Win!";
  } else if (humanScore < computerScore) {
    winner.textContent = "You Lost :(";
  } else {
    winner.textContent = "It's a Tie!";
  }
  results.appendChild(winner);
}

// Event Listener triggered by specific button clicked
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(getHumanChoice(e.target.id), getComputerChoice());
  });
});

displayResults(humanScore, computerScore);
