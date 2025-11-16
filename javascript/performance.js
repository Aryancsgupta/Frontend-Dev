// Q4: Academic Performance Evaluator
// ------------------------------------------------------
// This program checks promotion status based on
// marks of 5 subjects with validation.

// Marks of 5 subjects (example values)
let marks = [85, 78, 92, 88, 80];

// Step 1: Check if any subject is below 35 → Auto Detained
let detained = false;

for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 35) {
        detained = true;
        break;
    }
}

// Step 2: Calculate average & percentage
let total = 0;
for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}

let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

// Step 3: Decide promotion status
if (detained) {
    console.log("Detained (Failed in one or more subjects)");
} else {
    if (percentage >= 85) {
        console.log("Promoted with Distinction");
    } else if (percentage >= 50 && percentage < 85) {
        console.log("Promoted");
    } else {
        console.log("Detained");
    }
}

// Extra outputs for clarity
console.log("Average Marks:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");
