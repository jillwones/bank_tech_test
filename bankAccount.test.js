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
        bankAccount.deposit(200);
        expect(bankAccount.balance).toEqual(200);
      });

      it("should add an object representing that transaction to the transactions array", () => {
        bankAccount.deposit(200);
        const currentDate = new Date();
        expect(bankAccount.transactions).toEqual([
          { date: currentDate, credit: 200, debit: 0, balance: 200 },
        ]);
      });
    });

    describe("invalid input", () => {
      it("should throw an error if amount is not an integer (A String)", () => {
        expect(() => bankAccount.deposit("200")).toThrowError(
          "Invalid amount - amount must be a positive integer"
        );
      });

      it("should throw an error if amount is not an integer (A Float)", () => {
        expect(() => bankAccount.deposit(100.5)).toThrowError(
          "Invalid amount - amount must be a positive integer"
        );
      });

      it("should throw an error if amount is < 1", () => {
        expect(() => bankAccount.deposit(-300)).toThrowError(
          "Invalid amount - amount must be a positive integer"
        );
      });
    });
  });

  describe("withdrawing", () => {
    describe("valid input", () => {
      it("should subtract the amount from the balance", () => {
        bankAccount.deposit(500);
        bankAccount.withdraw(270);
        expect(bankAccount.balance).toEqual(230);
      });

      it("should add an object representing that transaction to the transactions array", () => {
        bankAccount.deposit(200);
        bankAccount.withdraw(100);
        const currentDate = new Date();
        expect(bankAccount.transactions).toEqual([
          { date: currentDate, credit: 200, debit: 0, balance: 200 },
          { date: currentDate, credit: 0, debit: 100, balance: 100 },
        ]);
      });
    });
    describe("invalid input", () => {
      it("should throw an error if amount is not an integer (A String)", () => {
        expect(() => bankAccount.withdraw("200")).toThrowError(
          "Invalid amount - amount must be a positive integer"
        );
      });

      it("should throw an error if amount is not an integer (A Float)", () => {
        expect(() => bankAccount.withdraw(100.5)).toThrowError(
          "Invalid amount - amount must be a positive integer"
        );
      });

      it("should throw an error if amount is < 1", () => {
        expect(() => bankAccount.withdraw(-300)).toThrowError(
          "Invalid amount - amount must be a positive integer"
        );
      });

      it("should throw an error if withdrawal amount exceeds balance", () => {
        bankAccount.deposit(200);
        expect(() => bankAccount.withdraw(300)).toThrowError(
          "Insufficient funds"
        );
      });
    });
  });

  describe("print statement", () => {
    it("should call the print method of the bank statement with the transactions", () => {
      const mockBankStatement = {
        print: jest.fn(),
      };
      const bankAccount = new BankAccount(mockBankStatement);
      bankAccount.printStatement();
      expect(mockBankStatement.print).toHaveBeenCalled();
    });
  });
});
