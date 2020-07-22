/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  let i = 0, j = numbers.length - 1;
  while(i < j) {
    let mid = Math.floor((j + i) / 2);
    if(numbers[mid] > numbers[j])  i = mid + 1;
    else if(numbers[mid] < numbers[j])  j = m;
    else j--;
  }
  return numbers[i];
};