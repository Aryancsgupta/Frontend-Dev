"use strict";

// Initial user object
let user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

// Show default data on load
window.onload = function () {
    document.getElementById("output").textContent = JSON.stringify(user, null, 2);

    // Pre-fill form with current values
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;
    document.getElementById("age").value = user.age;
};

document.getElementById("updateForm").addEventListener("submit", function (e) {
    e.preventDefault(); // avoid page reload

    // Update object values
    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = document.getElementById("age").value;

    // Show updated object
    document.getElementById("output").textContent = JSON.stringify(user, null, 2);
});
