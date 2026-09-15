class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        if (!heights.length) {
            return 0;
        }

        let maxCnt = 0;
        let r = heights.length - 1;
        let l = 0;

        while (l < r) {
            let height = Math.min(heights[l], heights[r]);
            let width = r - l;
            let area = height * width;

            maxCnt = Math.max(maxCnt, area);

            if (heights[l] > heights[r]) {
                r--;
            } else {
                l++;
            }
        }
        return maxCnt;
    }
}
