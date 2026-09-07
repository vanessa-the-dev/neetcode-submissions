class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (!strs.length) {
            return ""
        }

        let string = '';
        for (const str of strs) {
            string += str.length + '#' + str;
        }
        return string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];

        if (!str.length) {
            return res;
        }

        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }

            let count = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + count;

            res.push(str.substring(i, j));
            i = j;
        }

        return res;
    }
}
