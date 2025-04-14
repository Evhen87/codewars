//Task
/*Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24*/
//Solution
function grow(x) {
   x.reduce(function (currentSum, currentNumber) {
      return currentSum + currentNumber
   }, 0)
}
//best practices
//const grow=x=> x.reduce((a,b) => a*b);