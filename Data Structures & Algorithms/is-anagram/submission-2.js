class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const map = new Map();
        
        for (const char of s) {
            map.set(char, (map.get(char) || 0) + 1);
        }

        for (const char of t) {
            const key = map.get(char) || 0;

            if (key === 0) {
                return false;
            } 

            map.set(char, key - 1);
        }

        return true;
     }
}
