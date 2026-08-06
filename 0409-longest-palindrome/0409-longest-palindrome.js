/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let f = new Map();
    
    for (let i = 0; i < s.length; i++) {
        f.set(s[i], (f.get(s[i]) || 0) + 1);
    }
    
    let res = 0;
    let hasOdd = false;
    
    for (let [char, count] of f) {
        if (count % 2 === 0) {
            res += count;
        } else {
            res += count - 1;
            hasOdd = true;
        }
    }
    
        return hasOdd ? res + 1 : res;
};
