"use strict";

// Employee data
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("===== EMPLOYEE BONUS REPORT =====");

// Loop through employees
for (let i = 0; i < employees.length; i++) {
    try {
        const emp = employees[i];

        // Validation for missing properties
        if (!emp.name || !emp.salary || !emp.years) {
            throw new Error("Missing property in employee record");
        }

        // Convert salary & years to numbers
        const salary = Number(emp.salary);
        const years = Number(emp.years);

        if (isNaN(salary) || isNaN(years)) {
            throw new Error("Salary/Years conversion failed");
        }

        // Bonus calculation
        const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

        // Formatted output using template strings
        console.log(`
Employee: ${emp.name}
Salary: ₹${salary}
Years Worked: ${years}
Bonus: ₹${bonus}
----------------------------------
        `);

    } catch (err) {
        console.log(`Error for employee at index ${i}:`, err.message);
    }
}
