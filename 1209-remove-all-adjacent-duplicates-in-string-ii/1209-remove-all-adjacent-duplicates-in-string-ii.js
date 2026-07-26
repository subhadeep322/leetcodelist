/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let stack = [];
    let n = s.length;
    
    for(let i = 0; i < n; i++) {
        let c = s[i];
        
        if(stack.length === 0) {
            stack.push({ char: c, count: 1 });
            continue;
        }
        
        if(stack[stack.length - 1].char !== c) {
            stack.push({ char: c, count: 1 });
            continue;
        }
        
        if(stack[stack.length - 1].count < k - 1) {
            let p = stack.pop();
            stack.push({ char: c, count: p.count + 1 });
        } else {
            stack.pop();
        }
    }
    
    let res = "";
    while (stack.length > 0) {
        let p = stack.pop();
        let count = p.count;
        
        while (count > 0) {
            res += p.char;
            count--;
        }
    }

    return res.split('').reverse().join('');
};