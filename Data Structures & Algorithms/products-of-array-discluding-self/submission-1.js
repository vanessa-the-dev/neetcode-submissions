class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const list = new Array(n).fill(1);

        for (let i = 1; i < n; i++) {
            list[i] = list[i-1] * nums[i-1];
        }

        let postfix = 1;
        for (let i = n - 1; i >= 0; i--) {
            list[i] *= postfix;
            postfix *= nums[i];
        }
        return list;
    }
}