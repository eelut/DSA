/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    let left=0;
    let right =s.length - 1;
    let strings =s.split('');
    while(left < right){
        if(strings[left]!==strings[right]){
            if(strings[left]<strings[right]){
                strings[right]=strings[left];
            } else{
                strings[left]=strings[right];
            }
        }
        left ++;
        right --;
    }
    return strings.join('');
};