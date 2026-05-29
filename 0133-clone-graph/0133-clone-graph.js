/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;
    
    const visited = new Map();
    
    function dfs(currNode) {
        if (visited.has(currNode)) {
            return visited.get(currNode);
        }
        
        const clone = new Node(currNode.val);
        
        visited.set(currNode, clone);
        
        for (const neighbor of currNode.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }
        
        return clone;
    }
        return dfs(node);
};