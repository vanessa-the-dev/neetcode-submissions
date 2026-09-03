class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if ([0, 1].includes(s.length)) {
            return true;
        }
        
        let l = 0;
        let r = s.length - 1;

        const str = s.toLowerCase();

        while (l < r) {
            while (l < r && !this.isAlphanumeric(str[l])) {
                l++;
            }

            while (r > l && !this.isAlphanumeric(str[r])) { 
                r--;
            }

            if (str[l] !== str[r]) {
                return false;
            }

            l++;
            r--;
        }
        return true;
    }

    isAlphanumeric(c) {
        return (
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
}