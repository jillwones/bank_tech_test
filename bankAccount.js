class BankAccount {
  constructor(bankStatement) {
    this.balance = 0;
    this.transactions = [];
    this.bankStatement = bankStatement;
  }

  deposit(amount, date) {
    this.#checkAmountIsIntAndPositive(amount);
    this.#validateDate(date);
    this.balance += amount;
    this.transactions.push({ date, amount, type: "deposit" });
  }

  withdraw(amount, date) {
    this.#checkAmountIsIntAndPositive(amount);
    this.#validateDate(date);
    this.#checkFunds(amount);
    this.balance -= amount;
    this.transactions.push({ date, amount, type: "withdraw" });
  }

  #validateDate(date) {
    const dateObject = new Date(date);
    if (dateObject == "Invalid Date") {
      throw new Error("Invalid Date - use format YYYY-MM-DD");
    }
    const lastTransaction = this.transactions[this.transactions.length - 1];
    if (lastTransaction && dateObject <= new Date(lastTransaction.date)) {
      throw new Error(
        "Invalid Date - date of new transaction cannot be earlier than the last transaction date"
      );
    }
  }

  #checkAmountIsIntAndPositive(amount) {
    if (!Number.isInteger(amount) || amount < 1) {
      throw new Error("Invalid amount - amount must be a positive integer");
    }
  }

  #checkFunds(amount) {
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
  }
}

module.exports = BankAccount;
