"use strict";

/*
Q6 Requirements:
✔ Generate pyramid:
*
* *
* * *
* * * *
✔ Replace let with var and observe reuse issues
✔ Add user-controlled loop limit (default = 5)
✔ Use strict mode to catch undeclared variables
*/

// -------- USER INPUT HANDLING --------
// (In real programs this would come from prompt(), here set manually)
let userLimit = 5; // change this to test input

if (!userLimit || isNaN(userLimit)) {
    userLimit = 5; // default value
}

console.log("---- PYRAMID PATTERN ----");

// -------- USING LET (Correct Behavior) --------
console.log("\nUsing LET:\n");

for (let i = 1; i <= userLimit; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

/*
Explanation:
- let creates a new block-scoped variable for each loop.
- j exists only inside inner loop.
- No variable leakage outside loops.
*/


// -------- USING VAR (Potential Issue Demonstration) --------
console.log("\nUsing VAR (Observe Variable Reuse):\n");

/*
If we use var:
- var is function-scoped, NOT block-scoped.
- i and j are hoisted to function level.
- They remain available after loops.
- This can cause accidental overwrites.
*/

for (var a = 1; a <= userLimit; a++) {
    var row2 = "";
    for (var b = 1; b <= a; b++) {
        row2 += "* ";
    }
    console.log(row2);
}

// Show variable leaks
console.log("\nVariables leaked due to 'var':");
console.log("a after loop =", a);   // exists outside loop
console.log("b after loop =", b);   // exists outside loop
console.log("row2 after loop =", row2); // also leaked


/*
Debug notes:
- Place breakpoints at loop start to watch variable changes.
- Compare scope of let vs scope of var in debugger (VS Code).
*/
