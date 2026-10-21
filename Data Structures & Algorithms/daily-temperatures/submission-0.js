class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const temp = [];

        for (let i = 0; i < temperatures.length; i++) {
            while (temp.length > 0 && temp.at(-1)[0] < temperatures[i]) {
                const [value, index] = temp.pop();
                result[index] = i - index;
            }

            temp.push([temperatures[i], i]);
        }

        return result;
    }
}