
function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

function getUserChoice() {
    let userChoice = prompt("Enter Rock, Paper, or Scissor")
    return userChoice.toLocaleLowerCase()
}

console.log(getUserChoice());