"use strict";

// Product Class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Method to apply discount (percent value: example 10 for 10%)
    applyDiscount(percent) {
        const discountAmount = (this.price * percent) / 100;
        this.price = this.price - discountAmount;
    }

    // Display product details in formatted string
    getDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price} | Category: ${this.category}`;
    }
}

// Creating multiple product objects
const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Headphones", 800, "Audio"),
    new Product(3, "Smartphone", 12000, "Electronics"),
    new Product(4, "Shoes", 1500, "Fashion"),
];

// Apply discount to check function
products[0].applyDiscount(10); // Applying 10% discount on Laptop

// Display products with price > 1000
const expensiveProducts = products.filter(product => product.price > 1000);

console.log("Products with price > 1000:");
expensiveProducts.forEach(p => console.log(p.getDetails()));
