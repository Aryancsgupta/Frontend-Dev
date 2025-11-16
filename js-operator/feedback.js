let feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words
let wordCount = feedback.split(" ").length;
console.log("Word Count:", wordCount);

// Check negativity
if (feedback.includes("bad") || feedback.includes("poor")) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
