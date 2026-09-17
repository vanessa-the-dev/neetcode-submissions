class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let newString = '';
        for (let str of strs) {
            newString += str.length + '#' + str;
        }
        return newString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const res = [];

        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let size = str.substring(i, j);
            i = j + 1;
            j = i + parseInt(size);
            console.log(i)
            console.log(j)
            console.log(size)
            res.push(str.substring(i, j));
            i = j;
        }

        return res;
    }
}
