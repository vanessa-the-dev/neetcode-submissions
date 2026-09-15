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
        const charCodeA = 'a'.charCodeAt(0);

        for (let i = 0; i < s1.length; i++) {
            a1[s1.charCodeAt(i) - charCodeA]++;
            a2[s2.charCodeAt(i) - charCodeA]++;
        }

        let matches = 0;
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

            let rightIndex = s2.charCodeAt(r) - charCodeA;
            a2[rightIndex]++;
            
            if (a1[rightIndex] === a2[rightIndex]) {
                matches++;
            } else if (a1[rightIndex] + 1 === a2[rightIndex]){
                matches--;
            }

            let leftIndex = s2.charCodeAt(l) - charCodeA;
            a2[leftIndex]--;

            if (a1[leftIndex] === a2[leftIndex]) {
                matches++;
            } else if (a1[leftIndex] - 1 === a2[leftIndex]) {
                matches--;
            }

            l++;
        }

        return matches === 26;
    }
}