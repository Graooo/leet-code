//Check If N and Its Double Exist
var checkIfExist = function (arr) {
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[i] * 2 === arr[j] || arr[j] * 2 === arr[i]) {
        return true;
      }
    }
  }
  return false;
};
