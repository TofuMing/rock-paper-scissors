function getComputerChoice() {
    let result;
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        result = 'Rock';
    } else if (num === 1) {
        result = 'Paper';
    } else if (num === 2) {
        result = 'Scissors';
    }
    return result
}

function playRound(playerSelection, computerSelection) {
    let result;
    let playerSelectionLower = playerSelection.toLowerCase();
    console.log(playerSelectionLower)
    switch (playerSelectionLower) {
        case 'rock':
            switch (computerSelection) {
                case 'Rock': 
                    result = 'You Drew! Rock has no effect on Rock';
                    break;
                case 'Paper': 
                    result = 'You Lose! Paper beats Rock';
                    break;
                case 'Scissors': 
                    result = 'You Win! Rock beats Scissors';
                    break;
            }
            break;
        case 'paper':
            switch (computerSelection) {
                case 'Rock': 
                result = 'You Won! Paper beats Rock';
                break;
                case 'Paper': 
                result = 'You Drew! Paper has no effect on Paper';
                break;
                case 'Scissors': 
                result = 'You Lose! Scissors beats Paper';
                break;
            }
            break;
        case 'scissors':
            switch (computerSelection) {
                case 'Rock': 
                result = 'You Lose! Rock beats Scissors';
                break;
                case 'Paper': 
                result = 'You Won! Scissors beats Paper';
                break;
                case 'Scissors': 
                result = 'You Drew! Scissors has no effect on Scissors';
                break;
            }
            break;
        default:
            result = 'Please enter either Rock, Paper or Scissors';
    }
    return result;
}

let playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));