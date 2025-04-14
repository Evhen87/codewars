//Task
/*Write function RemoveExclamationMarks which removes all exclamation marks from a given string.*/
/*function removeExclamationMarks(s) {
   const regExp = /\!/g;
   return s.replace(regExp, '');
 }*/
let removeExclamationMarks = s => s.replace(/!/g, '')
//Best practices
/*function removeExclamationMarks(s) {
   return s.replaceAll('!', '');
 }*/