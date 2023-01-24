const BankAccount = require("./src/bankAccount");
const BankStatement = require("./src/bankStatement");

const bankStatement = new BankStatement();
const bankAccount = new BankAccount(bankStatement);

bankAccount.deposit(1000);
bankAccount.deposit(2000);
bankAccount.withdraw(500);
bankAccount.printStatement()
