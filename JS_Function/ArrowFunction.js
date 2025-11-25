// Q3.js

const user = {
    name: "Amit",
    showName: () => {
        console.log(this.name);   // undefined because arrow functions don't have their own 'this'
    }
};

user.showName();  // undefined


// FIX using normal function

const userFixed = {
    name: "Amit",
    showName() {
        console.log(this.name);  // works
    }
};

userFixed.showName();
