class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const res = [];

        if (!nums.length || !k) {
            return res;
        }

        const map = new Map();
        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        const bucket = Array.from({length: nums.length + 1}, () => []);
        for (const [key, value] of map.entries()) {
            bucket[value].push(key);
        }

        for (let i = nums.length; i > 0; i--) {
            if (!bucket[i]) {
                continue;
            }

            for (const num of bucket[i]) {
                if (res.length === k) {
                    return res;
                }
                res.push(num);
            }
        }
        return res;
    }
}
