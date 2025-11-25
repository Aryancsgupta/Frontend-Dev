// Q8. User Login System

// Stored credentials
const storedUser = "amit123";
const storedPass = "password@123";

function login(username, password) {

    // Nested function to validate
    function validate(u, p) {
        return (u === storedUser && p === storedPass);
    }

    if (validate(username, password)) {
        console.log("Login successful!");
    } else {
        console.log("Invalid credentials");
    }
}

// Test the login system
login("amit123", "password@123");  // ✔ correct
login("wrongUser", "abc");        // ✖ incorrect
