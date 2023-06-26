const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

let num1 = 0;
let num2 = 0;
let operator = "";
let displayContent = "";

function operation (operator, num1, num2) {
    if (num2 == 0) {
        num2 = +displayContent;
    };
    let result = 0;
    const display = document.querySelector('.display');
    if (operator == "add") {
        result = add(num1, num2);
    } else if (operator == "subtract") {
        result = subtract(num1, num2);
    } else if (operator == "multiply") {
        result = multiply(num1, num2);
    } else {
        if (num2 !== 0) {
            result = divide(num1, num2);
        }
    };
    if (num2 == 0) {
        display.innerHTML = "Can't divide by 0";
    } else {
        display.innerHTML = Math.round(result * 10e12) / 10e12;
        displayContent = result;
    };
    num2 = 0;
}

function pressNumber(value) {
    const display = document.querySelector('.display');
    if (display.textContent == "0" || displayContent == "") {
        display.innerHTML = value;
        displayContent = value;
    } else {
    display.innerHTML += value;
    displayContent += value;
    }
}

function pressOperator(value) {
    const display = document.querySelector('.display');
    if (num1 !== 0) {
        num2 = displayContent;
        operation(operator, +num1, +num2);
        display.innerHTML = Math.round(displayContent * 10e12) / 10e12;
    }
    num1 = displayContent;
    console.log(num1);
    displayContent = "";
    if (value === "+") {
        operator = "add";
    } else if (value === "-") {
        operator = "subtract";
    } else if (value === "*") {
        operator = "multiply";
    } else {
        operator = "divide";
    }
}

function pressClear() {
    const display = document.querySelector('.display');
    display.innerHTML = "0";
    displayContent = "";
    num1 = 0;
    num2 = 0;
    operator = "";
}

const numberBtn = document.querySelectorAll('.num');
numberBtn.forEach(e => {
    e.addEventListener('click', () => pressNumber(e.textContent));
});

const operatorBtn = document.querySelectorAll('.op');
operatorBtn.forEach(e => {
    e.addEventListener('click', () => pressOperator(e.textContent));
});

const calcBtn = document.querySelector('.calc');
calcBtn.addEventListener('click', () => operation(operator, +num1, +displayContent));

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => pressClear());

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