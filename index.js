const BankAccount = require("./src/bankAccount");

const bankAccount = new BankAccount();

bankAccount.deposit(1000);
bankAccount.deposit(2000);
bankAccount.withdraw(500);
bankAccount.printStatement()
