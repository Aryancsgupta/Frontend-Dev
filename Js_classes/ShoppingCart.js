"use strict";

// Cart Class
class Cart {
    constructor() {
        this.items = [];
    }

    // Add item to cart
    addItem(name, price, qty) {
        this.items.push({ name, price, qty });
    }

    // Calculate subtotal
    getTotal() {
        return this.items.reduce((sum, item) => {
            return sum + item.price * item.qty;
        }, 0);
    }

    // Apply coupon using RegExp
    applyCoupon(coupon) {
        const pattern = /^(SAVE|DISC)(\d{1,2})$/; 
        const match = coupon.match(pattern);

        if (!match) {
            console.log("❌ Invalid coupon format");
            return this.getTotal();
        }

        const discountPercent = Number(match[2]); // extract number
        const subtotal = this.getTotal();
        const discountAmount = (subtotal * discountPercent) / 100;

        const finalTotal = subtotal - discountAmount;

        console.log("Subtotal:", subtotal);
        console.log("Discount:", discountPercent + "%");
        console.log("Final Total:", finalTotal);

        return finalTotal;
    }
}

// ---------------------------
// Example Usage
// ---------------------------

const cart = new Cart();
cart.addItem("Shirt", 500, 2);
cart.addItem("Socks", 100, 3);
cart.addItem("Shoes", 1200, 1);

cart.applyCoupon("SAVE20");   // Valid
// cart.applyCoupon("WRONG50"); // Invalid