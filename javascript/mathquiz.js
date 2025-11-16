// Q9: Random Math Quiz Generator
// ----------------------------------------------------------------
// Generates a random arithmetic question and calculates the answer.

// Generate two random numbers (1–20)
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

// Random operator from array
let operators = ['+', '-', '*', '/'];
let operator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

// Calculate using switch-case
switch (operator) {
    case '+':
        correctAnswer = num1 + num2;
        break;

    case '-':
        correctAnswer = num1 - num2;
        break;

    case '*':
        correctAnswer = num1 * num2;
        break;

    case '/':
        correctAnswer = (num1 / num2).toFixed(2);
        break;

    default:
        correctAnswer = null;
}

// Display question & answer
console.log(`Question: ${num1} ${operator} ${num2}`);
console.log(`Correct Answer: ${correctAnswer}`);
