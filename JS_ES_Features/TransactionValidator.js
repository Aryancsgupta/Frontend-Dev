"use strict";

// Given transaction data
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

console.log("===== TRANSACTION VALIDATION REPORT =====");

// Arrays to categorize results
const validTransactions = [];
const invalidTransactions = [];

// Custom error classes
class NegativeAmountError extends Error {
    constructor(message) {
        super(message);
        this.name = "NegativeAmountError";
    }
}

class MissingFieldError extends Error {
    constructor(message) {
        super(message);
        this.name = "MissingFieldError";
    }
}

class NullEntryError extends Error {
    constructor(message) {
        super(message);
        this.name = "NullEntryError";
    }
}

// Process each transaction
for (let i = 0; i < transactions.length; i++) {

    try {
        const tx = transactions[i];

        // 1. Null check
        if (tx === null) {
            throw new NullEntryError(`Transaction at index ${i} is null.`);
        }

        // 2. Required fields check
        if (!("id" in tx) || !("amount" in tx)) {
            throw new MissingFieldError(`Missing id or amount at index ${i}.`);
        }

        // 3. Negative amount
        if (tx.amount < 0) {
            throw new NegativeAmountError(
                `Negative amount in transaction ${tx.id}.`
            );
        }

        // If no errors → mark as valid
        validTransactions.push(tx);

    } catch (err) {
        invalidTransactions.push({
            index: i,
            error: err.name,
            message: err.message
        });
    }
}

console.log("\n---- SUMMARY ----");
console.log("Valid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);

console.log(`
Successful Transactions: ${validTransactions.length}
Failed Transactions: ${invalidTransactions.length}
`);
