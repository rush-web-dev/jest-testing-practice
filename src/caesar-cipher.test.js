import { caesarCipher } from './caesar-cipher.js';

test('a with 3 to be d', () => {
  expect(caesarCipher('a', 3)).toBe('d');
});

test('z with 3 to be c', () => {
  expect(caesarCipher('z', 3)).toBe('c');
});

test('A with 3 to be D', () => {
  expect(caesarCipher('A', 3)).toBe('D');
});

test('Z with 3 to be C', () => {
  expect(caesarCipher('Z', 3)).toBe('C');
});

test('hello with 3 to be khoor', () => {
  expect(caesarCipher('hello', 3)).toBe('khoor');
});

test('"" with 3 to be ""', () => {
  expect(caesarCipher('', 3)).toBe('');
});

test('"!" with 3 to be "!"', () => {
  expect(caesarCipher('!', 3)).toBe('!');
});

test('"hello!" with 3 to be "khoor!"', () => {
  expect(caesarCipher('hello!', 3)).toBe('khoor!');
});

test('"!HeLlo!" with 3 to be "!KhOor!"', () => {
  expect(caesarCipher('!HeLlo!', 3)).toBe('!KhOor!');
});

test('"xyz" with 3 to be "abc"', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('"zxYlyl" with 25 to be "ywXkxk"', () => {
  expect(caesarCipher('zxYlyl', 25)).toBe('ywXkxk');
});
