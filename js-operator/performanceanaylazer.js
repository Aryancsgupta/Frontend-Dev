// Q4: Array Performance Analyzer
// -------------------------------------------------------------------------
// Generate random scores and analyze performance using array methods.

// Step 1: Create array of 8 random scores (30–100)
let scores = [];
for (let i = 0; i < 8; i++) {
    scores.push(Math.floor(Math.random() * 71) + 30);
}

// Step 2: Highest and lowest score
let highest = Math.max(...scores);
let lowest = Math.min(...scores);

// Step 3: Average score using reduce()
let total = scores.reduce((sum, score) => sum + score, 0);
let average = (total / scores.length).toFixed(2);

// Step 4: Count number of students who passed (>= 50)
let passedCount = scores.filter(score => score >= 50).length;

// Step 5: Full summary output
console.log("Student Scores:", scores);
console.log("----------------------------------");
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score: ${lowest}`);
console.log(`Average Score: ${average}`);
console.log(`Students Passed: ${passedCount} out of ${scores.length}`);
