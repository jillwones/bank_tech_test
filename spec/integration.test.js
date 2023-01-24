const BankAccount = require("../src/bankAccount");

describe("integration", () => {
  it("allows a user to deposit & withdraw, then print a statement", () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(200);
    bankAccount.deposit(700);
    bankAccount.withdraw(800);
    bankAccount.deposit(100);
    const currentDate = new Date("2023-01-24T12:05:20.606Z")
    const formattedDate = currentDate.toLocaleDateString("en-GB");
    expect(bankAccount.printStatement()).toEqual([
      {
        date: formattedDate,
        credit: '100.00',
        debit: '0.00',
        balance: '200.00'
      },
      {
        date: formattedDate,
        credit: '0.00',
        debit: '800.00',
        balance: '100.00'
      },
      {
        date: formattedDate,
        credit: '700.00',
        debit: '0.00',
        balance: '900.00'
      },
      {
        date: formattedDate,
        credit: '200.00',
        debit: '0.00',
        balance: '200.00'
      }
    ]);
  })
});
