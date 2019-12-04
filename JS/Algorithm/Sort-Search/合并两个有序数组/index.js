var merge = function(nums1, m, nums2, n) {
  var i = m - 1
  var j = n - 1
  var index = m + n - 1
  while(i >= 0 && j >= 0){
    nums1[index--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
  }
  while(j >= 0){
    nums1[index--] = nums2[j--]
  }
};

var nums1 = [1,2,3,0,0,0], m = 3
var nums2 = [2,5,6],       n = 3
merge(nums1, m, nums2, n);
console.log(nums1)