const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const roundDisplay = document.querySelector("#roundDisplay");
const gameDisplay = document.querySelector("#gameDisplay");

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        console.log("Computer chooses ROCK");
        return "rock";
    } else if (randomNumber === 1) {
        console.log("Computer chooses PAPER");
        return "paper";
    } else {
        console.log("Computer chooses SCISSORS");
        return "scissors";
    }
}

function playGame(playerChoice) {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
    
        if (humanSelection === "rock" && computerSelection === "scissors" ||
            humanSelection === "paper" && computerSelection === "rock" ||
            humanSelection === "scissors" && computerSelection === "paper") {
            console.log("PLAYER wins this round!");
            humanScore++;
        } else if (humanSelection === computerSelection) {
            console.log("It's a DRAW!");
        } else {
            console.log("COMPUTER wins this round!");
            computerScore++;
        }
        console.log(`Score: Player - ${humanScore}, Computer - ${computerScore}`);
        console.log("----------");
    }

    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

playGame();

