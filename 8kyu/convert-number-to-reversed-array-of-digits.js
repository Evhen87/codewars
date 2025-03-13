function digitize(n) {
   n = String(n).split('').reverse().map(Number);
   return n;
}
let arr = digitize(35231);
console.log(arr);