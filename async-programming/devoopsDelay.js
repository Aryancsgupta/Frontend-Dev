// q4-devops.js

/*
We have 2 servers:
- Server A → responds in 2 seconds
- Server B → responds in 3 seconds

Use:
✔ Promise.all() → when ALL servers finish
✔ Promise.race() → when FIRST server finishes
✔ Random failure using Math.random()
*/

function serverA() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.3; // 30% fail chance
    setTimeout(() => {
      if (fail) reject("❌ Server A failed!");
      else resolve("Server A: Deployment complete");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.3; // 30% fail chance
    setTimeout(() => {
      if (fail) reject("❌ Server B failed!");
      else resolve("Server B: Deployment complete");
    }, 3000);
  });
}

console.log("Starting deployments...\n");

// ---- Promise.all() ----
Promise.all([serverA(), serverB()])
  .then((results) => {
    console.log("🚀 Deployment completed for all servers.");
    console.log(results);
  })
  .catch((err) => {
    console.error("❌ Deployment error:", err);
  });

// ---- Promise.race() ----
Promise.race([serverA(), serverB()])
  .then((fastest) => {
    console.log("\n⚡ Fastest response:");
    console.log(fastest);
  })
  .catch((err) => {
    console.error("\n❌ Fastest response ended in error:", err);
  });
