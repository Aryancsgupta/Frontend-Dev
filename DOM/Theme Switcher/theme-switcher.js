/*
  Theme Switcher Using setAttribute()
  - Updates data-theme attribute on <body>
  - No classList manipulation
*/

const buttons = document.querySelectorAll(".theme-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedTheme = btn.dataset.theme;

    // Set theme using setAttribute()
    document.body.setAttribute("data-theme", selectedTheme);

    console.log(`Theme changed to: ${selectedTheme}`);
  });
});
