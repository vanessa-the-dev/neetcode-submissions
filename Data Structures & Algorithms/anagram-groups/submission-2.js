class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (!strs.length) {
            return [];
        }

        const map = new Map();

        for (let str of strs) {
            const code = new Array(26).fill(0);

            str = str.toLowerCase();

            for (const char of str) {
                code[char.charCodeAt(0) - 97] += 1;
            }

            const codeStr = code.join('.');

            if (!map.has(codeStr)) {
                map.set(codeStr, []);
            }

            map.get(codeStr).push(str);
        }
        return [...map.values()];
    }
}
