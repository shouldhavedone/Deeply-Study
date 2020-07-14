/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const dp = new Array(triangle[triangle.length - 1].length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = triangle[triangle.length - 1][i];
  }
  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
    }
  }
  return dp[0]
};