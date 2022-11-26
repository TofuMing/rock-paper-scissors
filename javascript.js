function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        let result = "Rock";
    } else if (num === 1) {
        let result = "Paper";
    } else if (num === 2) {
        let result = "Scissors";
    }
    return result
}

function playRound(playerSelection, computerSelection) {
    playerSelection = toLowerCase(playerSelection);
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "Rock": console.log("You Drew! Rock has no effect on Rock");
                case "Paper": console.log("You Lose! Paper beats Rock");
                case "Scissors": console.log("You Win! Rock beats Scissors")
            }
        case "paper":
            switch (computerSelection) {
                case "Rock": console.log("You Won! Paper beats Rock");
                case "Paper": console.log("You Drew! Paper has no effect on Paper");
                case "Scissors": console.log("You Lose! Scissors beats Paper")
            }
        case "scissors":
            switch (computerSelection) {
                case "Rock": console.log("You Lose! Rock beats Scissors");
                case "Paper": console.log("You Won! Scissors beats Paper");
                case "Scissors": console.log("You Drew! Scissors has no effect on Scissors")
            }
        default:
            console.log("Please enter a Rock, Paper or Scissors")
    }
}