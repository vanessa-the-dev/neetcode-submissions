class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (!prices.length) {
            return 0;
        }

        let l = 0;
        let r = 1;
        let maxCount = 0;

        while (r < prices.length) {
            if (prices[l] > prices[r]) {
                l = r;
            }

            let sum = prices[r] - prices[l];
            maxCount = Math.max(maxCount, sum);

            r++;
        }

        return maxCount;
    }
}
