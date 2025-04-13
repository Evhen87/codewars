//Task
/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/
//Solution
function getCount(str) {
   let getStr = str.replaceAll(" ", '');
   console.log(getStr);
   let get = getStr.split('');
   console.log(get);
   let count = 0;
   for (let i = 0; i < get.length; i++) {
      if ((get[i] === 'a') || (get[i] === 'e') || (get[i] === 'i') || (get[i] === 'o') || (get[i] === 'u')) {
         count++;
      }
   };
   return count;
}
//Best practice
/*function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}*/