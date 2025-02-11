/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
   let sum=0;
   let N= arr.length;
   for(let i=0;i<arr.length;i++){
    let total= (N-i)*(i+1);
    sum += (Math.ceil(total/2)) *arr[i];
   } 
   return sum;
};