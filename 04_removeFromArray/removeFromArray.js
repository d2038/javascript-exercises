const removeFromArray = function(array, ...args) {
  return array.filter( ele => !args.includes(ele) );
};

// Do not edit below this line
module.exports = removeFromArray;
