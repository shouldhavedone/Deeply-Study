/**
 * @param {string} command
 * @param {number[][]} obstacles
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var robot = function (command, obstacles, x, y) {
  let mapFa = {
    '0,0': 1,
  };

  let indexX = 0,
    indexY = 0;

  // 存储移动指令
  for (let i of command) {
    if (i === 'U') indexY++;
    else if (i === 'R') indexX++;
    mapFa[[indexX, indexY]] = 1;
  }
  console.log(mapFa)
  let ret_x = 0,
    ret_y = 0,
    cir = 0; 
  cir = Math.min(Math.floor(x / indexX), Math.floor(y / indexY)); // 循环执行指令次数

  // 查看终点是否在运行轨迹上
  ret_x = x - cir * indexX; // 终点对应的第一次轨迹的坐标
  ret_y = y - cir * indexY;
  if (!mapFa[[ret_x, ret_y]]) return false;


  let obret_x = 0,
    obret_y = 0;
  for (let j = 0; j < obstacles.length; j++) {
    obret_x = obstacles[j][0]; // 障碍物x坐标
    obret_y = obstacles[j][1]; // 障碍物y坐标
    if (obret_x > x || obret_y > y) continue; // 障碍物坐标在终点坐标外不考虑
    cir = Math.min(Math.floor(obret_x / indexX), Math.floor(obret_y / indexY)); // 循环执行指令次数
    ret_x = obret_x - cir * indexX; // 障碍物在第一次轨迹的坐标
    ret_y = obret_y - cir * indexY;
    console.log(ret_x,ret_y);
    // 如果坐标存在则碰到障碍物，不能到达终点
    if (mapFa[[ret_x,ret_y]]) return false;
  }
  return true;
};

let command = "URR",
  obstacles = [
    [2, 2]
  ],
  x = 3,
  y = 2;

console.log(robot(command, obstacles, x, y))