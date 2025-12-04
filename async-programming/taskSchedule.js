// q2-event-loop.js

/*
Expected Output Order (Prediction):
1. Start
2. Synchronous log
3. End
4. Promise (microtask)
5. setTimeout (macrotask)

Explanation:
- JavaScript executes synchronous code first.
- Microtasks (Promise callbacks) run immediately after synchronous code,
  before any macrotask (like setTimeout).
*/

console.log("Start");

// macrotask
setTimeout(() => {
  console.log("setTimeout callback");
}, 0);

// microtask
Promise.resolve().then(() => {
  console.log("Promise callback");
});

// another synchronous log
console.log("Synchronous log");

console.log("End");
