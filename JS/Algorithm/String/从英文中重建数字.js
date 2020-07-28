/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
  let str = {};
  for(let i of s) {
    if(str[i] === undefined) str[i] = 0;
    str[i]++;
  }
  let count = new Array(10).fill(0);
  count[0] = str['z'] || 0;
  count[2] = str['w'] || 0;
  count[4] = str['u'] || 0;
  count[6] = str['x'] || 0;
  count[8] = str['g'] || 0;
  count[3] = (str['h'] || 0) - count[8];
  count[5] = (str['f'] || 0) - count[4];
  count[7] = (str['s'] || 0) - count[6];
  count[9] = (str['i'] || 0) - count[5] - count[6] - count[8];
  count[1] = (str['n'] || 0) - count[7] - count[9] - count[9];
  let res = '';
  console.log(count)
  for(let i = 0; i <= 9; i++) {
    res += i.toString().repeat(count[i])
  }
  return res;
};

let s =  "fviefuro"
console.log(originalDigits(s))