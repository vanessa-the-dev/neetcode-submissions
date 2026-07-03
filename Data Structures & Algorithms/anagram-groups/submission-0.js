class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const str of strs) {
            const alphabetOrder = new Array(26).fill(0);

            for (const char of str) {
                alphabetOrder[char.charCodeAt(0) - 97]++;
            }
            
            const key = alphabetOrder.join('#');

            if (! map.has(key)) {
                map.set(key, []);
            }

            map.get(key).push(str);
        }

        return [...map.values()];
    }
}