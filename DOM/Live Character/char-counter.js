/* 
  Live Character Counter
  - Shows remaining characters
  - Turns yellow at <= 20
  - Turns red at 0
  - Prevents typing beyond 100
*/

const messageBox = document.getElementById("messageBox");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

const MAX_CHAR = 100;

/* --- Update Counter Function --- */
function updateCounter() {
  const remaining = MAX_CHAR - messageBox.value.length;

  counter.textContent = `${remaining} characters left`;

  // Change color based on limit
  if (remaining <= 0) {
    counter.style.color = "red";
  } else if (remaining <= 20) {
    counter.style.color = "orange";
  } else {
    counter.style.color = "green";
  }
}

/* --- Prevent typing beyond limit --- */
messageBox.addEventListener("keydown", function (e) {
  if (messageBox.value.length >= MAX_CHAR && e.key !== "Backspace" && e.key !== "Delete") {
    e.preventDefault();  // stop extra typing
  }
});

/* --- Update on input --- */
messageBox.addEventListener("input", updateCounter);

/* --- Reset --- */
resetBtn.addEventListener("click", () => {
  messageBox.value = "";
  counter.textContent = `${MAX_CHAR} characters left`;
  counter.style.color = "green";
});
