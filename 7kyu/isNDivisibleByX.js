//Task

// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)
//
// Example:
//
//     (6,1,3)--> true because 6 is divisible by 1 and 3
// (12,2)--> true because 12 is divisible by 2
// (100,5,4,10,25,20)--> true
// (12,7)--> false because 12 is not divisible by 7

//Solution

// function isDivisible(...args){
//     let [argOne, ...rest] = args
//
//     const arr = [...rest]
//
//     for (let i = 0; i < arr.length; i++) {
//         if (argOne % arr[i] !== 0) return false
//     }
//
//     return true
// }

//Solution

function isDivisible(argOne, ...rest){

    const arr = [...rest]

    for (let i = 0; i < arr.length; i++) {
        if (argOne % arr[i] !== 0) return false
    }

    return true
}