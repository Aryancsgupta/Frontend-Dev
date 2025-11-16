// Q3: Monthly Expense Tracker
// ----------------------------------------------------
// This program calculates total, average, and tax-added
// monthly expenses using an array of 5 categories.

// Expenses: [food, travel, rent, bills, leisure]
let expenses = [5000, 1200, 8000, 2000, 1500];

// Step 1: Calculate total
let total = 0;
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
}

// Step 2: Calculate average
let average = total / expenses.length;

// Step 3: Add 10% tax to total
let taxRate = 0.10;
let finalAmount = total + total * taxRate;

// Rounding to 2 decimals
total = total.toFixed(2);
average = average.toFixed(2);
finalAmount = finalAmount.toFixed(2);

// Output
console.log("Total Expenses: ₹" + total);
console.log("Average Expense: ₹" + average);
console.log("Final Amount After Tax: ₹" + finalAmount);
