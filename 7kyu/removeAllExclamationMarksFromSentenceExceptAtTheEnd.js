//TAsk

// Description:
//     Remove all exclamation marks from sentence except at the end.
//
//     Examples
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!!!"
// "!Hi"     ---> "Hi"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi"

//Solution

function remove (string) {
    let arr = string.split('')
    let isLetter = false
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== '!' && !isLetter) {
            isLetter = true
        }
        if (arr[i] === '!' && isLetter) {
            arr[i] = ''
        }
    }
    return arr.join('');
}