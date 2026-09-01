class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (nums.length === 0 || k <= 0) {
            return []
        }

        const map = new Map();

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        const list = Array.from({ length: nums.length + 1 }, () => []);

        for (let [key, value] of map.entries()) {
            list[value].push(key);
        }

        let finalList = [];
        for (let i = nums.length;  i >= 0; i--) {
            if (list[i].length === 0) continue;

            for (const num of list[i]) {
                finalList.push(num);
                if (finalList.length === k) return finalList;
            }
        }

        return finalList;
    }
}
