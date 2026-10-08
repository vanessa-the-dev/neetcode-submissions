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
        const codeOfA = 'a'.charCodeAt(0);

        for (let i = 0; i < s1.length; i++) {
            a1[s1.charCodeAt(i) - codeOfA]++;
            a2[s2.charCodeAt(i) - codeOfA]++;
        }

        let matching = 0;
        for (let i = 0; i < 26; i++) {
            if (a1[i] === a2[i]) {
                matching++;
            }
        }

        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            if (matching === 26) {
                return true;
            }

            let index = s2.charCodeAt(r) - codeOfA;
            a2[index]++;

            if (a1[index] === a2[index]) {
                matching++;
            } else if (a1[index] + 1 === a2[index]) {
                matching--;
            }

            index = s2.charCodeAt(l) - codeOfA;
            a2[index]--;

            if (a1[index] === a2[index]) {
                matching++;
            } else if (a1[index] - 1 === a2[index]) {
                matching--;
            }
            l++
        }

        return matching === 26;
    }
}
