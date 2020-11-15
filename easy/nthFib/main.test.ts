import nthFib from "./main";

describe("The N-th Fib function works properly", () => {
  const ledger = [0, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
  it("Matches the ledger", () => {
    const testAnswers = Array.from(Array(14).keys()).map((value) =>
      nthFib(value)
    );
    expect(testAnswers).toEqual(ledger);
  });
});
