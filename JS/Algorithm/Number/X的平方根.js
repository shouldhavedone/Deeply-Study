/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0;
  let res = 1;
  while (!(res * res <= x && (res + 1) * (res + 1) > x)) {
    res = parseInt(res - (res * res - x) / (2 * res))
  }
  return res
};