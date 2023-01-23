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
});
