/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  if(numExchange > numBottles) return numBottles;
  if(numExchange === numBottles) return numBottles + 1;
  let sumNum = numBottles;
  while (numBottles >= numExchange) {
    let change = parseInt(numBottles / numExchange);
    sumNum += change;
    numBottles = change + numBottles % numExchange;
  }
  return sumNum;
};

