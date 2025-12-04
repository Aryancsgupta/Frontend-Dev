// Q8 – Async Retry Logic

function submitOrder() {
    return new Promise((resolve, reject) => {
        const success = Math.random() < 0.5; // 50% chance
        setTimeout(() => {
            success ? resolve("Order Accepted") : reject("Order Failed");
        }, 500);
    });
}

async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            await submitOrder();
            console.log(`Attempt ${attempt}: Success`);
            return;
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed`);
        }
    }
    throw new Error("Order could not be processed");
}

async function start() {
    try {
        await processOrder();
        console.log("Order Completed!");
    } catch (error) {
        console.log(error.message);
    }
}

start();
