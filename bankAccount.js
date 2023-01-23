class BankAccount {
  constructor(bankStatement) {
    this.balance = 0;
    this.transactions = [];
    this.bankStatement = bankStatement;
  }

  deposit(amount, date) {
    if (!Number.isInteger(amount) || amount < 1) {
      throw new Error("Invalid amount - amount must be a positive integer");
    }
    const dateObject = new Date(date);
    if (dateObject == "Invalid Date") {
      throw new Error("Invalid Date - use format YYYY-MM-DD");
    }
    this.balance += amount;
    this.transactions.push({ date: date, amount: amount, type: "deposit" });
  }
}

module.exports = BankAccount;
