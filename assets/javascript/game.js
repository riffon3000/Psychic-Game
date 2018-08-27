// Initialize array of computerChoices and guesses.
var computerChoices = "abcdefghijklmnopqrstuvwxyz";
var guesses = [];

// Initialize a variable to hold the number of wins, losses, iterations and guesses remaining with starting values.
var wins = 0;
var losses = 0;
var remaining = 9;
var i;

// Initialize variables the hold reference to the places in the HTML where to display.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var remainingText = document.getElementById("remaining-text");
var guessesText = document.getElementById("guesses-text");
var msgText = document.getElementById("msg-text");


document.onkeyup = function (event) {
    var userGuess = event.key;
    guesses.push(userGuess);
    var computerGuess = computerChoices[Math.floor(Math.random() * 26)];

    console.log(userGuess);
    console.log(computerGuess);
    console.log(guesses);

    if (userGuess === computerGuess) {
        winsText.textContent = "Wins: " + ++wins;
        msgText.textContent = "Yes! Again.";
        guesses = [];
        
    }
    if (userGuess != computerGuess) {
        guessesText.textContent = "Your guesses so far: " + guesses;
        remainingText.textContent = "Guesses Left: " + --remaining;
        msgText.textContent = "Nope! Guess Again.";
    }
    if (remaining === 0) {
        lossesText.textContent = "Losses: " + ++losses;
        msgText.textContent = "Bummer! Try Again.";
        remaining = 9;
        guesses = [];  
    }
}




