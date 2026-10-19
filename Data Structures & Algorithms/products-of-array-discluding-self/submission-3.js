class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeroCnt = 0;
        let product = 1;
        const result = [];

        for (const num of nums) {
            if (num === 0) {
                zeroCnt++;
            } else {
                product *= num;
            }
        }

        if (zeroCnt > 1) {
            return new Array(nums.length).fill(0);
        }

        for (const num of nums) {
            if (zeroCnt > 0) {
                if (num !== 0) {
                    result.push(0);
                } else {
                    result.push(product);
                }
            } else {
                result.push(product / num);
            }
        }
        return result;
    }
}
