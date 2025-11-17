/* Rock Paper Scissors Game by Max You */

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

function displayWinner(humanScore, computerScore) {
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

}

/* MAIN GAME FUNCTION */
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let buttons = document.querySelectorAll("button");

    buttons.forEach((btn) => 
        btn.addEventListener("click", (e) => {

            // Stop the game if someone already reached 5
            if (humanScore >= 5 || computerScore >= 5) {
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
                displayWinner(humanScore, computerScore);
            } else if (computerScore === 5) {
                displayWinner(humanScore, computerScore);
            }
        })
    );
}

/* MAIN PROGRAM */
playGame();
