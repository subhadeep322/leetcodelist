/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length <2) return s;

    let start=0;
    let maxlen = 1;

    for(let i=0;i <s.length;i++){
        let left =i;
        let right =i;
        while(left>=0&&right<s.length&&s[left]===s[right]){
            left--;
            right++;
        }
        let oddlen = right -left -1;
        if(oddlen > maxlen){
            maxlen = oddlen;
            start =left+1;
        }
        left =i;
        right =i+1;
        while(left>=0&&right<s.length&&s[left]===s[right]){
            left--;
            right++;
        }
        let evenlen = right -left -1;
        if(evenlen>maxlen){
            maxlen = evenlen
            start = left+1;
        }
    }
        return s.substring(start, start + maxlen);
};