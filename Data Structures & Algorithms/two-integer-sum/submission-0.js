class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (const [key, num] of nums.entries()) {
            const value = target - num;

            if (map.has(value)) {
                return [map.get(value), key];
            }

            map.set(num, key);
        }
    }
}