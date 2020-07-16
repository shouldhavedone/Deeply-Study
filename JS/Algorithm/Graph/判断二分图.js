/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  const visited = new Array(graph.length); // 1.红色 2.黄色 undefined.未染色
  for(let i = 0; i < graph.length; i++) { // 遍历每个顶点
    if(visited[i]) continue; // 顶点已经染色，跳过
    const queue = [i]; // 推入顶点i
    visited[i] = 1; // 第一个顶点染色
    while(queue.length) { // 遍历顶点i所有的相邻顶点
      const cur = queue.shift(); // 考察出列顶点
      const curColor = visited[cur]; // 出列顶点颜色
      const neighborColor = -curColor; // 相邻顶点应该的颜色
      for(let i = 0; i < graph[cur].length; i++) { // 上色
        const neighbor = graph[cur][i];
        if(visited[neighbor] === undefined) { // 如果还没有上色
          visited[neighbor] = neighborColor; // 上色
          queue.push(neighbor);  // 推入队列
        } else if(visited[neighbor] !== neighborColor) { // 已上色，但颜色不匹配
          return false;
        }
      }
    }
  }
  return true; 
};