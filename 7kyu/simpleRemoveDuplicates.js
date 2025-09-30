//Task

// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
//
//     Example:
// For input: [3, 4, 4, 3, 6, 3]
//
// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]
//
// More examples can be found in the test cases.
//
//     Good luck!

//Solution

function solve(arr) {
    if (arr.length === 0) return []
    console.log(arr)
    arr.reverse()
    let newArr = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr.reverse();
}

//Best practice

// const solve = arr => [...new Set(arr.reverse())].reverse()

//const solve = arr => arr.filter((item, index) =>
//    arr.lastIndexOf(item) === index
//);
