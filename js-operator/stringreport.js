// Q2: String Manipulation Report
// ------------------------------------------------------------------
// Format a product title properly using string methods.

// Original product name with extra spaces
let productName = " wireless headphones PRO ";

// Step 1: Trim extra spaces
let cleaned = productName.trim();

// Step 2: Convert to lowercase
cleaned = cleaned.toLowerCase();

// Step 3: Capitalize the first letter of each word
cleaned = cleaned
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Step 4: Replace "Pro" with "Pro Edition"
let finalTitle = cleaned.replace("Pro", "Pro Edition");

// Step 5: Show cleaned title and its length
console.log("Cleaned Title:", finalTitle);
console.log("Title Length:", finalTitle.length);
