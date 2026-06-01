function analyzeArray(arr) {
  if (arr.length === 0) {
    return {
      average: undefined,
      min: undefined,
      max: undefined,
      length: 0,
    };
  }

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let number of arr) {
    if (number < min) {
      min = number;
    }
    if (number > max) {
      max = number;
    }
    sum += number;
  }

  const average = sum / arr.length;

  return {
    average: average,
    min: min,
    max: max,
    length: arr.length,
  };
}

export { analyzeArray };
