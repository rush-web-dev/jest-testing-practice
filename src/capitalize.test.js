import { capitalize } from './capitalize.js';

test('hello to be Hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('"" to be ""', () => {
  expect(capitalize('')).toBe('');
});

test('"!abc" to be "!abc"', () => {
  expect(capitalize('!abc')).toBe('!abc');
});

test('"hello world!" to be "Hello world!"', () => {
  expect(capitalize('!abc')).toBe('!abc');
});
