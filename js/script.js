//global variables
let randomNumber;
let attempts = 0;
let wins = 0;
let losses = 0;


//event listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

initializeGame();



//start the guessing game
function initializeGame() {
    randomNumber = Math.floor(Math.random() * 99) + 1;
    attempts = 0;
    console.log("randomNumber: " + randomNumber);

    document.querySelector("#resetBtn").style.display = "none";     //hiding the reset button

    document.querySelector("#guessBtn").style.display = "inline";   //showing guess button

    let playerGuess = document.querySelector("#playerGuess");
    playerGuess.focus();                                            //adding focus to textbox
    playerGuess.value = "";                                         //clears the textbox

    let feedback = document.querySelector("#feedbackBox");
    feedback.textContent = "";                                      //clears the feedback

    document.querySelector("#guessesBox").textContent = "";         //clears previous guesses
    document.querySelector("#guessesLeft").textContent = 7          //restarts previous attempts
}


//check user's guess
function checkGuess() {
    let feedback = document.querySelector("#feedbackBox");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);

    if (guess < 1 || guess > 99) {

        feedback.textContent = "Guess is out of range! (Enter 1 - 99)";
        feedback.style.color = "red";

        return;
    }

    //checking if valid, higher, or lower. checks if attempts are all used.
    attempts++;
    console.log("Attempts: " + attempts);
    feedback.style.color = "orange";
    if (guess == randomNumber) {
        feedback.textContent = "Correct guess, you won!";
        feedback.style.color = "darkgreen";
        wins++;
        document.querySelector("#wins").textContent = wins;
        gameOver();
    }
    else {
        document.querySelector("#guessesBox").textContent += guess + " ";
        document.querySelector("#guessesLeft").textContent = 7 - attempts;
        if (attempts == 7) {
            feedback.textContent = "Sorry, you lost! The number was " + randomNumber;
            feedback.style.color = "red";
            losses++;
            document.querySelector("#losses").textContent = losses;
            gameOver();
        }
        else if (guess > randomNumber) {
            feedback.textContent = "Guess was high";
        }
        else {
            feedback.textContent = "Guess was low";
        }
    }
}

//hide guess button, display reset button again
function gameOver() {
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none";
    resetBtn.style.display = "inline";
}

