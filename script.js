function startGame() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 0;
    let gameOver = false;

    document.getElementById("result").textContent = "";
    document.getElementById("guessInput").value = "";

    document.getElementById("submitGuess").onclick = function() {
        if (gameOver) return; 

        let guess = Number(document.getElementById("guessInput").value);
        attempts++;

        if (guess > randomNumber) {
            document.getElementById("result").textContent = "Too high. Guess again!";
        } else if (guess < randomNumber) {
            document.getElementById("result").textContent = "Too low. Guess again!";
        } else {
            document.getElementById("result").textContent = `Correct! You guessed it in ${attempts} attempts.`;
            gameOver = true;

            setTimeout(() => {
                let playAgain = confirm("Do you want to play again?");
                if (playAgain) {
                    startGame(); 
                }
            }, 100);
        }
    };
}

startGame();
