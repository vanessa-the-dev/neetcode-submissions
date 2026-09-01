class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeroCnt = 0;
        let maxProd = 1;
        let res = [];

        for (const num of nums) {
            if (num === 0) {
                zeroCnt++;
                continue;
            }
            maxProd *= num;
        }

        let zeroList = new Array(nums.length).fill(0);

        if (zeroCnt > 1) {
            return zeroList;
        }

        if (zeroCnt === 1) {
            zeroList[nums.indexOf(0)] = maxProd;
            return zeroList;
        }

        for (const num of nums) {
            res.push(maxProd / num);
        }

        return res;
    }
}