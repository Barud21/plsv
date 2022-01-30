import numberValidation from "./numberValidation.js";

test("test if it is a number of given length", () => {
  expect(numberValidation("111111111", 9)).toBe(true);
});

test("test if it is a number of given length", () => {
  expect(numberValidation("111111111", 8)).toBe(false);
});
