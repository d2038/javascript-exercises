const reverseString = function(string) {
  const chars = string.split('');
  const result = [];
  
  for (const char of chars) {
    result.unshift(char);    
  }
  
  return result.join('');
};

// Do not edit below this line
module.exports = reverseString;
