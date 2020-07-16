/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  if(nums1.length === 0 || nums2.length === 0) return []
  const map = []
  const result = []
  for (const num of nums1) {
    if(map[num]) {
      map[num]++
    } else {
      map[num] = 1
    }
  }
  for (const num of nums2) {
    let val = map[num]
    if(val > 0) {
      result.push(num)
      map[num]--
    }
  }
  return result
};


const nums1 = [1,2,3,4,5,6,5,3,2,1,1,2,3,4], nums2 = [3,2,1,6,4,4,5,6,3,2]
console.log(intersect(nums1, nums2))