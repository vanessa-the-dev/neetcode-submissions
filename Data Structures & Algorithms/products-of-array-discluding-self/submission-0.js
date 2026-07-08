class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeroCount = 0,
            product = 1;

        for (const num of nums) {
            if (num === 0) {
                zeroCount++;
            } else {
                product *= num;
            }
        }

        if (zeroCount > 1) return Array(nums.length).fill(0);
        const newList = [];

        for (const num of nums) {
            if (zeroCount > 0) {
                num === 0
                    ? newList.push(product)
                    : newList.push(0);
            } else {
                newList.push(product / num);
            }
        }

        return newList;
    }
}