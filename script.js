const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const roundDisplay = document.querySelector("#roundDisplay");
const gameDisplay = document.querySelector("#gameDisplay");
const choices = ["rock", "paper", "scissors"];

function playGame(playerChoice) {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {

        let computerChoice = (Math.floor(Math.random() * 3));
    
        if (playerChoice === "rock" && computerChoice === "scissors" ||
            playerChoice === "paper" && computerChoice === "rock" ||
            playerChoice === "scissors" && computerChoice === "paper") {
            console.log("PLAYER wins this round!");
            humanScore++;
        } else if (playerChoice === computerChoice) {
            console.log("It's a DRAW!");
        } else {
            console.log("COMPUTER wins this round!");
            computerScore++;
        }
        console.log(`Score: Player - ${humanScore}, Computer - ${computerScore}`);
        console.log("----------");
    }

    // for (let i = 0; i < 5; i++) {
        playRound();
    // }
}

playGame();

