const menu = {
  pizza: 250,
  burger: 120,
  fries: 70,
  coke: 40
};

function calculateBill(orderItems) {
  try {
    // Convert ordered items to prices using map()
    const prices = orderItems.map(item => {
      if (!menu[item]) {
        throw new Error(`Item "${item}" is not available in the menu.`);
      }
      return menu[item];
    });

    // Calculate total using reduce()
    const total = prices.reduce((sum, price) => sum + price, 0);

    console.log("Ordered Items:", orderItems);
    console.log("Prices:", prices);
    console.log("Total Bill:", total);

  } catch (error) {
    console.log("Error:", error.message);
  }
}

// Valid Order
calculateBill(["pizza", "coke", "fries"]);

// Invalid Order
calculateBill(["pizza", "pasta"]);   // pasta is not in menu
