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
  }

  #validateDate(date) {
    const dateObject = new Date(date);
    if (dateObject == "Invalid Date") {
      throw new Error("Invalid Date - use format YYYY-MM-DD");
    }
  }

  #checkAmountIsIntAndPositive(amount) {
    if (!Number.isInteger(amount) || amount < 1) {
      throw new Error("Invalid amount - amount must be a positive integer");
    }
  }
}

module.exports = BankAccount;
