// Constructor Function
function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Prototype Method for Discount
Product.prototype.applyDiscount = function (percent) {
  const discountAmount = (this.price * percent) / 100;
  const newPrice = this.price - discountAmount;
  return newPrice;
};

// Create Products
const p1 = new Product("Laptop", 50000);
const p2 = new Product("Headphones", 2000);
const p3 = new Product("Keyboard", 1500);

// Apply Discount
console.log("Laptop New Price:", p1.applyDiscount(10));     // 10% off
console.log("Headphones New Price:", p2.applyDiscount(20)); // 20% off
console.log("Keyboard New Price:", p3.applyDiscount(15));   // 15% off
