// Q2.js

function applyOperation(numbers, operation) {
    let result = [];

    for (let num of numbers) {
        result.push(operation(num));  // applying callback
    }

    return result;
}

// Doubling
const doubled = applyOperation([1, 2, 3, 4], num => num * 2);
console.log("Doubled:", doubled);

// Squaring
const squared = applyOperation([1, 2, 3, 4], num => num * 2);
console.log("Squared:", squared);
