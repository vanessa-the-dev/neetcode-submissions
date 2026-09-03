class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let max = 0;

        for (const num of set) {
            if (!set.has(num - 1)) {
                let counter = 1;
                let curVal = num;

                while (set.has(curVal + 1)) {
                    counter++;
                    curVal++;
                }

                max = Math.max(max, counter);
            }
        }
        return max;
    }
}
