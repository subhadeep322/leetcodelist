/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length;
    let res = new Array(n);
    let st = [];
    for(let i = n-2;i>=0;i--){
        st.push(nums[i]);
    }
    for(let i = n-1;i>=0;i--){
        while(st.length > 0 && [st[st.length-1]] <= nums[i]){
            st.pop();
        }
        if(st.length === 0){
            res[i] = -1;
        }else{
            res[i] = st[st.length-1];
        }
        st.push(nums[i])
    }
    return res;
};