import { Calculator } from './calculator.js';

// add
test('1 + 1 = 2', () => {
  expect(Calculator.add(1, 1)).toBe(2);
});
test('0 + 0 = 0', () => {
  expect(Calculator.add(0, 0)).toBe(0);
});
test('-1 + -1 = -2', () => {
  expect(Calculator.add(-1, -1)).toBe(-2);
});

// substract
test('5 - 3 = 2', () => {
  expect(Calculator.subtract(5, 3)).toBe(2);
});
test('0 - 0 = 0', () => {
  expect(Calculator.subtract(0, 0)).toBe(0);
});
test('-1 - -1 = 0', () => {
  expect(Calculator.subtract(-1, -1)).toBe(0);
});

// divide
test('10 / 2 = 5', () => {
  expect(Calculator.divide(10, 2)).toBe(5);
});
test('0 / 1 = 0', () => {
  expect(Calculator.divide(0, 1)).toBe(0);
});
test('-6 / 3 = -2', () => {
  expect(Calculator.divide(-6, 3)).toBe(-2);
});
test('divide by zero throws error', () => {
  expect(() => Calculator.divide(10, 0)).toThrow('Cannot divide by zero');
});

// multiply
test('2 * 3 = 6', () => {
  expect(Calculator.multiply(2, 3)).toBe(6);
});
test('0 * 5 = 0', () => {
  expect(Calculator.multiply(0, 5)).toBe(0);
});
test('-2 * 3 = -6', () => {
  expect(Calculator.multiply(-2, 3)).toBe(-6);
});
