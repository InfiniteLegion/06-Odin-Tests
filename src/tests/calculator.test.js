import { Calculator } from "../functions/calculator.js";

test('calculator', () => {
  expect(Calculator.add(54, 45)).toBe(99);
  expect(Calculator.substract(32, 43)).toBe(-11);
  expect(Calculator.multiply(33, 14)).toBe(462);
  expect(Calculator.divide(121, 11)).toBe(11);
});