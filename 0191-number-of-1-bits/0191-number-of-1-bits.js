/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
        return n.toString(2).replace(/0/g, '').length;

};