class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const list = [];
        const map = new Map(
            [[')', '('], [']', '['], ['}', '{']]
        );

        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i])) {
                if (list[list.length - 1] === map.get(s[i])) {
                    list.pop();
                } else {
                    return false;
                }
            } else {
                list.push(s[i]);
            }
        }

        return list.length === 0;
    }
}

