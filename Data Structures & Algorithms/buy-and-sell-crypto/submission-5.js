class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let l = 0;
        let r = 1;

        while (r < prices.length) {
            if (prices[l] > prices[r]) {
                l = r;
            }
            maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
            r++;
        }

        return maxProfit;
    }
}

