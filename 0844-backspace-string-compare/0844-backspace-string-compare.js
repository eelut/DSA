/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let l = [];
    let f = [];
    for(i=0; i < s.length; i++){
        if(s[i]=='#'){
            l.pop();
        }else{
         l.push(s[i]);
        }
    }
    for(i=0; i < t.length; i++){
        if(t[i]=="#"){
            f.pop();
        }else{
        f.push(t[i]);
        }
    }
   
    if (f.length !== l.length) return false;
    for (let i = 0; i < f.length; i++) {
        if (f[i] !== l[i]) return false;
    }
    return true;
    
};
    