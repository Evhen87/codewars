//Task
/*Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.*/
//Solution
function boolToWord(bool) {
   if (bool === true) {
      return "Yes"
   } else {
      return "No"
   }
}
//Best practices
//let boolToWord = bool => bool ? 'Yes' : 'No';