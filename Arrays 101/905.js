//Sort Array By Parity
var sortArrayByParity = function (A) {
  const B = [];
  for (let num of A) {
    if (num % 2 === 0) {
      B.unshift(num);
    } else {
      B.push(num);
    }
  }
  return B;
};
