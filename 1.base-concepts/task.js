"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  let discr = b**2-4*a*c;

  if (discr === 0) {
    let root = -b/(2*a);
    arr.push(root);
  } else if (discr > 0) {
      let rootOne = (-b + Math.sqrt(discr) )/(2*a);
      let rootTwo = (-b - Math.sqrt(discr) )/(2*a);
      arr.push(rootOne, rootTwo);
  };

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthsPercent = percent/100/12;
  let amountBody = amount - contribution;
  let monthsContribution = amountBody * (monthsPercent + (monthsPercent / (((1 + monthsPercent) ** countMonths) - 1)));
  let finalContribution = Number((monthsContribution * countMonths).toFixed(2));

  return finalContribution;
}
