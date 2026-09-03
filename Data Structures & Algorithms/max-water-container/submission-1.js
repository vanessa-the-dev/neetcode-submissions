class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let maxArea = 0;

        while (l < r) {
            const width = r - l;
            const height = Math.min(heights[l], heights[r]);

            maxArea = Math.max(maxArea, width * height);

            if (heights[l] > heights[r]) {
                r--;
            } else {
                l++;
            }
        }

        return maxArea;
    }
}
