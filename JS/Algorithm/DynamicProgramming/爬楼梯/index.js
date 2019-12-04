var climbStairs = function(n) {
  if(n == 1){
    return 1
  }else if(n == 2){
    return 2
  }else {
    return climbStairs(n - 1) + climbStairs(n - 2)
  }
};

console.log(climbStairs(4))