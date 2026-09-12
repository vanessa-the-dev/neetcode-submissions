class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map();
        let maxCnt = 0;
        let l = 0;
        let res = 0

        for (let r = 0; r < s.length; r++) {
            map.set(s[r], (map.get(s[r]) || 0) + 1);
            maxCnt = Math.max(maxCnt, map.get(s[r]));

            while (r - l + 1 - maxCnt > k) {
                map.set(s[l], map.get(s[l]) - 1);
                l++;
            }
            
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}