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