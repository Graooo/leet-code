//Valid Mountain Array
var validMountainArray = function (arr) {
  let isUp = false;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    } else if (!isUp && arr[i] < arr[i + 1]) {
      isUp = !isUp;
      count++;
    } else if (isUp && arr[i] > arr[i + 1]) {
      isUp = !isUp;
      count++;
    }
  }
  if (count === 2 && arr[0] < arr[1]) {
    return true;
  } else return false;
};
