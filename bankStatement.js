class BankStatement {
  formatDate(date) {
    return date.toLocaleDateString("en-GB");
  }

  formatAmount(amount) {
    return amount.toFixed(2);
  }
}

module.exports = BankStatement;
