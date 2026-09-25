class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxCnt = 0;

        for (let i = 0; i < nums.length; i++) {
            if (set.has(nums[i] - 1)) {
                continue;
            }

            let counter = 1;
            while (set.has(nums[i] + counter)) {
                counter++;
            }

            maxCnt = Math.max(maxCnt, counter);
        }
        return maxCnt;
    }
}

