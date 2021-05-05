//Third Maximum Number
var thirdMax = function (nums) {
  nums.sort((a, b) => b - a);
  let count = 0;
  if (nums.length < 3) return nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
    }
    if (count === 2) {
      return nums[i + 1];
    }
  }
  return nums[0];
};
