class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let [key, val] of nums.entries()) {
            const total = target - val;

            if (map.has(total)) {
                return [map.get(total), key];
            } else {
                map.set(val, key);
            }
        }
        return [];
    }
}
