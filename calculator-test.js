describe("Monthly Rate Test", function () {
  it("should calculate the monthly rate correctly", function () {
    const values = { amount: 200000, years: 10, rate: 6 };
    expect(calculateMonthlyPayment(values)).toEqual("2220.41");
  });
});

describe("Decimal Check", function () {
  it("should return a result with 2 decimal places", function () {
    const values = { amount: 200000, years: 10, rate: 6 };
    expect(calculateMonthlyPayment(values)).toEqual("2220.41");
  });
});

/// etc
