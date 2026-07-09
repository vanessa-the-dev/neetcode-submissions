class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longestSequence = 0;

        for (let num of nums) {
            if (! numSet.has(num-1)){
                let length = 0,
                    current = num;
                while (numSet.has(current)) {
                    length++;
                    current++;
                }
                longestSequence = Math.max(longestSequence, length);
                length = 0;
            };
        }
        return longestSequence;
    }
}
