// Initialize array of computerChoices and guesses.
var computerChoices = "abcdefghijklmnopqrstuvwxyz";
var guesses = [];

// Initialize variables to count number of wins, losses, and remaining guesses with starting values.
var wins = 0;
var losses = 0;
var remaining = 9;

// Initialize variables that reference to place where to display in HTML.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var remainingText = document.getElementById("remaining-text");
var guessesText = document.getElementById("guesses-text");
var msgText = document.getElementById("msg-text");

// The Psychic-Game
document.onkeyup = function (event) {
    var computerGuess = computerChoices[Math.floor(Math.random() * 26)];
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    guesses.push(userGuess);

    // Log to browser console
    console.log(userGuess);
    console.log(computerGuess);
    console.log(guesses);

    // if userGuess is equal to computerGuess, add +1 Win, display message and reset variables remaining and guesses
    if (userGuess === computerGuess) {
        winsText.textContent = "Wins: " + ++wins;
        msgText.textContent = "Yes! Again.";
        remaining = 9;
        guesses = [];
    }

    // if userGuess is NOT equal to computerGuess, display current guesses array, decrease by -1 variable remaining, display message
    if (userGuess != computerGuess) {
        guessesText.textContent = "Your guesses so far: " + guesses;
        remainingText.textContent = "Guesses Left: " + --remaining;
        msgText.textContent = "Nope! Guess Again.";
    }

    // if remaining value equals zero, add +1 Loss, display message and reset variables remaining and guesses
    if (remaining === 0) {
        lossesText.textContent = "Losses: " + ++losses;
        msgText.textContent = "Bummer! Try Again.";
        remaining = 9;
        guesses = [];
    }
}




