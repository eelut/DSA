/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let maxScore=0;
    for(let l of s){
        if(l=='1') maxScore++;
    }
    let score=0;
    for(let i=0;i<s.length-1;i++){
       if (s[i] =='0') maxScore++;
       else maxScore--;
       score=Math.max(score,maxScore);
    }
    return score;
};