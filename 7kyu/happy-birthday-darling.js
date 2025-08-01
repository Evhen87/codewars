//Task
// Your task is to translate the given age to the much desired 20 (or 21) years, and indicate the number base, in the format specified below.
//
//     Note: input will be always > 21
//
// Examples:
//     32  -->  "32? That's just 20, in base 16!"
// 39  -->  "39? That's just 21, in base 19!"
// Hint: if you don't know (enough) about numeral systems and radix, just observe the pattern!

//Solution

// function womensAge(n) {
//     if (n % 2 === 0) {
//         return `${n}? That's just 20, in base ${n / 2}!`
//     } else {return `${n}? That's just 21, in base ${Math.floor(n / 2)}!`}
//     // your code here
// }

//Solution 2

const womensAge = (n) => n % 2 === 0 ? `${n}? That's just 20, in base ${n / 2}!` : `${n}? That's just 21, in base ${Math.floor(n / 2)}!`

//Best practice

// function womensAge(n) {
//     return `${n}? That's just ${20+n%2}, in base ${Math.floor(n/2)}!`
// }