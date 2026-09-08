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
                let count = 1;
                let curVal = num;
                while (set.has(curVal + 1)) {
                    count++;
                    curVal++;
                }
                maxCnt = Math.max(maxCnt, count);
            }
        }

        return maxCnt;
    }
}
