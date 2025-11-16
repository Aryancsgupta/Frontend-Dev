// Q2: Multi-Type Data Summary
// ----------------------------------------------------
// This program simulates a database summary by storing
// different data types and printing their type info
// using console.table().

// Different data types
let userName = "Amit";                // string
let age = 21;                         // number
let isStudent = true;                 // boolean
let hobbies = ["coding", "cricket"];  // array
let address = { city: "Mathura" };    // object
let emptyValue = null;                // null
let notAssigned;                      // undefined

// Prepare summary table
let summary = [
    {
        label: "userName",
        value: userName,
        type: typeof userName
    },
    {
        label: "age",
        value: age,
        type: typeof age
    },
    {
        label: "isStudent",
        value: isStudent,
        type: typeof isStudent
    },
    {
        label: "hobbies",
        value: hobbies,
        type: Array.isArray(hobbies) ? "array" : typeof hobbies
    },
    {
        label: "address",
        value: address,
        type: typeof address
    },
    {
        label: "emptyValue",
        value: emptyValue,
        type: emptyValue === null ? "null" : typeof emptyValue
    },
    {
        label: "notAssigned",
        value: notAssigned,
        type: typeof notAssigned
    }
];

// Display table
console.table(summary);
