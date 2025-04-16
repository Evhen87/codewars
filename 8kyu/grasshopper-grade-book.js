//Task
/*Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.*/
//Solution
function getGrade(s1, s2, s3) {
   // Code here
   let sum = s1 + s2 + s3;
   let score;
   if (0 <= (sum / 3) && (sum / 3) < 60) {
      score = 'F'
   } else if (60 <= (sum / 3) && (sum / 3) < 70) {
      score = 'D'
   } else if (70 <= (sum / 3) && (sum / 3) < 80) {
      score = 'C'
   } else if (80 <= (sum / 3) && (sum / 3) < 90) {
      score = 'B'
   } else if (90 <= (sum / 3) && (sum / 3) <= 100) {
      score = 'A'
   }
   console.log(sum);
   console.log(score);
   return score;
}
//Best Practices
/*function getGrade (s1, s2, s3) {
  avg = (s1+s2+s3)/3;
  if (avg < 60)  return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}*/
/*function getGrade (s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}*/