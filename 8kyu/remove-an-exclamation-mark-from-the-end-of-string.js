//Task
// Description:
//     Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
//
//     Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

//Solution

const remove = (string) => string.split('')[string.length - 1] === '!' ? string.slice(0, -1) : string

//Best practice

// function remove(s){
//     return s[s.length - 1] == '!' ? s.slice(0, -1) : s;
// }