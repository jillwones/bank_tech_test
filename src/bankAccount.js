const BankStatement = require("./bankStatement");

class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this.#validateAmount(amount);
    this.balance += amount;
    this.transactions.push({
      date: new Date(),
      credit: amount,
      debit: 0,
      balance: this.balance,
    });
  }

  withdraw(amount) {
    this.#validateAmount(amount);
    this.#checkFunds(amount);
    this.balance -= amount;
    this.transactions.push({
      date: new Date(),
      credit: 0,
      debit: amount,
      balance: this.balance,
    });
  }

  printStatement(bankStatement = new BankStatement()) {
    return bankStatement.print(this.transactions);
  }

  #validateAmount(amount) {
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
