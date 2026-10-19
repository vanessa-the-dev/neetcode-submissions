
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.toLowerCase();

        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (l < r && !this.isAlphaNumerical(str[l])) {
                l++;
            }
            while (l < r && !this.isAlphaNumerical(str[r])) {
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

    isAlphaNumerical(c) {
        return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
    }
}
