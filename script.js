const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const roundDisplay = document.querySelector("#roundDisplay");
const gameDisplay = document.querySelector("#gameDisplay");
const choices = ["rock", "paper", "scissors"];

function playGame(playerChoice) {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {

        let computerChoice = choices[Math.floor(Math.random() * 3)];
        console.log(computerChoice);
    
        if (playerChoice === "rock" && computerChoice === "scissors" ||
            playerChoice === "paper" && computerChoice === "rock" ||
            playerChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
        } else if (playerChoice === computerChoice) {
        } else {
            computerScore++;
        }
    }

    // for (let i = 0; i < 5; i++) {
        playRound();
    // }
}

playGame();

