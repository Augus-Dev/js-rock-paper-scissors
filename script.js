console.log("Hello World");

function playGame() {
    let choices = ["Rock", "Paper", "Scissors"];
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        let randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getHumanChoice() {
        let input = prompt("Let's play! Type a number: 1-Rock, 2-Paper, 3-Scissors");
        let choiceIndex = parseInt(input) - 1;
        
        if (choiceIndex >= 0 && choiceIndex < choices.length) {
            return choices[choiceIndex];
        } else {
            alert("Invalid choice! Please type 1, 2 or 3");
            return getHumanChoice(); // Chama a função novamente
        }
    }

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}`);
            return "tie";
        }
        
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            return "human";
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            return "computer";
        }
    }

    // Jogar 5 rondas
    console.log("=== STARTING GAME ===");
    
    for (let round = 1; round <= 5; round++) {
        console.log(`--- Round ${round} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`You chose: ${humanSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        playRound(humanSelection, computerSelection);
        console.log(`Scores - You: ${humanScore} | Computer: ${computerScore}\n`);
    }

    // Declarar vencedor final
    console.log("=== FINAL RESULT ===");
    if (humanScore > computerScore) {
        console.log(`🎉 YOU WIN THE GAME! ${humanScore}-${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`💻 COMPUTER WINS THE GAME! ${computerScore}-${humanScore}`);
    } else {
        console.log(`🤝 IT'S A TIE! ${humanScore}-${computerScore}`);
    }
}

// Iniciar o jogo
playGame();
