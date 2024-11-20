/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
   var ans=[];
   let kelvin=celsius+273.15;
   let Fahrenheit=(celsius*1.80)+32.0;
   ans.push(kelvin);
   ans.push(Fahrenheit);
   return ans;

};