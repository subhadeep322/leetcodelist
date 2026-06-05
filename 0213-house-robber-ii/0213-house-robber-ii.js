/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];

    const robLinear = (start, end) => {
        let rob1 = 0; 
        let rob2 = 0; 

        for (let i = start; i <= end; i++) {
            let temp = Math.max(rob1 + nums[i], rob2);
            rob1 = rob2;
            rob2 = temp;
        }

        return rob2;
    };

    const max1 = robLinear(0, nums.length - 2);

    const max2 = robLinear(1, nums.length - 1);

    return Math.max(max1, max2);
};