// q1-coffee.js
// Async Coffee Maker using Promise chaining (.then()).
// Each step returns a Promise that resolves after 1-2 seconds.
// Random failure is simulated using Math.random().

function randomDelay() {
  // returns a random delay between 1000ms and 2000ms
  return 1000 + Math.floor(Math.random() * 1001);
}

function maybeFail(stepName, failProbability = 0.2) {
  // simulate random failure; returns an Error if failed, otherwise null
  if (Math.random() < failProbability) {
    return new Error(`${stepName} failed due to unexpected issue.`);
  }
  return null;
}

// Step 1: Boil water
function boilWater() {
  return new Promise((resolve, reject) => {
    const delay = randomDelay();
    setTimeout(() => {
      const err = maybeFail("Boiling water");
      if (err) {
        reject(err);
        return;
      }
      console.log("✅ Water boiled.");
      resolve("Hot water");
    }, delay);
  });
}

// Step 2: Brew coffee
function brewCoffee(hotWater) {
  return new Promise((resolve, reject) => {
    const delay = randomDelay();
    setTimeout(() => {
      const err = maybeFail("Brewing coffee");
      if (err) {
        reject(err);
        return;
      }
      console.log(`✅ Coffee brewed using: ${hotWater}.`);
      resolve("Brewed coffee");
    }, delay);
  });
}

// Step 3: Pour into cup
function pourIntoCup(coffee) {
  return new Promise((resolve, reject) => {
    const delay = randomDelay();
    setTimeout(() => {
      const err = maybeFail("Pouring into cup");
      if (err) {
        reject(err);
        return;
      }
      console.log(`✅ ${coffee} poured into cup.`);
      resolve("Cup of coffee");
    }, delay);
  });
}

// Use Promise chaining (.then()) to simulate the process
function makeCoffee() {
  console.log("☕ Starting coffee process...");
  boilWater()
    .then((hotWater) => {
      // return the next promise so chaining continues
      return brewCoffee(hotWater);
    })
    .then((brewed) => {
      return pourIntoCup(brewed);
    })
    .then((cup) => {
      console.log("🎉 Coffee ready for the team!");
      console.log("Result:", cup);
    })
    .catch((err) => {
      // handle any failure from any step
      console.error("❌ Coffee process failed:", err.message);
    });
}

// Run the process
makeCoffee();
