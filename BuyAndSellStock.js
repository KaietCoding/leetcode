let min = prices[0];
let max = prices[0];
let profit = max - min;
for (price of prices) {
  if (price < min) {
    min = price;
    max = price;
  } else if (price > max) {
    max = price;
  }
  if (max - min > profit) {
    profit = max - min;
  }
}

return profit;
