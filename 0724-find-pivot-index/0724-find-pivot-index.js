/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftsum=0;
    let rightsum=nums.reduce((a,b)=> a+b);

    for(let i=0;i<nums.length;i++){
        rightsum -= nums[i];
        if(leftsum===rightsum){
            return i;
        }
        leftsum +=nums[i];
    }
    return -1;
};