class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (!nums.length || nums.length === 1) {
            return [];
        }

        const map = new Map();

        for (const [key, value] of nums.entries()) {
            let missingVal = target - value;

            if (map.has(missingVal)) {
                return [map.get(missingVal), key];
            }

            map.set(value, key);
        }

        return []
    }
}
