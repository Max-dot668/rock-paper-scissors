/* Rock Paper Scissors Game by Max You */

// Query Selectors
let buttons = document.querySelectorAll("button");

// Function that matches btn to "rock", "paper", or "scissors" 
const gameSymbol = (btn) => {
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

// Add Event Listener for each button
buttons.forEach((btn) => btn.addEventListener("click", (e) => {
    // Get human selection
    let currBtn = e.currentTarget.id;
    const humanSelection = gameSymbol(currBtn);
    console.log(`Human selection: ${humanSelection}`);

    // Get computer selection
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = () => { return choices[Math.floor(Math.random() * choices.length)] };
    console.log(`Computer selection ${computerChoice()}`);
}));

// function that plays a single round 
