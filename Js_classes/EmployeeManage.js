"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // monthly salary
    }

    // Annual salary = monthly salary * 12
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Increase salary by bonus percent
    applyBonus(percent) {
        const bonusAmount = (this.salary * percent) / 100;
        this.salary += bonusAmount;
        console.log(`${this.name} received a ${percent}% bonus.`);
    }
}

// Create 5 employee objects
const employees = [
    new Employee(1, "Amit", "IT", 40000),
    new Employee(2, "Raj", "HR", 28000),
    new Employee(3, "Simran", "Finance", 50000),
    new Employee(4, "Arjun", "Marketing", 35000),
    new Employee(5, "Reema", "Operations", 30000)
];

// Apply some example bonus
employees[0].applyBonus(10); // Amit gets 10%
employees[3].applyBonus(5);  // Arjun gets 5%

console.log("\nAnnual salary of each employee:");
employees.forEach(emp => {
    console.log(`${emp.name}: ₹${emp.getAnnualSalary()}`);
});

// Total annual payout using reduce()
const totalPayout = employees.reduce((total, emp) => {
    return total + emp.getAnnualSalary();
}, 0);

console.log("\nTotal Annual Payout of Company: ₹" + totalPayout);
