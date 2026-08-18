class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * 
     * what happens if...
     * empty array
     * duplicate numbers
     * very large numbers
     * 
     * can _ exist?
     * negative numbers
     * zero target
     * 
     * what is the minimum size of the array?
     * is this sorted?
     */
    twoSum(nums, target) {
        if (!Number.isSafeInteger(target)) {
            throw new RangeError('Target must be a safe integer.');
        }

        for (const num of nums) {
            if (!Number.isSafeInteger(num)) {
                throw new RangeError(`Element ${num} exceeds safe precision limits.`);
            }
        }

        if (nums.length === 0) {
            return [];
        }

        const numToIndex = new Map();

        for (let [key, val] of nums.entries()) {
            const result = target - val;

            if (numToIndex.has(result)) {
                return [numToIndex.get(result), key];
            } 

            numToIndex.set(val, key);
        }

        return [];
    }
}
