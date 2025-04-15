//Task
/*You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"*/
//Solution
function getMiddle(s) {
   //Code goes here!
   console.log(s.length)
   console.log((s.length - 2) / 2)
   if (s.length === 1 || s.length === 2) {
      return s
   } else if (s.length % 2 == 0) {
      return s.slice((s.length - 2) / 2, -(s.length - 2) / 2)
   } else {
      return s.slice(Math.ceil((s.length - 2) / 2), -Math.ceil((s.length - 2) / 2))
   }
}
//Best practices
/*function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}*/