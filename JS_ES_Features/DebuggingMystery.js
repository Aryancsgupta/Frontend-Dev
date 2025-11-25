"use strict";

/*
❌ Original code (Throws ReferenceError in strict mode)

function showMessage() {
    greeting = "Welcome"; // ❌ Error: undeclared variable
    console.log(greeting);
}
showMessage();

Reason:
In strict mode, assigning a value to an undeclared variable is illegal.
JavaScript does NOT create a global variable automatically, so it throws:
ReferenceError: greeting is not defined
*/

// ✅ Corrected version
function showMessage() {
    let greeting = "Welcome";   // ✔ properly declared variable
    console.log(greeting);
}

showMessage();

/*
DEBUG NOTES (for VS Code):
- Put a breakpoint on `let greeting = "Welcome";`
- Watch variable "greeting"
- Call stack will show: showMessage() → main script
*/
