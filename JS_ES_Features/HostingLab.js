"use strict";

/*
---------------------------------
Q5 – Hoisting Lab: The Sequence Trap
---------------------------------

❌ ORIGINAL CODE (commented so it doesn’t break)
console.log(score);
announce();
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();
function startGame() {
    console.log(status);
}

📌 PREDICTED OUTPUT:
undefined
Game started
ready

📌 HOISTING EXPLANATION:
- var score → hoisted, value = undefined
- function announce → fully hoisted
- let status → hoisted but in TDZ (temporal dead zone)
- function startGame → fully hoisted

If startGame() is called before status initialization → ReferenceError.
*/

// ----------------------------------------------------
// ✅ FIXED WORKING VERSION
// ----------------------------------------------------

var score = 50;       // var is hoisted → avoid undefined output
let status = "ready"; // declared before use → avoids TDZ error

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(status);
}

// Now all calls are safe
console.log(score);  
announce();
startGame();

/*
-----------------------------------------------------
Arrow Function Comparison (Not Hoisted)
-----------------------------------------------------
Arrow functions act like "const variables".
They are NOT hoisted. Calling them early → ReferenceError.
*/

// ----------------------------------------------------
// ✅ ARROW FUNCTION VERSION (Correct usage)
// ----------------------------------------------------

const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = () => console.log(status);

announceArrow();
startGameArrow();

/*
📌 HOISTING DIFFERENCE:
- Function declarations ARE hoisted
- Arrow functions ARE NOT hoisted
- Only their variable name is hoisted (uninitialized), causing TDZ
*/
