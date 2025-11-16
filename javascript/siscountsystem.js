// Q6: Progressive Discount System
// ---------------------------------------------------------
// Applies discount based on total purchase amount.

// Input purchase amount
let total = 7500;  // example

let discountPercent = 0;

// Determine discount tier
if (total >= 10000) {
    discountPercent = 25;
} else if (total >= 5000) {
    discountPercent = 15;
} else if (total >= 2000) {
    discountPercent = 5;
} else {
    discountPercent = 0;
}

// Calculate discount amount
let discountAmount = (total * discountPercent) / 100;

// Final price after discount
let finalPrice = total - discountAmount;

// Round values
discountAmount = Math.round(discountAmount);
finalPrice = Math.round(finalPrice);

// Output
console.log("Original Total: ₹" + total);
console.log("Discount Percentage: " + discountPercent + "%");
console.log("Final Price After Discount: ₹" + finalPrice);
// Q6: Progressive Discount System
// ---------------------------------------------------------
// Applies discount based on total purchase amount.

// Input purchase amount
let total = 7500;  // example

let discountPercent = 0;

// Determine discount tier
if (total >= 10000) {
    discountPercent = 25;
} else if (total >= 5000) {
    discountPercent = 15;
} else if (total >= 2000) {
    discountPercent = 5;
} else {
    discountPercent = 0;
}

// Calculate discount amount
let discountAmount = (total * discountPercent) / 100;

// Final price after discount
let finalPrice = total - discountAmount;

// Round values
discountAmount = Math.round(discountAmount);
finalPrice = Math.round(finalPrice);

// Output
console.log("Original Total: ₹" + total);
console.log("Discount Percentage: " + discountPercent + "%");
console.log("Final Price After Discount: ₹" + finalPrice);
