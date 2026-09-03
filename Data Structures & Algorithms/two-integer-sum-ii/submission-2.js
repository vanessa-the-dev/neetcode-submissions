class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let r = numbers.length - 1,
            l = 0;
        
        while (l < r) {
            let sum = numbers[l] + numbers[r];

            if (sum === target) {
                return [l + 1, r + 1];
            } else if (sum < target) {
                l++;
            } else {
                r--;
            }
        }
        return [];
    }
}