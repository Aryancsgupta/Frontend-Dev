// Q10 – Async Delivery Pipeline with Random Success/Failure

function randomDelay() {
    return Math.floor(Math.random() * 1000) + 1000; // 1–2 sec
}

function step(name) {
    return new Promise((resolve, reject) => {
        const time = randomDelay();
        setTimeout(() => {
            Math.random() < 0.8 ? resolve(`${name} completed`) : reject(`${name} failed`);
        }, time);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        console.log("Step 1:", await step("Order taken"));
        console.log("Step 2:", await step("Food prepared"));
        console.log("Step 3:", await step("Package ready"));
        console.log("Step 4:", await step("Out for delivery"));

        console.log("Delivery completed!");

    } catch (error) {
        console.log("Pipeline failed!");
        console.log("Reason:", error);
    }
}

runPipeline();

/*
Explanation:
- Each step returns a Promise with random success.
- await pauses the function until the Promise resolves.
- If a step fails, the catch block handles it.
- JS event loop manages timers → callback added to macrotask queue.
*/
