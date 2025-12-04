class BankAccount {
  #balance = 0;   // Private field

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be greater than 0");
    }
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      throw new Error("Insufficient balance!");
    }
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

// Create account
const account = new BankAccount();

// Valid Deposits
try {
  console.log("Deposit 1000:", account.deposit(1000));
  console.log("Deposit 500:", account.deposit(500));
} 
catch (err) {
  console.log("Error:", err.message);
}

// Invalid Withdrawal
try {
  console.log("Withdraw 2000:", account.withdraw(2000)); // More than balance
} 
catch (err) {
  console.log("Error:", err.message);
}

// Valid Withdrawal
try {
  console.log("Withdraw 300:", account.withdraw(300));
} 
catch (err) {
  console.log("Error:", err.message);
}

console.log("Final Balance:", account.getBalance());
