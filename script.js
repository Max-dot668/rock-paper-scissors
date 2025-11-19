/* Rock Paper Scissors Game by Max You */

/* GLOBAL VARIABLES */
let humanScore = 0;
let computerScore = 0;

/* HELPER FUNCTIONS */
const matchSymbol = (btn) => {
    switch(btn) {
        case "rock-btn":
            return "rock";
        case "paper-btn":
            return "paper";
        case "scissors-btn":
            return "scissors";
    }
    return "";
};

// Function that handles the game logic
function playRound(computerChoice, humanChoice) {
    if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            return true;
        }
    if ((computerChoice === "rock" && humanChoice === "scissors") ||             
        (computerChoice === "paper" && humanChoice === "rock") || 
        (computerChoice === "scissors" && humanChoice === "paper")) {
            return false;
        }
        return false;
}

function playMatch(humanSelection, computerSelection) {
    // Tie
    if (humanSelection === computerSelection) {
        return `It's a tie!\r\nBoth chose ${humanSelection}.\r\n`;
    }

    // Human wins
    if (humanSelection === "rock" && computerSelection === "scissors") {
        return "You win!\r\nRock beats Scissors.\r\n";
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        return "You win!\r\nPaper beats Rock.\r\n";
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        return "You win!\r\nScissors beats Paper.\r\n";
    }

    // Computer wins
    if (computerSelection === "rock" && humanSelection === "scissors") {
        return "You lose!\r\nRock beats Scissors.\r\n";
    } else if (computerSelection === "paper" && humanSelection === "rock") {
        return "You lose!\r\nPaper beats Rock.\r\n";
    } else if (computerSelection === "scissors" && humanSelection === "paper") {
        return "You lose!\r\nScissors beats Paper.\r\n";
    }

    return "Invalid selection.\r\n";
}

// Display current scores
function displayCurrentScores(humanSelection, computerSelection, playerWins) {
    // Prints current scores on the display
    const display = document.querySelector(".display");

    // Create the border
    const currentScore = document.createElement("div");
    currentScore.setAttribute("style", "border: 2px solid black;");

    // Text inside the border
    const para = document.createElement("p");
    para.setAttribute("style", "font-weight: bold; font-size:30px;");
    para.style.whiteSpace = "pre-wrap";
    const decideRoundWinner = playMatch(humanSelection, computerSelection);

    // Text content
    if (playerWins === true) {
        para.textContent += decideRoundWinner.toUpperCase();
        para.textContent += "\r\n";
        para.textContent += `PLAYER SCORE: ${humanScore}\r\n`;
        para.textContent += `COMPUTER SCORE: ${computerScore}\r\n`;
    } else {
        if (humanSelection === computerSelection) {
            para.textContent += decideRoundWinner.toUpperCase();
            para.textContent += "\r\n";
            para.textContent += `PLAYER SCORE: ${humanScore}\r\n`;
            para.textContent += `COMPUTER SCORE: ${computerScore}\r\n`;
        } else {
            para.textContent += decideRoundWinner.toUpperCase();
            para.textContent += "\r\n";
            para.textContent += `PLAYER SCORE: ${humanScore}\r\n`;
            para.textContent += `COMPUTER SCORE: ${computerScore}\r\n`;
        }
    }

    // Display on screen
    display.appendChild(currentScore);
    currentScore.appendChild(para);
}

// Prints the results to the webpage
function displayWinner() {
    const display = document.querySelector(".display");

    // Create the border
    const div = document.createElement("div");
    div.setAttribute("style", "border: 2px solid black;");

    // Text inside the border
    const para = document.createElement("p");
    para.setAttribute("style", "font-weight: bold; font-size:20px;");
    para.style.whiteSpace = "pre-wrap";
    

    // Text content
    para.textContent = "RESULTS\r\n";
    para.textContent += "=========\r\n";
    if (humanScore > computerScore) {
        para.textContent += "YOU WIN!\r\n";
    } else if (humanScore < computerScore) {
        para.textContent += "YOU LOSE.\r\n";
    } else {
        para.textContent += "TIE!\r\n";
    }
    para.textContent += `PLAYER SCORE: ${humanScore}\r\n`;
    para.textContent += `COMPUTER SCORE: ${computerScore}\r\n`;    
    
    // Display on screen
    display.appendChild(div);
    div.appendChild(para);

    // Retry button
    retryButton(display, div);
}

// Play Again button
function retryButton(display, div) {
    // Create the 'retry' button and style it
    const retryButton = document.createElement("button");
    retryButton.setAttribute("style", "padding: 8px; margin: 10px; font-size: 20px; font-weight: bold;");
    retryButton.textContent = "Retry";

    div.appendChild(retryButton);

    retryButton.addEventListener("click", (e) => {
        humanScore = 0;
        computerScore = 0;
        display.textContent = "";
    });
}

/* MAIN GAME FUNCTION */
function playGame() {
    let buttons = document.querySelectorAll("button");

    buttons.forEach((btn) => 
        btn.addEventListener("click", (e) => {

            // Game over
            if (humanScore >= 5 || computerScore >= 5) {
                console.log(`human score: ${humanScore}`);
                console.log(`computer score: ${computerScore}`);
                return; 
            }

            // Get selections
            const choices = ["rock", "paper", "scissors"];
            const computerSelection = choices[Math.floor(Math.random() * choices.length)];
            const humanSelection = matchSymbol(e.currentTarget.id);

            // Play one round
            const playerWins = playRound(computerSelection, humanSelection);
            const display = document.querySelector(".display");

            if (playerWins === true) {
                humanScore++;
                if (humanScore > 0 || computerScore > 0) {
                display.textContent = "";
            }
                displayCurrentScores(humanSelection, computerSelection, playerWins);
            } else {
                if (humanSelection === computerSelection) {
                    if (humanScore > 0 || computerScore > 0) {
                        display.textContent = "";
                    }
                    displayCurrentScores(humanSelection, computerSelection, playerWins);
                } else {
                    computerScore++;
                    if (humanScore > 0 || computerScore > 0) {
                        display.textContent = "";
                    }
                    displayCurrentScores(humanSelection, computerSelection, playerWins);
                }
            }
            // Check win condition
            if (humanScore === 5 || computerScore === 5) {
                display.textContent = "";
                displayWinner();
            }
        })
    );
}

/* MAIN PROGRAM */
playGame();
