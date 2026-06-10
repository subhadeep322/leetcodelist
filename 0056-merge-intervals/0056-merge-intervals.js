/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const n = intervals.length;
  if(n===0){
    return [];
  }
    intervals.sort((a,b) => a[0]-b[0]);
    let start1 = intervals[0][0];
    let end1 = intervals[0][1];
    let res =[]
    for(let i =1;i<n;i++){
        let start2 = intervals[i][0];
        let end2 = intervals[i][1];

        if(end1>=start2){
            end1=Math.max(end1,end2);
        }
        else{
            res.push([start1,end1]);

            start1=start2;
            end1=end2;
        }

    }

    res.push([start1,end1]);

    return res;

};