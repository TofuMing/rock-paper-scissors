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
    let result;
    playerSelection = toLowerCase(playerSelection);
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "Rock": result = "You Drew! Rock has no effect on Rock";
                case "Paper": result = "You Lose! Paper beats Rock";
                case "Scissors": result = "You Win! Rock beats Scissors";
            }
        case "paper":
            switch (computerSelection) {
                case "Rock": result = "You Won! Paper beats Rock";
                case "Paper": result = "You Drew! Paper has no effect on Paper";
                case "Scissors": result = "You Lose! Scissors beats Paper";
            }
        case "scissors":
            switch (computerSelection) {
                case "Rock": result = "You Lose! Rock beats Scissors";
                case "Paper": result = "You Won! Scissors beats Paper";
                case "Scissors": result = "You Drew! Scissors has no effect on Scissors";
            }
        default:
            result = "Please enter a Rock, Paper or Scissors";
    }
    return Result;
}