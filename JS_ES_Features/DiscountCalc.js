// Q9. Discount Calculator

function calculateDiscount(price, discountPercent) {

    // Nested function to calculate discount amount
    function getDiscountAmount() {
        return (price * discountPercent) / 100;
    }

    if (discountPercent > 50) {
        console.log("Too high discount!");
        return;
    }

    const discountAmount = getDiscountAmount();
    const finalPrice = price - discountAmount;

    console.log("Original Price:", price);
    console.log("Discount:", discountPercent + "%");
    console.log("Final Price:", finalPrice);
}

// Test the function
calculateDiscount(1000, 20);   // Valid
calculateDiscount(2000, 60);   // Too high discount
