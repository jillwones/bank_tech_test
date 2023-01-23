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
});
