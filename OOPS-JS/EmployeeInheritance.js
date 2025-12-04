class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} is working in ${this.department} department.`;
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name, department);
  }

  // Overriding work()
  work() {
    return `${this.name} is managing the ${this.department} team.`;
  }
}

// Create objects
const emp1 = new Employee("Amit", "IT");
const mgr1 = new Manager("Riya", "HR");

// Runtime polymorphism
console.log(emp1.work());
console.log(mgr1.work());
