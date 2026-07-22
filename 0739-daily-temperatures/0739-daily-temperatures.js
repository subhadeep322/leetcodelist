/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const n = temperatures.length;
  let ans = new Array(n).fill(0);
  let stack = [];
  for(let i=n-1;i>=0;i--){
    while(stack.length > 0 && temperatures[stack[stack.length-1]] <= temperatures[i]){
        stack.pop();
    }
    if(stack.length > 0){
        let nextwarmday = stack[stack.length -1];
        ans[i]  = nextwarmday - i;
    }
    stack.push(i)
  }
  return ans;
};