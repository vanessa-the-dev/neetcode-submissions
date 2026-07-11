class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let windowStart = 0;
        let maxLength = 0;
        const set = new Set();

        for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
            while (set.has(s[windowEnd])) {
                set.delete(s[windowStart]);
                windowStart++;
            }

            set.add(s[windowEnd]);
            maxLength = Math.max(maxLength, set.size);
        }

        return maxLength;
    }
}
