
let userScore = 0;
let compScore = 0;

const resultText = document.querySelector("#results");
const scoreText = document.querySelector("#score");

scoreText.textContent = `User: ${userScore} Computer: ${compScore}`

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

function updateScore() {
    scoreText.textContent = `User: ${userScore} Computer: ${compScore}`

    if (userScore >= 5) {
        scoreText.textContent = "YOU WIN";
        reset();
    }
    if (compScore >= 5 ) {
        scoreText.textContent = "Computer WINS"
        reset();
    }
}

function reset() {
    userScore = 0;
    compScore = 0;
    updateScore();
    resultText = "";
}

function playround(userSelection, computerSelection) {
 

    if ((userSelection === "rock") & (computerSelection === "scissors")) {
        userScore ++;
        updateScore();
        return "You win rock beats scissors"
    } else if ((userSelection === "rock") & (computerSelection === "paper")) {
        compScore++;
        updateScore;
        return "You lose paper beats rock"
    } else if ((userSelection === "paper") & (computerSelection === "rock")) {
        userScore++;
        updateScore();
        return "You win paper beats rock"
    } else if ((userSelection === "paper")&(computerSelection === "scissors")) {
        compScore++;
        updateScore();
        return "You lose scissors beat paper"
    } else if ((userSelection === "scissors") & (computerSelection === "paper")) {
        userScore++;
        updateScore();
        return "You win scissors beat paper"
    } else if ((userSelection === "scissors") & (computerSelection === "rock")) {
        compScore++;
        updateScore();
        return "You lose rock beats scissor"
    } else {
        return "You tied"
    }
}


function rock() {
    let result = playround("rock", getComputerChoice());
    resultText.textContent = result;
}

function paper() {
    let result = playround("paper", getComputerChoice());
    resultText.textContent = result;
}

function scissors() {
    let result = playround("scissors", getComputerChoice());
    resultText.textContent = result;
}