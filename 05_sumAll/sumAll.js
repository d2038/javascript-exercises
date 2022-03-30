const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0 || typeof num1 != "number" || 
    typeof num2 != "number" ) {
    return 'ERROR';    
  }

  let minNum = num1;
  let maxNum = num2;

  if (num1 > num2) {
    minNum = num2;
    maxNum = num1;    
  }

  let sum = 0;

  for (let i = minNum; i <= maxNum; i++) {
    sum += i;    
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
