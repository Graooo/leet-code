//Move Zeroes
var moveZeroes = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 && count < nums.length) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
    }
    count++;
  }
};
