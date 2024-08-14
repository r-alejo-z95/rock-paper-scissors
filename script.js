function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        console.log("Computer chooses ROCK");
    } else if (randomNumber === 1) {
        console.log("Computer chooses PAPER");
    } else {
        console.log("Computer chooses SCISSORS");
    }
}

function getHumanChoice() {
    let playerChoice = prompt("What are you playing? ROCK, PAPER or SCISSORS?");

    if (playerChoice.toLowerCase() === "rock") {
        console.log("You have chosen ROCK");
    } else if (playerChoice.toLowerCase() === "paper") {
        console.log("You have chosen PAPER");
    } else if (playerChoice.toLowerCase() === "scissors") {
        console.log("You have chosen SCISSORS");
    } else {
        console.log("That's NOT an option");
    }
}

function playRound() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    if (humanSelection === "rock" && computerSelection === "rock") {
        console.log("It's a DRAW!");
        console.log("----------");
    } else if (humanSelection === "rock" && computerSelection === "paper") {
        console.log("COMPUTER wins!");
        console.log("----------");
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        console.log("PLAYER wins!");
        console.log("----------");
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        console.log("PLAYER wins!");
        console.log("----------");
    } else if (humanSelection === "paper" && computerSelection === "paper") {
        console.log("It's a DRAW!");
        console.log("----------");
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
        console.log("COMPUTER wins!");
        console.log("----------");
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
        console.log("COMPUTER wins!");
        console.log("----------");
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        console.log("PLAYER wins!");
        console.log("----------");
    } else {
        console.log("It's a DRAW!");
        console.log("----------");
  }
}

let humanScore = 0;
let computerScore = 0;
console.log("Let's begin!");
console.log("----------");
playRound();

    
