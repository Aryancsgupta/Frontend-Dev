// Q1: Scope Conflict Resolver
// -----------------------------------------------------------
// Global variable
let bonus = 5000;

// Function to calculate salary
function calculateSalary(isPermanent) {
    // Local variable inside function
    let salary = 40000;

    // Add bonus only if employee is permanent
    if (isPermanent === true) {
        salary += bonus; // Using global bonus
    }

    console.log(`Is Permanent: ${isPermanent}`);
    console.log(`Total Salary: ₹${salary}`);
}

// Test function with both conditions
calculateSalary(true);   // Should add bonus
calculateSalary(false);  // Should not add bonus

// Check if global bonus changed
console.log("Global Bonus Still:", bonus);
