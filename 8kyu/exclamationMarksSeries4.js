//Task

// Description:
//     Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
//
//     Examples
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!"
// "!Hi"     ---> "Hi!"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi!"

//Solution

// function remove (string) {
//     return (string.split('').filter(el => el !== '!')).join('') + '!'
// }

//Solution 2

const remove = (string) => string.split('').filter(el => el !== '!').join('') + '!'