class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);

        const list = [];

        for (let l = 0; l < nums.length; l++) {
            if (nums[l] > 0) { break; }
            if (l > 0 && nums[l] === nums[l-1]) { continue; }

            let m = l + 1;
            let r = nums.length - 1;
            
            while (m < r) {
                let sum = nums[l] + nums[m] + nums[r];

                if (sum === 0) {
                    list.push([nums[l], nums[m], nums[r]]);
                    m++;
                    r--;
                    while (m < r && nums[m] === nums[m - 1]) {
                        m++;
                    }
                }
                else if (sum < 0) {
                    m++;
                } else{
                    r--;
                }
            }
        }

        return list;
    }
}