const ftoc = function(ftemp) {
  let formulaValue = (ftemp - 32) * 5 / 9;
  let stringOneDecimal = formulaValue.toFixed(1);
  return +stringOneDecimal;
};

const ctof = function(ctemp) {
  let formulaValue = ctemp * 9 / 5 + 32;
  let stringOneDecimal = formulaValue.toFixed(1);
  return +stringOneDecimal;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
