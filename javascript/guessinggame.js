// Q7: Smart Guessing Game (Number Range)
// --------------------------------------------------------------
// Generates a secret number (1–50) and checks the user's guess.

// Generate random secret number
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Test guess value (you can change this to test)
let userGuess = 23;

// Output secret number (for testing only)
console.log("Secret Number:", secretNumber);
console.log("Your Guess:", userGuess);

// Guess checking logic
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Check closeness (±3 range)
    if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
        console.log("Very close!");
    } else {
        // Higher or lower
        if (userGuess > secretNumber) {
            console.log("Too high");
        } else {
            console.log("Too low");
        }
    }
}
