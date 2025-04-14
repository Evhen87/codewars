//Task
/*Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!*/
//Solution
function doubleChar(str) {
   // Your code here
   let char = str.split("");
   let strDouble = [];
   for (let i = 0; i < char.length; i++) {
      strDouble += char[i] + char[i];
   };
   return strDouble
}
//Best practices
//const doubleChar = str => str.split('').map(v=>v+v).join('')