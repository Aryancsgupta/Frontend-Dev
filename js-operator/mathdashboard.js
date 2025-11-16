// Q3: Math Utility Dashboard
// ---------------------------------------------------------------
// Display different mathematical operations using Math object.

// Given number
let x = 16.75;

// Rounded value
let rounded = Math.round(x);

// Square root
let squareRoot = Math.sqrt(x);

// Power (x^3)
let powerValue = Math.pow(x, 3);

// Random number between 10–50
let randomValue = Math.floor(Math.random() * 41) + 10;

// Formatted summary
let summary = `
Math Utility Dashboard
--------------------------------
Original Number: ${x}
Rounded Value: ${rounded}
Square Root: ${squareRoot.toFixed(2)}
x³ Value: ${powerValue.toFixed(2)}
Random Number (10–50): ${randomValue}
`;

console.log(summary);
