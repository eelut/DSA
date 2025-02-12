/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let score=[];
    for(let op of operations){
        let scoreLength=score.length;
        if(op==='+' && scoreLength >=2 ){
            score.push(score[scoreLength-2] +score[scoreLength-1]);
        }else if(op==='D' && scoreLength>=1){
            score.push(score[scoreLength-1]*2);
        }else if(op==='C' && scoreLength>=1){
            score.pop();
        }else {
            score.push(parseInt(op,10));
        }
    }
    return score.reduce((acc,curr)=> acc + curr ,0);
};