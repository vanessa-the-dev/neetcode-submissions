class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const temp = [];
        const map = new Map([
            [')', '('],
            [']', '['],
            ['}', '{'],
        ]);

        for (let c of s) {
            if (map.has(c)) {
                if (map.get(c) === temp.at(-1)) {
                    temp.pop();
                } else {
                    return false;
                }
            } else {
                temp.push(c);
            }
        }

        return temp.length === 0;
    }
}