/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
  let ans=[];
  let Kelvin = celsius + 273.15;
  let Fahrenheit = celsius * 1.80 + 32.00;
  ans.push(Kelvin);
  ans.push(Fahrenheit);

return ans;
};