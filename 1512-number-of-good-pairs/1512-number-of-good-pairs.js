/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
var a=0;
    for(var i=0;i<nums.length;i++){
          for(var j=i+1;j<nums.length;j++){
            if(nums[i] === nums[j]){
               a++; 
            }
          }
    }
    return a;
};