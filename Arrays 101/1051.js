//Height Checker
var heightChecker = function (heights) {
  const temp = [...heights];
  heights.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (temp[i] !== heights[i]) {
      count++;
    }
  }
  return count;
};
