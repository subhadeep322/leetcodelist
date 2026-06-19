/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const n = height.length;
    let ans = 0;
    let l = 0;
    let r = n-1;
    let leftMax = 0;
    let rightMax =0;

    while(l<r){
    leftMax=Math.max(leftMax,height[l]);
    rightMax=Math.max(rightMax,height[r]);

    if(leftMax<rightMax){
        ans+=leftMax-height[l];
        l++
    }
        else{
            ans+=rightMax-height[r];
            r--
        }
    }
    return ans;
    
};