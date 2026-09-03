class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
     longestConsecutive(nums) {
        if (nums.length === 0) {
            return 0;
        }

        const newNums = [];
        for (const num of nums) {
            newNums.push(BigInt(num));
        }

        const set = new Set(newNums);
        let maxCnt = 0;

        for(let num of set) {
            if (! set.has(num - 1n)) {
                let count = 1;
                while (set.has(num + 1n)) {
                    count++;
                    num++;
                }
                maxCnt = Math.max(maxCnt, count);
            }
        }
        return maxCnt;
    }
}
