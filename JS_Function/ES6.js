// Q9.js

// CLASS VERSION
class Person {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log("Name:", this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // calls Person constructor
        this.branch = branch;
    }
    showBranch() {
        console.log("Branch:", this.branch);
    }
}

const st1 = new Student("Amit", "CSE");
st1.showName();
st1.showBranch();
