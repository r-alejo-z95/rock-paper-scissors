const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const scoreDisplay = document.querySelector("#scoreDisplay");
const roundDisplay = document.querySelector("#roundDisplay");
const gameDisplay = document.querySelector("#gameDisplay");
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
    if (humanScore === 5 || computerScore === 5) {
        gameOver();
    }
}
function gameOver() {
    gameDisplay.textContent = "Game Over";
    humanScore = 0;
    computerScore = 0;
    scoreDisplay.textContent = "";
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Play Again";
    restartBtn.addEventListener("click", restartGame);
    gameDisplay.appendChild(restartBtn);
}

function restartGame() {
    playerDisplay.textContent = "You chose: ";
    computerDisplay.textContent = "Computer chooses: ";
    roundDisplay.textContent = "";
    gameDisplay.textContent = "";
}

//TODO anadir al game over quien gano, cambiar los mensajes de quien gana cada
//ronda por "Tu ganas ESTA RONDA"


