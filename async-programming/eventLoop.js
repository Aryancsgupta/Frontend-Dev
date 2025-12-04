// Q9 – Event Loop Order

/*
Prediction BEFORE running:
1. Script start
2. Script end
3. Promise callback   (microtask)
4. Timeout callback   (macrotask)
*/

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
Explanation:
- JS runs all synchronous code first.
- Then it checks MICROTASK queue (Promises).
- Then it checks MACROTASK queue (setTimeout).
So Promise callback always executes before setTimeout.
*/
