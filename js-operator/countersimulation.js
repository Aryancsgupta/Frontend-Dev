let count = 0;

function counterSystem() {
    function increment() {
        count++;
        console.log("Incremented:", count);
    }

    function decrement() {
        count--;
        console.log("Decremented:", count);
    }

    // Simulated "clicks"
    increment();
    increment();
    decrement();
    increment();
}

counterSystem();
