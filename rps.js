
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
        return "rock"
    } else if (choice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getUserChoice() {
    let userChoice = prompt("Enter Rock, Paper, or Scissors")
    return userChoice.toLocaleLowerCase()
}

function playround(userSelection, computerSelection) {
 

    if ((userSelection === "rock") & (computerSelection === "scissors")) {
        return "You win rock beats scissors"
    } else if ((userSelection === "rock") & (computerSelection === "paper")) {
        return "You lose paper beats rock"
    } else if ((userSelection === "paper") & (computerSelection === "rock")) {
        return "You win paper beats rock"
    } else if ((userSelection === "paper")&(computerSelection === "scissors")) {
        return "You lose scissors beat paper"
    } else if ((userSelection === "scissors") & (computerSelection === "paper")) {
        return "You win scissors beat paper"
    } else if ((userSelection === "scissors") & (computerSelection === "rock")) {
        return "You lose rock beats scissor"
    } else {
        return "You tied"
    }
}

function game() {
    console.log(playround(getUserChoice(),getComputerChoice()))
    console.log(playround(getUserChoice(),getComputerChoice()))
    console.log(playround(getUserChoice(),getComputerChoice()))
    console.log(playround(getUserChoice(),getComputerChoice()))
    console.log(playround(getUserChoice(),getComputerChoice()))
}

game()