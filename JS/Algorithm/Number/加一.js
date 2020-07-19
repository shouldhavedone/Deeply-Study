/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;
    if (digits[i] !== 0) return digits;
  }
  digits = [...Array(len + 1)].map(_ => 0);
  digits[0] = 1;
  return digits;
}

var plusOne = function (digits) {
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++
      break
    } else {
      digits[i] = 0
      if (i === 0) {
        digits.unshift(1)
      }
    }
  }
  return digits
}