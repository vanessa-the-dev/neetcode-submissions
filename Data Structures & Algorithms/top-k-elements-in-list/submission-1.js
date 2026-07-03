class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyList = Array(nums.length + 1).fill().map(() => []);
        const map = new Map();
        const results = [];
        
        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        for (const [key, value] of map.entries()) {
            frequencyList[value].push(key);
        }

        for (let i = frequencyList.length - 1; i > 0 && results.length < k; i--) {
            if (frequencyList[i].length > 0) {
                for (const frequentNum of frequencyList[i]) {
                    results.push(frequentNum);
                }
            }
        }

        return results;
    }
}