import { calculator } from './calculator'

test('calculator', () => {
  expect(calculator.add(3, 5)).toBe(8);
  expect(calculator.subtract(5, 5)).toBe(0);
  expect(calculator.divide(15, 5)).toBe(3);
  expect(calculator.multiply(3, 5)).toBe(15);
})