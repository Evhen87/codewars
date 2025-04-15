//Task
/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/
function findShort(s) {
   let arr = s.split(" ");
   let shortestWord = arr.reduce((a, c) => (c.length < a.length ? a = c : a, a), arr[0]);
   return shortestWord.length
}
//Best practices
/*function findShort(s){
  return s.split(' ').sort((a, b) => a.length - b.length)[0].length || 0;
}*/