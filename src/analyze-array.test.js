import { analyzeArray } from './analyze-array.js';

test('[1,8,3,4,2,6] to be: 4, 1, 8, 6', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('[1, 1, 1, 1, 1, 1] to be: 1, 1, 1, 6', () => {
  expect(analyzeArray([1, 1, 1, 1, 1, 1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 6,
  });
});

test('[1, 2, 3, 4] to be: 2.5, 1, 4, 4', () => {
  expect(analyzeArray([1, 2, 3, 4])).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  });
});

test('[1, 10] to be: 5.5, 1, 10, 2', () => {
  expect(analyzeArray([1, 10])).toEqual({
    average: 5.5,
    min: 1,
    max: 10,
    length: 2,
  });
});

test('[0, 0, 0, 0] to be: 0, 0, 0, 4', () => {
  expect(analyzeArray([0, 0, 0, 0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 4,
  });
});

test('[0, -1, 1, 4] to be: 1, -1, 4, 4', () => {
  expect(analyzeArray([0, -1, 1, 4])).toEqual({
    average: 1,
    min: -1,
    max: 4,
    length: 4,
  });
});

test('[-3, -4] to be: -3.5, -4, -3, 2', () => {
  expect(analyzeArray([-3, -4])).toEqual({
    average: -3.5,
    min: -4,
    max: -3,
    length: 2,
  });
});

test('[] to be: undefined, undefined, undefined, 0', () => {
  expect(analyzeArray([])).toEqual({
    average: undefined,
    min: undefined,
    max: undefined,
    length: 0,
  });
});
