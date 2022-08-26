/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const formatter = (value) => {
  let formattedValue = new Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
  return formattedValue;
};

const tipCalculator = () => {
  let sum = 29.95;
  let percentage = 18;
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
  Sum before tip: ${formatter(sum)}
  Tip percentage: ${percentage}%
  Tip:            ${formatter(tip.toFixed(2))}
  Total:          ${formatter(total.toFixed(2))}
`);
};

tipCalculator();
