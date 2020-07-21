// var climbStairs = function (n) {
//   if (n == 1) {
//     return 1
//   } else if (n == 2) {
//     return 2
//   } else {
//     return climbStairs(n - 1) + climbStairs(n - 2)
//   }
// };

// console.log(climbStairs(4))



var climbStairs = function (n) {
  let memo = new Array(n + 1);
  return climb_Stairs(0, n, memo);
}

function climb_Stairs(i, n, memo) {
  if (i > n) return 0;
  if (i == n) return 1;
  if (memo[i] > 0) return memo[i];
  memo[i] = climb_Stairs(i + 1, n, memo) + climb_Stairs(i + 2, n, memo);
  console.log(memo[i]);
  return memo[i];
}
console.log(climbStairs(4))