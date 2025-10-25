//Task

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

const uniqueInOrder = function(iterable){
    let res = []
    if (!Array.isArray(iterable)) {
        arr = iterable.toString().split('')
    } else {
        arr = iterable
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] !== res[res.length - 1] ? res.push(arr[i]) : res
    }
    return res
}

//Best practice

// const uniqueInOrder=function(iterable){
//     return [...iterable].filter((a, i) => a !== iterable[i-1])
// }