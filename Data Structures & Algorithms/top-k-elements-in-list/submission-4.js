class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (!nums.length) {
            return [];
        }

        const map = new Map();
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        const list = Array.from({length: nums.length + 1}, () => []);
        for (let [key, value] of map.entries()) {
            list[value].push(key);
        }

        const res = [];
        for (let i = nums.length; i > 0; i--) {
            if (list[i].length) {
                for (let num of list[i]) {
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
