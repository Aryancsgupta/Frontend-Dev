// Q10: Citizen Eligibility Validator
// ---------------------------------------------------------------------
// Determines if a person can vote, drive, or apply for a passport.

// Input values
let age = 19;           // example
let isCitizen = true;   // boolean

// Decision logic using nested if-else
if (isCitizen) {

    if (age >= 18) {
        console.log("Eligible for all services.");
    } 
    else if (age >= 18 && age <= 20) {
        // This condition is actually covered above (age >= 18)
        console.log("Eligible to vote only.");
    } 
    else {
        console.log("Not eligible yet.");
    }

} else {

    if (age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }

}
