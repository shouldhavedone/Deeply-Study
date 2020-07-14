/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

  let result = s.split(' ').filter(item => item).reverse().join(' ')
  console.log(result)

  return result

};

let str = "a good   example"

console.log(reverseWords(str))