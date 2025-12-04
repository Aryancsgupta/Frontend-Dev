/*
  Mouse Path & Coordinates Logger
  - Tracks clientX, clientY
  - Drops red dot on double click
*/

const box = document.getElementById("box");
const coords = document.getElementById("coords");

/* Mouse move inside box */
box.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  coords.textContent = `Mouse Position → X: ${x}, Y: ${y}`;
});

/* Double-click: place red dot */
box.addEventListener("dblclick", (e) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  // Position relative to box
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;

  box.appendChild(dot);
});
