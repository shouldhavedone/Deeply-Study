/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) return false;
  if( x < 10) return true; 
  let num = x;
  let rex = 0;
  while(num !== 0) {
      rex = rex * 10 + num % 10;
      num = Math.floor(num / 10);
  }
  return x === rex;
};