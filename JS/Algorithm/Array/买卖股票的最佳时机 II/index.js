/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length < 0){
    return 0
  }
  var min = 0
  var max = 0
  for(var i = 0; i < prices.length - 1; i++){
    min = prices[i + 1] - prices[i]
    if(min > 0){
      max += min
    }
  }
  return max
};

var arr = [1,2,3,4,5]
var a = maxProfit(arr)
console.log(a)