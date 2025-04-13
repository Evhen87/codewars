//Task
/*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1
2
+
2
2
+
2
2
=
9
1 
2
 +2 
2
 +2 
2
 =9.*/
//Solution
function squareSum(numbers) {
   let elementSquareSum = 0;
   for (let i = 0; i < numbers.length; i++) {
      const elementSquare = Math.pow(numbers[i], 2);
      elementSquareSum += elementSquare;
   }
   return elementSquareSum;
}