class BankAccount {
  constructor(bankStatement) {
    this.balance = 0;
    this.transactions = [];
    this.bankStatement = bankStatement;
  }

  deposit(amount, date) {
    this.balance += amount;
    this.transactions.push({ date: date, amount: amount, type: "deposit" });
  }
}

module.exports = BankAccount;
