const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

let num1 = 0;
let num2 = 0;
let operator = "";

function operation (operator, num1, num2) {
    if (operator === "add") {
        return add(num1, num2);
    } else if (operator === "subtract") {
        return subtract(num1, num2);
    } else if (operator === "multiply") {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    }
}

let displayContent = "";

function pressNumber(value) {
    const display = document.querySelector('.display');
    if (display.textContent == "0") {
        display.innerHTML = value;
        displayContent = value;
    } else {
    display.innerHTML += value;
    displayContent += value;
    }
}

const numberBtn = document.querySelectorAll('.num');
console.log(numberBtn);

numberBtn.forEach(e => {
    console.log(e.textContent);
    e.addEventListener('click', () => pressNumber(e.textContent));
});


/*

    function game() {
    const btnRock = document.querySelector('#rock');
    const btnPaper = document.querySelector('#paper');
    const btnScissors = document.querySelector('#scissors');

    btnRock.addEventListener('click', () => playRound("rock", getComputerChoice()));
    btnPaper.addEventListener('click', () => playRound("paper", getComputerChoice()));
    btnScissors.addEventListener('click', () => playRound("scissors", getComputerChoice()));
}

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomPickIndex = Math.floor(Math.random() * choices.length);
    return choices[randomPickIndex].toString();
}

function playRound(playerSelection, computerSelection) {
    document.getElementById("player_selection").innerHTML = `${playerSelection.toUpperCase()}`;
    document.getElementById("computer_selection").innerHTML = `${computerSelection.toUpperCase()}`;
    if (playerSelection === computerSelection) {
        document.querySelector("#announcement>p").innerHTML = `It's a tie.`;
    } else if (
        playerSelection === "rock" && computerSelection === "scissors" || 
        playerSelection === "scissors" && computerSelection === "paper" || 
        playerSelection === "paper" && computerSelection === "rock"
        ) {
        document.querySelector("#announcement>p").innerHTML = `Yay, this round is yours!`;
        playerScore++;
        document.getElementById("score").innerHTML = `${playerScore} : ${computerScore}`;
    } else {
        document.querySelector("#announcement>p").innerHTML = `So bad. Wrong decision!`;
        computerScore++;
        document.getElementById("score").innerHTML = `${playerScore} : ${computerScore}`;
    }
    if (playerScore === 5 || computerScore === 5) {
        gameOver(playerScore, computerScore);
    }
}

function gameOver(playerScore, computerScore) {
    if (playerScore === 5) {
        document.querySelector("#announcement>p").innerHTML = `Congratulations, you are the winner!`;
    } else {
        document.querySelector("#announcement>p").innerHTML = `Oh no, you lost the game!`;
    }
}

game()




function createGrid(rows, columns) {
    for (i = 0; i < rows; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add('row-container');
        rowDiv.setAttribute('id', `r${i+1}`);
        sketchContainer.appendChild(rowDiv);
        for (k = 0; k < columns ; k++) {
            const colDiv = document.createElement("div");
            colDiv.classList.add('grid');
            colDiv.setAttribute('id', `c${k+1}`);
            colDiv.addEventListener('mouseover', function (e) {
                e.target.style.background = 'purple';
              });
            rowDiv.appendChild(colDiv);
        }
    }
}

const container = document.querySelector('#container');

const btnContainer = document.createElement("div");
btnContainer.classList.add('btn-container');
container.appendChild(btnContainer);

const sketchContainer = document.createElement("div");
sketchContainer.classList.add('sketch-container');
container.appendChild(sketchContainer);

const btn = document.createElement("button");
btn.addEventListener("click", createNewGrid);
btn.textContent = "CREATE GRID"
btnContainer.appendChild(btn);

function createNewGrid() {
    rows = prompt('How many rows should the grid contain of? ');
    columns = prompt('How many columns should the grid contain of? ');
    document.querySelectorAll('.grid').forEach(e => e.remove());
    document.querySelectorAll('.row-container').forEach(e => e.remove());
    createGrid(rows, columns);
}

*/