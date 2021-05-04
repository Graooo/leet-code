//Duplicate Zeros
var duplicateZeros = function (arr) {
  let endCount = 0;
  const arrLenght = arr.length;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > 0) {
      break;
    } else {
      endCount++;
    }
  }

  for (let i = arr.length - (endCount + 1); i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
    }
  }
  console.log(arr);
  console.log(arrLenght);
  arr.splice(arrLenght, arrLenght + endCount);
};
