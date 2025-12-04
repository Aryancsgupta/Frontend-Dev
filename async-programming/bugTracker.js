// q3-bugs.js

/*
Original callback-based function:
function fetchBugs(callback) {
    setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

Task:
Convert to Promise version + handle random failure + print using console.table()
*/

// Promise-based version
function getBugs() {
  return new Promise((resolve, reject) => {
    const shouldFail = Math.random() < 0.3; // 30% failure chance

    setTimeout(() => {
      if (shouldFail) {
        reject("❌ Failed to fetch bugs from API.");
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

// Use the Promise version
console.log("Fetching bugs...");

getBugs()
  .then((bugs) => {
    console.log("🐞 Bugs fetched successfully:");
    console.table(bugs);  // neat tabular display
  })
  .catch((err) => {
    console.error(err);
  });
