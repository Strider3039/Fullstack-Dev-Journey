// First Interactive Game
let playGame = confirm("Shall we play rock, paper, or scissors?");

if (playGame) {
    // play
    let playerChoice = prompt("please enter rock, paper, or scissors.");

    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();

        if (playerOne ==="rock" || playerOne === "paper" || playerOne == "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock"
                : computerChoice === 2 ? "paper"
                : "scissors";
            
            let result = 
            playerOne === computer
                ? "Tie game!"
                : playerOne === "rock" && computer === "paper"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "paper" && computer === "scissors"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "scissors" && computer === "rock"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;

            alert(result);

        } else {
            alert("You didn't enter rock, paper, or scissors.");
        }

        let playAgain = confirm("Play Again?");
            playAgain ? location.reload() 
                : alert("Thank you for playing!")

    } else {
        alert("I guess you changed your mind. Maybe next time.");
        playGame = false;
    }
}