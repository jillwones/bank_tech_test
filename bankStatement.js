class BankStatement {
  print(transactions) {
    const formattedTransactions = transactions
      .map((transaction) => {
        return this.formatTransaction(transaction);
      })
      .reverse();
    console.table(formattedTransactions);
    return formattedTransactions;
  }

  formatTransaction(transaction) {
    transaction.date = this.formatDate(transaction.date);
    transaction.credit = this.formatAmount(transaction.credit);
    transaction.debit = this.formatAmount(transaction.debit);
    transaction.balance = this.formatAmount(transaction.balance);
    return transaction;
  }

  formatDate(date) {
    return date.toLocaleDateString("en-GB");
  }

  formatAmount(amount) {
    return amount && amount.toFixed(2);
  }
}

module.exports = BankStatement;
