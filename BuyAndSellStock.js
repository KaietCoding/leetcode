var maxProfit = function (prices) {
  let min = prices[0];
  let max = prices[0];
  let profit = max - min;
  for (price of prices) {
    if (price < min) {
      min = price;
      max = 0;
    }

    if (price > max) {
      max = price;
    }
    if (max - min > profit) {
      profit = max - min;
    }
  }

  if (profit < 0) return 0;

  return profit;
};
