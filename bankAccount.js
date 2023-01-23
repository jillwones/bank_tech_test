class BankAccount {
  constructor(bankStatement) {
    this.balance = 0;
    this.transactions = [];
    this.bankStatement = bankStatement;
  }

  deposit(amount, date) {
    if (!Number.isInteger(amount)) {
      throw new Error("Invalid amount - amount must be a positive integer");
    }
    this.balance += amount;
    this.transactions.push({ date: date, amount: amount, type: "deposit" });
  }
}

module.exports = BankAccount;
