class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = new Map([
            [')', '('],
            [']', '['],
            ['}', '{'],
        ]);

        const list = [];

        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i])) {
                if (map.get(s[i]) === list[list.length - 1]) {
                    list.pop()
                } else {
                    return false;
                }
            } else {
                list.push(s[i])
            }
        }

        return list.length === 0;
    }
}
