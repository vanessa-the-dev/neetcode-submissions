class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 0) {
            return []
        }

        const anagramMap = new Map();

        for (const str of strs) {
            const list = new Array(26).fill(0);

            for (const char of str) {
                list[char.charCodeAt(0) - 97] += 1;
            }

            const key = list.join('.');

            if (! anagramMap.has(key)) {
                anagramMap.set(key, []);
            }

            anagramMap.get(key).push(str);
        }

        return [...anagramMap.values()];
    }
}
