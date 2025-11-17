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
}

// Display current scores
function displayCurrentScores() {
    // TODO: Create a function that shows the game scores after each button click
    // Since humanScore and computerScore are global variables,
    // we don't need to pass them as parameters to this function.
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
        display.removeChild(div);
    });
}

/* MAIN GAME FUNCTION */
function playGame() {
    let buttons = document.querySelectorAll("button");

    buttons.forEach((btn) => 
        btn.addEventListener("click", (e) => {

            // Stop the game if someone already reached 5
            if (humanScore >= 5 || computerScore >= 5) {
                console.log(`human score: ${humanScore}`);
                console.log(`computer score: ${computerScore}`);
                return; 
            }

            // Get selections
            const choices = ["rock", "paper", "scissors"];
            const computerSelection = choices[Math.floor(Math.random() * choices.length)];
            const humanSelection = matchSymbol(e.currentTarget.id);

            console.log(`Computer selection: ${computerSelection}`);
            console.log(`Human selection: ${humanSelection}`);

            // Play one round
            const playerWins = playRound(computerSelection, humanSelection);

            if (playerWins === true) {
                humanScore++;
            } else {
                computerScore++;
            }

            // Check win condition
            if (humanScore === 5) {
                displayWinner();
            } else if (computerScore === 5) {
                displayWinner();
            }
        })
    );
}

/* MAIN PROGRAM */
playGame();
