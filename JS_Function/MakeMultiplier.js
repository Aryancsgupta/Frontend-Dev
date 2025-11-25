// Q7.js

function makeMultiplier(multiplier) {
    return function (num) {
        return num * multiplier;  // closure keeps multiplier
    };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15
