/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
//   let result = 0;
//   while(x !== 0) {
//     result = result * 10 + x % 10;
//     x = (x / 10) | 0;
//   }
//   return (result | 0) === result ? result : 0;
// };

// var reverse = function (x) {
//   let num = Math.abs(x);
//   let result = 0;
//   while (num !== 0) {
//     result = result * 10 + num % 10;
//     num = (num / 10) | 0;
//   }
//   if(x < 0){
//     return result <= Math.pow(2, 31) ? -result : 0;
//   } else {
//     return result < Math.pow(2, 31) ? result : 0;
//   }
// };

var reverse = function (x) {
  let now = Math.abs(x).toString().split('').reverse().join('');
  if(x < 0) {
    return now <= Math.pow(2, 31) ? -now : 0;
  } else {
    return now < Math.pow(2, 31) ? now : 0;
  }
};
console.log(reverse(123))