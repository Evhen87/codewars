//Task
/*Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]*/
//Solution
const reverseSeq = n => {
   let arr = [];
   let x = n
   for (let i = 0; i < x; i++) {
      arr.push(n);
      n = n - 1
   }
   return arr;
};
//Best practices
/*const reverseSeq = n => {
   let arr = [];
     for (let i=n; i>0; i--) {
       arr.push(i);
       } return arr;
   };*/