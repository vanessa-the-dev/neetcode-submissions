class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        const a1 = new Array(26).fill(0);
        const a2 = new Array(26).fill(0);
        const codeA = 'a'.charCodeAt(0);

        let matches = 0;
        let l = 0;

        for (let i = 0; i < s1.length; i++) {
            a1[s1[i].charCodeAt(0) - codeA]++;
            a2[s2[i].charCodeAt(0) - codeA]++;
        }

        for (let i = 0; i < 26; i++) {
            if (a1[i] === a2[i]) {
                matches++;
            }
        }

        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) {
                return true;
            }

            let rIndex = s2[r].charCodeAt(0) - codeA;
            a2[rIndex]++;

            if (a1[rIndex] === a2[rIndex]) {
                matches++;
            } else if (a1[rIndex] + 1 === a2[rIndex]) {
                matches--;
            }

            let lIndex = s2[l].charCodeAt(0) - codeA;
            a2[lIndex]--;

            if (a1[lIndex] === a2[lIndex]) {
                matches++;
            } else if (a1[lIndex] - 1 === a2[lIndex]) {
                matches--;
            }

            l++
        }
        return matches === 26;
    }
}

