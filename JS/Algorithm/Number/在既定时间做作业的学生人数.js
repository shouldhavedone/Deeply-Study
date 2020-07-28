/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
  let count = 0;
  for(let i = 0; i < startTime.length; i++) {
    if(startTime[i] <= queryTime && endTime[i] >= queryTime) count++;
  }
  return count;
};

let startTime = [9,8,7,6,5,4,3,2,1], endTime = [10,10,10,10,10,10,10,10,10], queryTime = 5

console.log(busyStudent(startTime, endTime, queryTime))