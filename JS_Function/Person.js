// Q5.js

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log("Name:", this.name);
};

function Student(name, branch) {
    Person.call(this, name);  // inherit properties
    this.branch = branch;
}

// Inherit prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log("Branch:", this.branch);
};

const s1 = new Student("Amit", "CSE");

s1.showName();
s1.showBranch();
