/*
// CALLBACK HELL VERSION
function design(cb) {
  setTimeout(() => {
    console.log("Design completed");
    cb();
  }, 1000);
}

function build(cb) {
  setTimeout(() => {
    console.log("Build completed");
    cb();
  }, 1000);
}

function test(cb) {
  setTimeout(() => {
    console.log("Test completed");
    cb();
  }, 1000);
}

function deploy(cb) {
  setTimeout(() => {
    console.log("Deploy completed");
    cb();
  }, 1000);
}

function celebrate(cb) {
  setTimeout(() => {
    console.log("Celebrate!");
    cb();
  }, 1000);
}

console.log("Starting Pipeline (Callback Hell)...");

design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate(() => {
          console.log("Pipeline completed.");
        });
      });
    });
  });
 });
*/

// ASYNC / AWAIT VERSION
function designAsync() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("Design completed");
      resolve();
    }, 1000)
  );
}

function buildAsync() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("Build completed");
      resolve();
    }, 1000)
  );
}

function testAsync() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("Test completed");
      resolve();
    }, 1000)
  );
}

function deployAsync() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("Deploy completed");
      resolve();
    }, 1000)
  );
}

function celebrateAsync() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("Celebrate!");
      resolve();
    }, 1000)
  );
}

async function runPipeline() {
  console.log("\nStarting Pipeline (Async/Await)...");

  await designAsync();
  await buildAsync();
  await testAsync();
  await deployAsync();
  await celebrateAsync();

  console.log("Pipeline completed.");
}

runPipeline();

/*
Why async/await is better?
- Looks like normal step-by-step code
- No deeply nested callbacks
- Easier to read and maintain
- Errors are handled cleanly with try/catch
*/
