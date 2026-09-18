/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
 if(nums.length === 0) return 0;
 let t = 0;
 let s = 1;
let res = 1;
while(s<nums.length){
    if(nums[s] === nums[s-1]){
        s++;
        continue;
    }
    nums[t+1] = nums[s];
    t++;
    s++;
    res++;
}
return res;
};