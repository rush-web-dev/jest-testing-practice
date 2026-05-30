export function caesarCipher(text, shift) {
  let plain_array = Array.from(text);
  let cipher_array = [];
  for (let letter of plain_array) {
    let cipher_letter = cipherLetter(letter, shift);
    cipher_array.push(cipher_letter);
  }
  return cipher_array.join('');
}

function cipherLetter(letter, shift) {
  let lettersToValues = {
    a: 0,
    A: 100,
    b: 1,
    B: 101,
    c: 2,
    C: 102,
    d: 3,
    D: 103,
    e: 4,
    E: 104,
    f: 5,
    F: 105,
    g: 6,
    G: 106,
    h: 7,
    H: 107,
    i: 8,
    I: 108,
    j: 9,
    J: 109,
    k: 10,
    K: 110,
    l: 11,
    L: 111,
    m: 12,
    M: 112,
    n: 13,
    N: 113,
    o: 14,
    O: 114,
    p: 15,
    P: 115,
    q: 16,
    Q: 116,
    r: 17,
    R: 117,
    s: 18,
    S: 118,
    t: 19,
    T: 119,
    u: 20,
    U: 120,
    v: 21,
    V: 121,
    w: 22,
    W: 122,
    x: 23,
    X: 123,
    y: 24,
    Y: 124,
    z: 25,
    Z: 125,
  };
  let value = lettersToValues[letter];
  if (value == undefined) {
    return letter;
  }
  let cipher_value = value + shift;
  if (cipher_value > 125 || (cipher_value > 25 && cipher_value < 100)) {
    cipher_value -= 26;
  }
  return Object.keys(lettersToValues).find(
    (k) => lettersToValues[k] == cipher_value
  );
}
