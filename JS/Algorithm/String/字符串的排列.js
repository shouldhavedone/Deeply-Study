/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  let res = new Set();
  let path = [], visited = [];
  dfsHelper([...s], path, res, visited);
  return Array.from(res);
};

function dfsHelper(arr, path, res, visited) {
  if(arr.length === path.length) {
    res.add(path.join(''));
    return;
  }
  for(let i = 0; i < arr.length; i++) {
    if(visited[i]) continue;
    visited[i] = true;
    path.push(arr[i]);
    dfsHelper(arr, path, res, visited);
    path.pop();
    visited[i] = false;
  }
}