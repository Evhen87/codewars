//Task
/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.*/
//Solution
function sumMix(x) {
   return x.map(n => parseInt(n)).reduce((total, currentValue) => {
      return total + currentValue
   }, 0)
}