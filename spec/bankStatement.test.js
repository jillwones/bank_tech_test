const BankStatement = require("../src/bankStatement");

describe("Bank Statement", () => {
  let bankStatement;
  beforeEach(() => {
    bankStatement = new BankStatement();
  });
  describe("formatDate", () => {
    it("correctly formats date", () => {
      const date = new Date("2023-01-24T10:59:31.832Z");
      expect(bankStatement.formatDate(date)).toEqual("24/01/2023");
    });
  });
  describe("formatAmount", () => {
    it("correctly formats amount when passed amount", () => {
      expect(bankStatement.formatAmount(200)).toEqual("200.00");
    });
  });
  describe("formatTransaction", () => {
    it("correctly formats the transaction", () => {
      const transaction = {
        date: new Date("2023-01-24T10:59:31.832Z"),
        credit: 10,
        debit: 0,
        balance: 10,
      };
      const expectedFormattedTransaction = {
        date: "24/01/2023",
        credit: "10.00",
        debit: "0.00",
        balance: "10.00",
      };
      expect(bankStatement.formatTransaction(transaction)).toEqual(
        expectedFormattedTransaction
      );
    });
  });
  describe("print", () => {
    it("prints the transactions in reverse order", () => {
      const transactions = [
        {
          date: new Date("2023-01-24"),
          credit: 10,
          debit: 0,
          balance: 10,
        },
        {
          date: new Date("2023-01-26"),
          credit: 50,
          debit: 0,
          balance: 60,
        },
        {
          date: new Date("2023-01-29"),
          credit: 0,
          debit: 40,
          balance: 20,
        },
      ];

      const expectedFormattedTransaction = [
        {
          date: "29/01/2023",
          credit: "0.00",
          debit: "40.00",
          balance: "20.00",
        },
        {
          date: "26/01/2023",
          credit: "50.00",
          debit: "0.00",
          balance: "60.00",
        },
        {
          date: "24/01/2023",
          credit: "10.00",
          debit: "0.00",
          balance: "10.00",
        },
      ];
      expect(bankStatement.print(transactions)).toEqual(
        expectedFormattedTransaction
      );
    });
  });
});
