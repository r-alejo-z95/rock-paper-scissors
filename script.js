const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const scoreDisplay = document.querySelector("#scoreDisplay");
const roundDisplay = document.querySelector("#roundDisplay");
const gameDisplay = document.querySelector("#gameDisplay");
const displays = document.querySelector(".displays");
const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    if (humanScore < 5 && computerScore < 5) {
        let computerChoice = choices[Math.floor(Math.random() * 3)];

        if (playerChoice === "rock" && computerChoice === "scissors" ||
            playerChoice === "paper" && computerChoice === "rock" ||
            playerChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            roundDisplay.textContent = "You WIN this round!"
        } else if (playerChoice === computerChoice) {
            roundDisplay.textContent = "It's a DRAW!"
        } else {
            computerScore++;
            roundDisplay.textContent = "Computer WINS this round!"
        }
        playerDisplay.textContent = `You chose: ${playerChoice}`;
        computerDisplay.textContent = `Computer chooses: ${computerChoice}`;
        scoreDisplay.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
    }
    if (humanScore === 5 || computerScore === 5) {
        gameOver();
    }
}
function gameOver() {
    if (humanScore > computerScore) {
        gameDisplay.textContent = "You are a WINNER!";
    } else {
        gameDisplay.textContent = "GAME OVER"
    }

    humanScore = 0;
    computerScore = 0;
    scoreDisplay.textContent = "";

    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Play Again";
    restartBtn.addEventListener("click", restartGame);
    restartBtn.id = "restartBtn";
    displays.appendChild(restartBtn);

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.setAttribute('disabled', 'true');
    });
}

function restartGame() {
    playerDisplay.textContent = "Click on your choice";
    computerDisplay.textContent = "Computer is waiting";
    roundDisplay.textContent = "";
    gameDisplay.textContent = "";

    const restartBtn = document.querySelector("#restartBtn");
    restartBtn.remove();

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.setAttribute('disabled', 'false');
    });
}



