class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let newStr = '';

        for (const str of strs) {
            newStr += str.length + '#' + str;
        }

        return newStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const list = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== '#') {
                j++;
            }

            let size = str.substring(i, j);

            i = j + 1;
            j = i + parseInt(size);
            list.push(str.substring(i, j));
            
            i = j;
        }

        return list;
    }
}
