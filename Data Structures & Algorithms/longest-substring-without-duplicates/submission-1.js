class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let windowStart = 0,
            maxLength = 0;

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
