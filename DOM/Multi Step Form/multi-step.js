/* 
  Multi-Step Form Logic (3 Steps)
  - Step switching
  - Validation each step
  - Summary after completion
*/

const steps = document.querySelectorAll('.form-step');
let currentStep = 0;

// Inputs
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

// Errors
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Summary
const summaryStep = document.getElementById("summaryStep");
const summaryText = document.getElementById("summaryText");

function showStep(index) {
  steps.forEach(step => step.classList.remove('active'));
  steps[index].classList.add('active');
}

/* ------------------ Validation Functions ------------------ */

function validateStep1() {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    return false;
  }
  nameError.textContent = "";
  return true;
}

function validateStep2() {
  const email = emailInput.value.trim();

  if (email === "") {
    emailError.textContent = "Email is required";
    return false;
  }
  if (!email.includes("@")) {
    emailError.textContent = "Invalid email";
    return false;
  }
  emailError.textContent = "";
  return true;
}

function validateStep3() {
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    return false;
  }
  passwordError.textContent = "";
  return true;
}

/* ------------------ Step Navigation ------------------ */

document.querySelectorAll(".nextBtn").forEach(btn => {
  btn.addEventListener("click", () => {

    if (currentStep === 0 && !validateStep1()) return;
    if (currentStep === 1 && !validateStep2()) return;

    currentStep++;
    showStep(currentStep);
  });
});

document.querySelectorAll(".backBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentStep--;
    showStep(currentStep);
  });
});

/* ------------------ Finish Button ------------------ */
document.querySelector(".finishBtn").addEventListener("click", () => {
  if (!validateStep3()) return;

  summaryText.textContent =
    `Name: ${nameInput.value}
Email: ${emailInput.value}
Password: ${passwordInput.value}`;

  currentStep = 3;
  showStep(currentStep);
});

/* ------------------ Restart ------------------ */
document.getElementById("restartBtn").addEventListener("click", () => {
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  
  currentStep = 0;
  showStep(currentStep);
});

/* Initialize */
showStep(0);
