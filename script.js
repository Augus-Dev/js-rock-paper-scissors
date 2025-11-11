let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice) {
    if (roundCount >= 5) {
        alert("Game already finished! Click Reset to play again.");
        return;
    }
    
    const computerChoice = getComputerChoice();
    roundCount++;
    
    // Atualizar display das escolhas
    document.getElementById('roundResult').innerHTML = 
        `You chose: <strong>${humanChoice}</strong><br>
         Computer chose: <strong>${computerChoice}</strong><br>`;
    
    // Lógica do jogo
    if (humanChoice === computerChoice) {
        document.getElementById('roundResult').innerHTML += "<strong>It's a tie!</strong>";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++;
        document.getElementById('roundResult').innerHTML += 
            `<strong style="color: green;">You win! ${humanChoice} beats ${computerChoice}</strong>`;
    } else {
        computerScore++;
        document.getElementById('roundResult').innerHTML += 
            `<strong style="color: red;">You lose! ${computerChoice} beats ${humanChoice}</strong>`;
    }
    
    // Atualizar scores
    document.getElementById('humanScore').textContent = humanScore;
    document.getElementById('computerScore').textContent = computerScore;
    
    // Verificar se o jogo terminou
    if (roundCount === 5) {
        let finalMessage = "";
        if (humanScore > computerScore) {
            finalMessage = "🎉 YOU WIN THE GAME!";
        } else if (computerScore > humanScore) {
            finalMessage = "💻 COMPUTER WINS THE GAME!";
        } else {
            finalMessage = "🤝 IT'S A TIE!";
        }
        document.getElementById('gameResult').innerHTML = 
            `<h2 style="color: #2c3e50;">${finalMessage}</h2>
             <p><strong>Final Score: ${humanScore}-${computerScore}</strong></p>`;
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
    document.getElementById('humanScore').textContent = "0";
    document.getElementById('computerScore').textContent = "0";
    document.getElementById('roundResult').textContent = "Make your choice!";
    document.getElementById('gameResult').textContent = "";
}
