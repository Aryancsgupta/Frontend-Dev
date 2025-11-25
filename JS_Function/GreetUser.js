// Q1.js

// Callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Main function
function greetUser(name, callback) {
    console.log("Hello " + name);
    callback(); // executing callback
}

// Calling function
greetUser("Amit", showEndMessage);
