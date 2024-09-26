const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const scoreDisplay = document.querySelector("#scoreDisplay");
const roundDisplay = document.querySelector("#roundDisplay");
const gameDisplay = document.querySelector("#gameDisplay");
const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function playGame(playerChoice) {

    let computerChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        roundDisplay.textContent = "You WIN!"
    } else if (playerChoice === computerChoice) {
        roundDisplay.textContent = "It's a DRAW!"
    } else {
        computerScore++;
        roundDisplay.textContent = "Computer WINS!"
    }
    playerDisplay.textContent = `You chose: ${playerChoice}`;
    computerDisplay.textContent = `Computer chooses: ${computerChoice}`;
    scoreDisplay.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
}






