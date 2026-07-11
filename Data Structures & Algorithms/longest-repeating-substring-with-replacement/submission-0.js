class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map();
        let windowStart = 0,
            maxLength = 0,
            maxFreq = 0;

        for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
            let lChar = s[windowEnd];
            map.set(lChar, (map.get(lChar) || 0) + 1);
            maxFreq = Math.max(maxFreq, map.get(lChar));

            while ((windowEnd - windowStart + 1) - maxFreq > k) {
                let rChar = s[windowStart];
                map.set(rChar, map.get(rChar) - 1);
                windowStart++;
            }
            maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
        }
        return maxLength;
    }
}
