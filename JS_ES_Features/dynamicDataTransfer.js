"use strict";

// Mixed API data
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

// Arrays to store valid and invalid numeric values
const validNumbers = [];
const invalidNumbers = [];

// Function to safely convert to Number
function convertToNumber(value) {
    const num = Number(value);
    return isNaN(num) ? null : num;
}

console.log("---- DATA PARSER REPORT ----");

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];

    // Convert to different forms
    const num = convertToNumber(value);
    const bool = Boolean(value);
    const str = String(value);

    console.log(`\nIndex ${i}:`);
    console.log("Original:", value);
    console.log("As Number:", num);
    console.log("As Boolean:", bool);
    console.log("As String:", str);

    // Check valid or invalid numeric conversions
    if (num === null) {
        invalidNumbers.push(value);
    } else {
        validNumbers.push(num);
    }
}

// Final report
console.log("\n===== FINAL SUMMARY =====");
console.log("Valid Numeric Values:", validNumbers);
console.log("Invalid Numeric Values:", invalidNumbers);
