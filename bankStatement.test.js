const BankStatement = require("./bankStatement");

describe("Bank Statement", () => {
  let bankStatement;
  beforeEach(() => {
    bankStatement = new BankStatement();
  });
  describe("formatting extras", () => {
    it("correctly formats date", () => {
      const date = new Date("2023-01-24T10:59:31.832Z");
      expect(bankStatement.formatDate(date)).toEqual("24/01/2023");
    });

    it("correctly formats amount when passed amount", () => {
      expect(bankStatement.formatAmount(200)).toEqual("200.00");
    });
  });
});
