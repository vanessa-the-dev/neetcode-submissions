class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const list = new Array(nums.length).fill(1);

        for (let i = 1; i < nums.length; i++) {
            list[i] = list[i - 1] * nums[i - 1];
        }

        let postfix = 1;
        for (let j = nums.length - 1; j >= 0; j--) {
            list[j] *= postfix;
            postfix *= nums[j];
        }

        return list;
    }
}

