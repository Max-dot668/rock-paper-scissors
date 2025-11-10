/* Rock Paper Scissors Game by Max You */

// function that randomly returns "rock", "paper", "scissors"
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); // generates random number from 0 to 2 inclusive
    let result = "";
    switch(choice) {
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper";
            break;
        case 2:
            result = "scissors";
            break;
    }
    return result;
}

// function that prompts the user for input
const getHumanChoice = () => prompt("Enter rock, paper, or scissors:");

// function that calls playRound to play 5 rounds, keeps track of the scores 
// and declares a winner at the end
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    // function that plays a round, increments the round winners' score 
    // and logs a winner announcement.
    // arguments: getHumanChoice(), getComputerChoice()
    function playRound(computerChoice, humanChoice) {
        // Draw case event handling 
        if (humanChoice === computerChoice) {
            console.log("Tie!");
        }   
        // Human plays paper
        if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock.");
            ++humanScore;
        } 
        if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper.");
            ++computerScore;
        }    
        // Human plays scissors
        if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper.");
            ++humanScore;
        } 
        if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors.");
            ++computerScore;
        }
        // Human plays rock
        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.");
            ++humanScore;
        } 
        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.");
            ++computerScore;
        }
    }
    // Play first round
    let humanSelection = getHumanChoice().toLowerCase();
    let computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection);
    console.log(`Player Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);

    // Loop remaining 4 games
    let round = 1;
    while (round < 5) {
        humanSelection = getHumanChoice().toLowerCase();
        computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
        console.log(`Player Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
        ++round;    // next round
    }
    // Decide winner
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game.");
    } else {
        console.log("It's a tie!");
    }
}

// Main 
playGame();