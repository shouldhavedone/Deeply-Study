/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  let R = grid.length,
    C = grid[0].length;
  let count = 0;
  for (let i = 0; i < R - 2; i++) {
    for (let j = 0; j < C - 2; j++) {
      if (5 !== grid[i + 1][j + 1]) continue;
      if (isMagic(grid[i][j], grid[i][j + 1], grid[i][j + 2], grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2], grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2])) {
        count++;
      }
    }
  }

  return count;
};

function isMagic() {
  let vals = [...arguments];
  for (let i = 1; i <= 9; i++) {
    if (vals.indexOf(i) === -1) return false
  }
  console.log(vals)
  return (
    vals[0] + vals[1] + vals[2] == 15 &&
    vals[3] + vals[4] + vals[5] == 15 &&
    vals[6] + vals[7] + vals[8] == 15 &&
    vals[0] + vals[3] + vals[6] == 15 &&
    vals[1] + vals[4] + vals[7] == 15 &&
    vals[2] + vals[5] + vals[8] == 15 &&
    vals[0] + vals[4] + vals[8] == 15 &&
    vals[2] + vals[4] + vals[6] == 15
  );
}
let arr = [
  [5, 5, 5],
  [5, 5, 5],
  [5, 5, 5]
]

console.log(numMagicSquaresInside(arr))