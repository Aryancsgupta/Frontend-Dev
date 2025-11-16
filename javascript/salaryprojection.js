// Q8: Employee Salary Projection
// -----------------------------------------------------------------
// Calculates salary for 5 years with a fixed annual increment rate.

// Current salary (example)
let currentSalary = 30000;

// Increment rate in percentage
let incrementRate = 10; // 10%

// Array to store yearly salary data
let salaryTable = [];

// Calculate salary for 5 years
for (let year = 1; year <= 5; year++) {
    
    // Apply increment
    currentSalary += (currentSalary * incrementRate) / 100;

    // Round to nearest integer
    let roundedSalary = Math.round(currentSalary);

    // Store in table
    salaryTable.push({
        Year: "Year " + year,
        Salary: roundedSalary
    });
}

// Display formatted salary projection
console.table(salaryTable);
