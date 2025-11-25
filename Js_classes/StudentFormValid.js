"use strict";

document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop page refresh

    // Input values
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    let isValid = true;

    // ----------- NAME VALIDATION -----------
    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(name.value)) {
        setError(name, "Name must contain only alphabets");
        isValid = false;
    } else setSuccess(name);

    // ----------- EMAIL VALIDATION -----------
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email.value)) {
        setError(email, "Invalid email format");
        isValid = false;
    } else setSuccess(email);

    // ----------- PHONE VALIDATION -----------
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.value)) {
        setError(phone, "Phone must be exactly 10 digits");
        isValid = false;
    } else setSuccess(phone);

    // ----------- PASSWORD VALIDATION -----------
    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/;
    if (!passRegex.test(password.value)) {
        setError(password, "Password must contain 1 uppercase, 1 number, and 1 special character");
        isValid = false;
    } else setSuccess(password);

    if (isValid) {
        alert("Form submitted successfully!");
    }
});

// ------------- HELPER FUNCTIONS -------------
function setError(input, message) {
    input.classList.remove("valid");
    input.classList.add("invalid");

    const errorMsg = input.nextElementSibling;
    errorMsg.textContent = message;
}

function setSuccess(input) {
    input.classList.remove("invalid");
    input.classList.add("valid");

    const errorMsg = input.nextElementSibling;
    errorMsg.textContent = "";
}
