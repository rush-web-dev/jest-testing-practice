import { reverseString } from './reverse-string.js';

test('hello to be olleh', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('Hello to be olleH', () => {
  expect(reverseString('Hello')).toBe('olleH');
});

test('h to be h', () => {
  expect(reverseString('h')).toBe('h');
});

test(' to be ', () => {
  expect(reverseString('')).toBe('');
});
