// Customer Feedback Processor

function analyzeFeedback(comment) {
    // 1. Check positivity (very simple check)
    let positiveWords = ["good", "great", "excellent", "awesome", "nice", "love"];
    let isPositive = false;

    for (let word of positiveWords) {
        if (comment.toLowerCase().includes(word)) {
            isPositive = true;
            break;
        }
    }

    // 2. Check length of comment
    let lengthCategory = "";
    if (comment.length < 20) {
        lengthCategory = "Short";
    } else if (comment.length <= 50) {
        lengthCategory = "Medium";
    } else {
        lengthCategory = "Long";
    }

    // 3. Print results
    console.log("Comment:", comment);
    console.log("Positive?", isPositive);
    console.log("Length Category:", lengthCategory);
}

// Test the function
analyzeFeedback("The service was excellent and I love the experience!");
analyzeFeedback("Good product.");
analyzeFeedback("Not bad.");
