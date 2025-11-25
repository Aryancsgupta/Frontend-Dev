/*
Q8 Requirements:
✔ Run code with and without "use strict"
✔ Record errors
✔ Explain why strict mode makes them illegal
✔ Show correct ES6 version
*/


// -------------------------------------------
// ❌ VERSION 1: WITHOUT STRICT MODE
// -------------------------------------------

console.log("---- Without Strict Mode ----");

function demo(a, a) {  // duplicate parameter allowed (bad practice)
    total = 10;       // becomes an accidental global variable
    delete total;     // delete allowed silently (fails quietly)
}

demo(5, 10);

console.log("total after function (leaked global):", total);

/*
Output (no strict):
✔ No error for duplicate parameters
✔ No error for undeclared variable (creates global)
✔ delete total returns false but does NOT throw
*/


// -------------------------------------------
// ❌ VERSION 2: WITH STRICT MODE
// -------------------------------------------

console.log("\n---- With Strict Mode ----");

"use strict";

try {
    function testStrict(x, x) {
        // ❌ duplicate parameter → SyntaxError
        return x + x;
    }
} catch (err) {
    console.log("Strict Mode Error:", err.name, "-", err.message);
}

try {
    function badDelete() {
        undeclaredVar = 20;  // ❌ creates accidental global → ReferenceError
        delete undeclaredVar; // ❌ delete non-configurable variable
    }
    badDelete();
} catch (err) {
    console.log("Strict Mode Error:", err.name, "-", err.message);
}

/*
STRICT MODE ERRORS:
1️⃣ Duplicate parameter name → SyntaxError
2️⃣ Assigning to undeclared variable → ReferenceError
3️⃣ delete used on a variable → SyntaxError
*/


// -------------------------------------------
// ✅ VERSION 3: CORRECT ES6 FIXED VERSION
// -------------------------------------------

console.log("\n---- Correct ES6 Version ----");

"use strict";

function demoFixed(a, b) {
    let total = 10;   // declared properly
    console.log("Sum =", a + b);
    return total;
}

const result = demoFixed(5, 10);
console.log("Returned =", result);

/*
WHY ES6 VERSION IS CORRECT:
✔ Unique parameter names
✔ No accidental global variables
✔ No illegal delete
✔ Uses let/const (block scope, safer)
*/
