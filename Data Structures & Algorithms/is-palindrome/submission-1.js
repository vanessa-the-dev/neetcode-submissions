class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0,
            r = s.length - 1;

        while (l < r) {
            if (! this.isAlphaNum(s[l])) {
                l++;
                continue;
            }
            if (! this.isAlphaNum(s[r])) {
                r--;
                continue;
            }

            console.log(s[l]);
            console.log(s[r]);
            console.log('-----');
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }

        return true;

    }

    isAlphaNum(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z' ||
            (c >= '0' && c <= '9'))
        )
    }
}
