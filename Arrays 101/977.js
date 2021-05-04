//Squares of a Sorted Array
var sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      break;
    } else {
      nums[i] = nums[i] * -1;
    }
  }
  let newNums = nums.sort((a, b) => a - b);
  newNums = nums.map((num) => num * num);
  return newNums;
};
