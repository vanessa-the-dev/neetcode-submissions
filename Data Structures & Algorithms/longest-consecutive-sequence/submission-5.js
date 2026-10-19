class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxCnt = 0;

        for (const num of nums) {
            if (!set.has(num - 1)) {
                let counter = 1;
                let index = num;
                while (set.has(index + 1)) {
                    counter++;
                    index++;
                }
                maxCnt = Math.max(maxCnt, counter);
            }
        }

        return maxCnt;
    }
}
