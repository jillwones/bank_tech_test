const BankStatement = require("./bankStatement");

describe("Bank Statement", () => {
  let bankStatement;
  beforeEach(() => {
    bankStatement = new BankStatement();
  });
  describe("when initialised", () => {
    it("has 0 as current balance", () => {
      expect(bankStatement.currentBalance).toEqual(0);
    });
  });
  describe("printing the statement", () => {});
});
