"use strict";

/*
Q7 Requirements:
✔ Handle operations using switch
✔ Throw custom errors:
   - Divide by 0
   - Root of negative number
   - Invalid operation
✔ Use try...catch
✔ Print formatted summary
*/

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

// Custom Error Classes
class DivideByZeroError extends Error {
    constructor() {
        super("Cannot divide by zero");
        this.name = "DivideByZeroError";
    }
}

class NegativeRootError extends Error {
    constructor() {
        super("Cannot take root of a negative number");
        this.name = "NegativeRootError";
    }
}

class InvalidOperationError extends Error {
    constructor() {
        super("Invalid operation type");
        this.name = "InvalidOperationError";
    }
}

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;

        case "subtract":
            return a - b;

        case "divide":
            if (b === 0) throw new DivideByZeroError();
            return a / b;

        case "power":
            return a ** b;

        case "root":
            if (a < 0) throw new NegativeRootError();
            return Math.sqrt(a);

        default:
            throw new InvalidOperationError();
    }
}

console.log("======= SMART CALCULATOR REPORT =======\n");

for (let i = 0; i < operations.length; i++) {
    const op = operations[i];

    try {
        const result = calculate(op, num1, num2);

        console.log(`
Operation: ${op}
Numbers: ${num1}, ${num2}
Result: ${result}
-------------------------------------`);
    } catch (err) {
        console.log(`
Operation: ${op}
Numbers: ${num1}, ${num2}
Error Type: ${err.name}
Message: ${err.message}
-------------------------------------`);
    }
}
