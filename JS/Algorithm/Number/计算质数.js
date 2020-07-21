/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let count = 0;
  let list = new Uint8Array(n);
  for (let i = 2; i < n; i++) {
    if (!list[i - 1]) {
      count++;
      for (let j = i * i; j <= n; j += i) {
        list[j - 1] = true;
      }
    }
  }
  return count;
}


let list = new Uint8Array(1)
console.log(list)