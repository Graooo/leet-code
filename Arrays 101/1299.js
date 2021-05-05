//Replace Elements with Greatest Element on Right Side
var replaceElements = function (arr) {
  let max = -1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (max < arr[j]) {
        max = arr[j];
      }
    }
    arr.splice(i, 1, max);
    max = -1;
  }
  return arr;
};
