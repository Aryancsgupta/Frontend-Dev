// Q1: Personalized Login Greeting
// -----------------------------------------------
// This program greets the user based on the current time.
// Morning  : Before 12 PM
// Afternoon: Between 12 PM and 5 PM (17)
// Evening  : After 5 PM

// User's name
let userName = "Amit";

// Get current hour (0–23)
let currentHour = new Date().getHours();

// Decide greeting message
let greetingMessage = "";

if (currentHour < 12) {
    greetingMessage = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {
    greetingMessage = `Good Afternoon ${userName}!`;
} else {
    greetingMessage = `Good Evening ${userName}!`;
}

// Output
console.log(greetingMessage);
