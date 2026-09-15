class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (!prices.length) {
            return 0;
        }

        let maxProfit = 0;
        let minCount = prices[0];

        for (let i = 0; i < prices.length; i++) {
            minCount = Math.min(minCount, prices[i]);
            maxProfit = Math.max(maxProfit, prices[i] - minCount);
        }

        return maxProfit;
    }
}
