// q7-lazy-loader.js
// -----------------------------------------------------
// Q7 – Lazy Loader: Promise.allSettled()
// -----------------------------------------------------

function loadProfile() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.3;  // 30% fail chance

    setTimeout(() => {
      if (fail) reject("❌ Profile failed to load");
      else resolve("Profile Loaded");
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.3;

    setTimeout(() => {
      if (fail) reject("❌ Posts failed to load");
      else resolve("Posts Loaded");
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.3;

    setTimeout(() => {
      if (fail) reject("❌ Messages failed to load");
      else resolve("Messages Loaded");
    }, 1000);
  });
}

// -----------------------------------------------------
// Using Promise.allSettled()
// -----------------------------------------------------

async function loadDashboard() {
  console.log("Loading dashboard sections...\n");

  const start = Date.now(); // start time

  const results = await Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages()
  ]);

  const end = Date.now(); // end time

  console.log("Results:\n");

  results.forEach((item, index) => {
    const section = ["Profile", "Posts", "Messages"][index];

    if (item.status === "fulfilled") {
      console.log(`✔ ${section}: ${item.value}`);
    } else {
      console.log(`❌ ${section}: ${item.reason}`);
    }
  });

  console.log(`\nTotal Time Taken: ${(end - start) / 1000} seconds`);
}

loadDashboard();
