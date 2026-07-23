/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
const n = temperatures.length;
let res = new Array(n);
let stack = [];
res[n-1] = 0;
stack.push(n-1);
for(let i = n-2;i>=0;i--){
    while(stack.length > 0 && temperatures[stack[stack.length-1]] <= temperatures[i] ){
        stack.pop();
    }
    if(stack.length > 0){
        res[i] = stack[stack.length-1] - i;
    }else{
        res[i] = 0;
    }
        stack.push(i);
}
return res;
};