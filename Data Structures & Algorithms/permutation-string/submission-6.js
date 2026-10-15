class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false
        }

        const a1 = new Array(26).fill(0);
        const a2 = new Array(26).fill(0);
        const codeA = 'a'.charCodeAt(0);

        let matches = 0;

        for (let i = 0; i < s1.length; i++) {
            a1[s1[i].charCodeAt(0) - codeA]++;
            a2[s2[i].charCodeAt(0) - codeA]++;
        }

        for (let i = 0; i < 26; i++) {
            if (a1[i] === a2[i]) {
                matches++;
            }
        }

        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) {
                return true;
            }

            let index = s2[r].charCodeAt(0) - codeA;
            a2[index]++;

            if (a1[index] === a2[index]) {
                matches++;
            } else if (a1[index] + 1 === a2[index]) {
                matches--;
            }

            index = s2[l].charCodeAt(0) - codeA;
            a2[index]--;

            if (a1[index] === a2[index]) {
                matches++;
            } else if (a1[index] - 1 === a2[index]) {
                matches--;
            }
            l++;
        }
        return matches === 26;
    }
}
