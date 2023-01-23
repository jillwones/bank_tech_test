const BankAccount = require("./bankAccount");
const BankStatement = require("./bankStatement");

const bankStatement = new BankStatement();
const bankAccount = new BankAccount(bankStatement);

// bankAccount.deposit(1000, "2023-01-10");
// bankAccount.deposit(2000, "2023-01-13");
// bankAccount.withdraw(500, "2023-01-14");
// bankAccount.printStatement()
