console.log("Hello World");

let choices = ["Rock", "Paper", "Scissors"];
let hScore = 0;
let cScore = 0;

function getComputerChoice() {
    let pChoice = Math.floor(Math.random() * choices.length);
    return choices[pChoice];
}

function getHumanChoice() {
    let input = prompt("Lets play! Type a number: 1-Rock, 2-Paper, 3-Scissors");
    let hChoice = parseInt(input) - 1;

    if (hChoice >= 0 && hChoice < choices.length) {
        return choices[hChoice];
    } else {
        return "Invalid choice";
    }
}
