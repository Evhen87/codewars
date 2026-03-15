//Task

// Description:
//     Move all exclamation marks to the end of the sentence
//
// Examples
// "Hi!"          ---> "Hi!"
// "Hi! Hi!"      ---> "Hi Hi!!"
// "Hi! Hi! Hi!"  ---> "Hi Hi Hi!!!"
// "Hi! !Hi Hi!"  ---> "Hi Hi Hi!!!"
// "Hi! Hi!! Hi!" ---> "Hi Hi Hi!!!!"

//Solution

function remove (string) {
    let res = ''
    let exclCount = 0
    for (let el of string) {
        if (el !== '!') {
            res += el
        } else {
            exclCount++
        }
    }
    return res + '!'.repeat(exclCount);
}