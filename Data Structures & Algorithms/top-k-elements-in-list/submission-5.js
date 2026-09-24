class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        const list = Array.from({length: nums.length + 1},() => []);

        for (const [key, value] of map.entries()) {
            list[value].push(key);
        }

        const res = [];
        for (let i = list.length - 1; i > 0; i--) {
            if (list[i].length > 0) {
                for (const num of list[i]) {
                    if (res.length === k) {
                        return res;
                    }
                    res.push(num);
                }
            }
        }
        return res;
    }
}



