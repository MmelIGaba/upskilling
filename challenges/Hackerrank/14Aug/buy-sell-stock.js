var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
  
    for (let i = 0; i < prices.length; i++) {
        console.log(minPrice, maxProfit, i)
      minPrice = Math.min(minPrice, prices[i]);
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
      console.log(minPrice, maxProfit, i)

    }
  
    return maxProfit;
  };
const a = [7, 3, 4, 6, 1, 8, 2, 0, 3];
console.log(maxProfit(a))  