let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

document.getElementById("submitGuess").addEventListener("click", function() {
    let guess = Number(document.getElementById("guessInput").value);
    attempts++;

    if (guess > randomNumber) {
        document.getElementById("result").textContent = "Too high. Guess again!";
    } else if (guess < randomNumber) {
        document.getElementById("result").textContent = "Too low. Guess again!";
    } else {
        document.getElementById("result").textContent = `Correct! You guessed it in ${attempts} attempts.`;
    }
});
