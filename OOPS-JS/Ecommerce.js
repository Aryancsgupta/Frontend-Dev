const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
  { id: 2, name: "Mouse", category: "Electronics", price: 500, stock: 50 },
  { id: 3, name: "Shirt", category: "Clothing", price: 800, stock: 10 },
  { id: 4, name: "Shoes", category: "Clothing", price: 2000, stock: 3 },
  { id: 5, name: "Book", category: "Stationery", price: 300, stock: 20 }
];

// 1. Low Stock Products (stock < 10)
function getLowStockProducts() {
  return products.filter(p => p.stock < 10);
}

// 2. Sort by Price (ascending)
function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

// 3. Total Inventory Value
function calculateTotalInventoryValue() {
  return products.reduce((total, product) => {
    return total + (product.price * product.stock);
  }, 0);
}

// 4. Group by Category
function groupByCategory() {
  return products.reduce((grouped, product) => {
    if (!grouped[product.category]) {
      grouped[product.category] = [];
    }
    grouped[product.category].push(product);
    return grouped;
  }, {});
}

// Test Outputs
console.log("Low Stock Products:", getLowStockProducts());
console.log("Sorted by Price:", sortProductsByPrice());
console.log("Total Inventory Value:", calculateTotalInventoryValue());
console.log("Grouped by Category:", groupByCategory());
