// Q5: Boolean Logic Access System
// -------------------------------------------------------------------
// A smart home system that checks multiple security conditions.

// Variables (change these values to test different outcomes)
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Access granted only if all conditions are true
if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Test multiple outcomes by changing values
isOwnerInside = false;
console.log("\nAfter Changing Owner Status:");
console.log(isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside ? "Secure" : "Unsafe");
