class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = new Map([
            [']', '['],
            ['}', '{'],
            [')', '('],
        ]);
        const stack = [];
        for (const char of s) {
            if (map.has(char)) {
                if (map.get(char) !== stack.at(-1)) {
                    return false;
                } else {
                    stack.pop();
                }
            } else {
                stack.push(char);
            }
        }
        return stack.length === 0;
    }
}
