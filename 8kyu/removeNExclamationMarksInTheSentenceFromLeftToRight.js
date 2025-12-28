//Task

// Description:
//     Remove n exclamation marks in the sentence from left to right. n is positive integer.
//
//     Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

//Solution

function remove(s,n){
    console.log(s)
    const arr = s.split('')
    let counter = 0
    for (let i = 0; i < s.length; i++) {
        if (counter < n) {
            if (arr[i] === '!') {
                arr[i] = ''
                counter++
            }

        }
    }
    return arr.join('')
}