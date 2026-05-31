/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adjList = Array.from({ length: numCourses }, () => []);
    
    for (let [course, prereq] of prerequisites) {
        adjList[course].push(prereq);
    }
    
    const states = new Array(numCourses).fill(0);
    
    const hasCycle = (course) => {
        if (states[course] === 1) return true;
        if (states[course] === 2) return false;
        
        states[course] = 1; 
        
        for (let prereq of adjList[course]) {
            if (hasCycle(prereq)) return true;
        }
        
        states[course] = 2; 
        return false;
    };
    
    for (let i = 0; i < numCourses; i++) {
        if (hasCycle(i)) {
            return false; 
        }
    }
    
    return true; 
};