"use strict";

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    let valid = true;

    // -------- USERNAME VALIDATION -----------
    if (username.value.length < 5) {
        showError(username, "Username must be at least 5 characters.");
        valid = false;
    } else {
        showSuccess(username);
        document.getElementById("userErr").textContent = "";
    }

    // -------- PASSWORD VALIDATION -----------
    const passRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

    if (!passRegex.test(password.value)) {
        showError(password,
            "Password must be 8+ chars, include uppercase, lowercase, number, and special character."
        );
        valid = false;
    } else {
        showSuccess(password);
        document.getElementById("passErr").textContent = "";
    }

    // -------- IF VALID LOGIN SUCCESS --------
    if (valid) {
        document.getElementById("result").textContent = "Login Successful ✔️";
    } else {
        document.getElementById("result").textContent = "";
    }
});

// -------- Helper Functions --------
function showError(input, msg) {
    input.classList.add("invalid");
    input.classList.remove("valid");
    input.nextElementSibling.textContent = msg;
}

function showSuccess(input) {
    input.classList.add("valid");
    input.classList.remove("invalid");
}
