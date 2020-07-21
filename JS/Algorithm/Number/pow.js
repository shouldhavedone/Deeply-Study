/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n < 0) return 1 / (x * myPow(x, -(n + 1)));
  if (n === 0) return 1;
  if (n === 1) return x;
  return n % 2 === 1 ? x * myPow(x, n - 1) : myPow(x * x, n / 2);
};

console.log(myPow(3, 3))