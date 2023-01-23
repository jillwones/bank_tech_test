const BankAccount = require("./bankAccount");

describe("Bank Account", () => {
  let bankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount();
  });

  describe("when initialized", () => {
    it("should have a balance of 0 when initialized", () => {
      expect(bankAccount.balance).toEqual(0);
    });

    it("should have an empty array of transactions when initialized", () => {
      expect(bankAccount.transactions).toEqual([]);
    });

    it("should be passed in an instance of BankStatement", () => {
      const mockBankStatement = jest.fn();
      let bankAccount = new BankAccount(mockBankStatement);
      expect(bankAccount.bankStatement).toBeDefined();
    });
  });

  describe("depositing", () => {
    describe("valid input", () => {
      it("should add the amount to the balance", () => {
        bankAccount.deposit(200, "2022-12-01");
        expect(bankAccount.balance).toEqual(200);
      });

      it("should add an object representing that transaction to the transactions array", () => {
        bankAccount.deposit(200, "2022-12-01");
        expect(bankAccount.transactions).toEqual([
          { date: "2022-12-01", amount: 200, type: "deposit" },
        ]);
      });
    });

    describe("invalid input", () => {
      it("should throw an error if amount is not an integer (A String)", () => {
        expect(() => bankAccount.deposit("200", "2020-01-01")).toThrowError(
          "Invalid amount - amount must be a positive integer"
        );
      });

      it("should throw an error if amount is not an integer (A Float)", () => {
        expect(() => bankAccount.deposit(100.5, "2020-01-01")).toThrowError(
          "Invalid amount - amount must be a positive integer"
        );
      });

      it("should throw an error if amount is < 1", () => {
        expect(() => bankAccount.deposit(-300, "2020-01-01")).toThrowError(
          "Invalid amount - amount must be a positive integer"
        );
      });

      it("should throw an error if date is not valid", () => {
        expect(() => bankAccount.deposit(200, "abcdefg")).toThrowError(
          "Invalid Date - use format YYYY-MM-DD"
        );
      });
    });
  });

  describe("withdrawing", () => {
    describe("valid input", () => {
      it("should subtract the amount from the balance", () => {
        bankAccount.deposit(500, "2022-01-01");
        bankAccount.withdraw(270, "2022-02-28");
        expect(bankAccount.balance).toEqual(230);
      });
    });
    describe("invalid input", () => {
      it("should throw an error if amount is not an integer (A String)", () => {
        expect(() => bankAccount.withdraw("200", "2020-01-01")).toThrowError(
          "Invalid amount - amount must be a positive integer"
        );
      });

      it("should throw an error if amount is not an integer (A Float)", () => {
        expect(() => bankAccount.withdraw(100.5, "2020-01-01")).toThrowError(
          "Invalid amount - amount must be a positive integer"
        );
      });

      it("should throw an error if amount is < 1", () => {
        expect(() => bankAccount.withdraw(-300, "2020-01-01")).toThrowError(
          "Invalid amount - amount must be a positive integer"
        );
      });

      it("should throw an error if date is not valid", () => {
        expect(() => bankAccount.withdraw(200, "abcdefg")).toThrowError(
          "Invalid Date - use format YYYY-MM-DD"
        );
      });

      it("should throw an error if withdrawal amount exceeds balance", () => {
        bankAccount.deposit(200, "2022-12-25");
        expect(() => bankAccount.withdraw(300, "2022-12-27")).toThrowError(
          "Insufficient funds"
        );
      });
    });
  });
});
