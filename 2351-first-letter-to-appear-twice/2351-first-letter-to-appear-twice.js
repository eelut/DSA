/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let count ={};
    for (let i of s){
        if(!count[i]){
            count[i]=1;
        }else{
            return i;
        }
    }
};