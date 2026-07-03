class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const map = new Map();

        for (const char of s) {
            map.set(char, (map.get(char) || 0) + 1);
        }

        for (const char of t) {
            const count = map.get(char) || 0;
            if (count === 0) return false;
            map.set(char, count - 1);
        }

        return true;
    }
}
