//Task
/*Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59*/
//Solution
function past(h, m, s) {
   //#Happy Coding! ^_^
   return s * 1000 + m * 60000 + h * 3600000
}
console.log(past(0, 0, 5))
/*Solution2
let past = (h, m, s) => s * 1000 + m * 60000 + h * 3600000*/
//Best practice
/*const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);*/