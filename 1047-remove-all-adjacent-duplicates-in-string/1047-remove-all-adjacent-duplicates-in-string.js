/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    for(var i=1; i<s.length; i++){
        if(s[i] === s[i-1]){
            s = s.slice(0, i-1) + s.slice(i+1);
            i-=2;
        }
    }
    return s;
};