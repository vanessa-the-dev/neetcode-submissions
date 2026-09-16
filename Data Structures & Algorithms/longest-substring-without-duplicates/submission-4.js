class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (!s.length) {
            return 0;
        }

        const set = new Set();
        let maxCnt = 0;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            while (set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }
            
            set.add(s[r]);

            maxCnt = Math.max(maxCnt, r - l + 1)
        }

        return maxCnt;
    }
}
