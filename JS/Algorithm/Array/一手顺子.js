/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function(hand, W) {
  let len = hand.length;
  if(len === 0) return false;
  if(len % W !== 0) return false;
  if(W === 1) return true;

  let map = {};
  for(let i = 0; i < len; i++) {
    if(!map[hand[i]]) map[hand[i]] = 0;
    map[hand[i]]++;
  }
  hand.sort((a, b) => a - b);

  for(let i =0 ;i < len; i++) {
    if(!map[hand[i]]) continue;
    let count = W - 1;
    let sum = 1;
    map[hand[i]]--;
    while(count > 0) {
      if(!map[hand[i] + sum]) return false;
      map[hand[i] + sum]--;
      sum++;
      count--;
    }
  }
  return true;
};

let hand = [1,2,3,6,2,3,4,7,8], W = 3;
console.log(isNStraightHand(hand, W))