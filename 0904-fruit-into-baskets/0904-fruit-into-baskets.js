/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let n = fruits.length;
    let low = 0;
    let res = 0;
    let f = new Map ();
    for(let high =0;high<n;high++){
        let rc = fruits[high];
        f.set(rc,(f.get(rc)|| 0)+1);
        while(f.size > 2){
            let lc = fruits[low];
            f.set(lc,f.get(lc)-1);
            if(f.get(lc) ===0){

                f.delete(lc);
            }

            low++;;
        }
        res=Math.max(res,high -low+1)
    }
    return res;

};