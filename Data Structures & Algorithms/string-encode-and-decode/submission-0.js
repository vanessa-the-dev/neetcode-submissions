class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const newString = [];
        for (const str of strs) {
            newString.push(String(str.length), '#', str)
        }
        return newString.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const newArray = [];
        let i = 0

        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;
            newArray.push(str.substring(i,j));
            i = j;
        }
        
        return newArray;
    }
}