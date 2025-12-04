/*
  Real-Time Table Filter
  - Filters rows based on search input
  - Case-insensitive
  - Shows "No results found" when matching rows = 0
*/

const searchBox = document.getElementById("searchBox");
const tableBody = document.getElementById("tableBody");
const noResults = document.getElementById("noResults");

/* Input event triggers live search */
searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();
  let found = false;

  Array.from(tableBody.rows).forEach(row => {
    const rowText = row.textContent.toLowerCase();

    if (rowText.includes(query)) {
      row.style.display = "";
      found = true;
    } else {
      row.style.display = "none";
    }
  });

  // Show or hide "No results found"
  noResults.style.display = found ? "none" : "block";
});
