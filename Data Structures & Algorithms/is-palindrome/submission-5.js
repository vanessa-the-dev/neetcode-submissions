class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();

        let l = 0,
            r = s.length;

        while (l < r) {
            while (l < r && !this.isAlphaNum(s[l])) {
                l++;
            }
            while (r > l && !this.isAlphaNum(s[r])) {
                r--;
            }

            if (s[l] !== s[r]) {
                return false;
            }

            l++;
            r--;
        }
        return true;
    }

    isAlphaNum(c) {
        return (
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        )
    }
}
