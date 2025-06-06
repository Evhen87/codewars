//Task
/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.*/
function getSum(a, b) {
   let min = Math.min(a, b),
      max = Math.max(a, b);
   return (max - min + 1) * (max + min) / 2
   //Good luck!
}
// Best practices
/*function GetSum(a,b)
{
 return (Math.abs(a - b) + 1) * (a+b) / 2;
}*/