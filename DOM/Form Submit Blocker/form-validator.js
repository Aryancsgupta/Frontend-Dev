/*
  Form Validation with preventDefault()
  - Show inline errors
  - Remove errors live when corrected
  - Show success message on valid submit
*/

const form = document.getElementById("myForm");

// Inputs
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

// Error fields
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Success message
const successMsg = document.getElementById("successMsg");

/* ------------- Validation Function ------------- */
function validateForm() {
  let isValid = true;

  // Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email
  const email = emailInput.value.trim();
  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!email.includes("@")) {
    emailError.textContent = "Email must contain @";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  return isValid;
}

/* ------------- Live Error Removal ------------- */
[nameInput, emailInput, passwordInput].forEach(input => {
  input.addEventListener("input", validateForm);
});

/* ------------- Submit Handler ------------- */
form.addEventListener("submit", (e) => {
  e.preventDefault(); // block form submit

  if (validateForm()) {
    successMsg.textContent = "Form Submitted Successfully!";
    form.reset();

    // Clear errors after success
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
  } else {
    successMsg.textContent = ""; // remove success if errors occur
  }
});
