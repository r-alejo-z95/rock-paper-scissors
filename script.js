function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let playerChoice = prompt("What are you playing? ROCK, PAPER or SCISSORS?");

    if (playerChoice.toLowerCase() === "rock") {
        return "rock";
    } else if (playerChoice.toLowerCase() === "paper") {
        return "paper";
    } else if (playerChoice.toLowerCase() === "scissors") {
        return "scissors";
    } else {
        return "invalid answer";
    }
}

let humanScore = 0;
let computerScore = 0;
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playRound(humanSelection, computerSelection) {
    if (humanSelection === "rock" && computerSelection === "rock") {
        return "Draw!";
    } else if (humanSelection === "rock" && computerSelection === "paper") {
        return "Computer wins!";
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        return "Player wins!";
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        return "Player wins!";
    } else if (humanSelection === "paper" && computerSelection === "paper") {
        return "Draw!";
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
        return "Computer wins!";
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
        return "Computer wins!";
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        return "Player wins!";
    } else if (humanSelection === "scissors" && computerSelection === "scissors") {
        return "Draw!";
  }
}
    
