/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for(let i =0 ;i<s.length;i++){
        let char = s[i];

        if(char === '(' || char === '{' || char === '['){
            stack.push(char);
        }
        else if(char === ')' || char === '}' || char === ']'){
            if(stack.length === 0){
                return false;
            }
            let top = stack[stack.length-1];
            if(char === ')' && top === '('){
                stack.pop();
            }
            else if(char === '}' && top === '{'){
                stack.pop()
            }
           else if(char === ']' && top === '['){
                stack.pop();
            }
            else{
                return false;
            }
        }
    }

    if(stack.length === 0){
        return true;
    }
    else{
        return false;
    }
}