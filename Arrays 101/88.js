//Merge Sorted Array
var merge = function (nums1, m, nums2, n) {
  let count = nums1.length + nums2.length;
  const length = m + n;
  for (let i = length; i >= 0; i--) {
    if (nums1[i] === 0) {
      nums1.splice(i, 1);
      count--;
    }
    if (length === count) {
      break;
    }
  }
  nums1.push(...nums2);
  nums1 = nums1.sort((a, b) => a - b);
};
