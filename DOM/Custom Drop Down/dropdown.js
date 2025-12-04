/*
  Custom Dropdown
  - Button click toggles dropdown
  - Selecting an option updates button text
  - Clicking outside closes dropdown (capturing phase)
*/

const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const options = document.querySelectorAll(".option");

/* Toggle dropdown on button click */
dropdownBtn.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

/* Selecting an option */
options.forEach(option => {
  option.addEventListener("click", () => {
    dropdownBtn.textContent = option.textContent;
    dropdownMenu.style.display = "none";
  });
});

/* Clicking outside closes dropdown (CAPTURE PHASE) */
document.addEventListener(
  "click",
  (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.display = "none";
    }
  },
  true // capturing phase
);
