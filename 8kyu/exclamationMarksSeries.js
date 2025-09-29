//Task

// Description:
//     Remove all exclamation marks from the end of sentence.
//
//     Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

//Solution

// function remove(string) {
//     return string.replace(/!+$/, '')
// }

const remove = (string) => string.replace(/!+$/, '')