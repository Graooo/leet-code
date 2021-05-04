//Find Numbers with Even Number of Digits
var findNumbers = function (nums) {
  let count = 0;
  for (let num of nums) {
    num = num + "";
    if (num.length % 2 === 0) {
      count++;
    }
  }
  return count;
};
