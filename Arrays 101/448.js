//Find All Numbers Disappeared in an Array
const nums = [1, 1];
var findDisappearedNumbers = function (nums) {
  const output = [];
  for (let counter = 1; counter <= nums.length; counter++) {
    if (!nums.find((item) => item === counter)) {
      output.push(counter);
    }
  }
  return output;
};

findDisappearedNumbers(nums);
