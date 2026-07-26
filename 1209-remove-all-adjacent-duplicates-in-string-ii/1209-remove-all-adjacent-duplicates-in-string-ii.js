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
        
        // 1. If stack is empty
        if(stack.length === 0) {
            stack.push({ char: c, count: 1 });
            continue;
        }
        
        // 2. If the top character does NOT match the current character
        if(stack[stack.length - 1].char !== c) {
            stack.push({ char: c, count: 1 });
            continue;
        }
        
        // 3. If the top character MATCHES the current character
        if(stack[stack.length - 1].count < k - 1) {
            // Count is less than k-1, so we pop, add 1, and push back
            let p = stack.pop();
            stack.push({ char: c, count: p.count + 1 });
        } else {
            // Count has reached k-1, adding this one makes it k.
            // So we delete them by just popping!
            stack.pop();
        }
    }
    
    // 4. Build the result string from the stack
    let res = "";
    while (stack.length > 0) {
        let p = stack.pop();
        let count = p.count;
        
        while (count > 0) {
            res += p.char;
            count--;
        }
    }

    // 5. Reverse the string because stack pops bottom-up (LIFO)
    return res.split('').reverse().join('');
};