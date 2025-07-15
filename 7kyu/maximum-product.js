// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.
//

//Solution

function adjacentElementsProduct(array) {
    const newArr = []
    for (let i = 0; i < array.length-1; i++) {
        newArr.push(array[i] * array[i + 1])
    }
    return Math.max(...newArr)
}

//Best practice
// function adjacentElementsProduct(a) {
//     return Math.max(...a.map((x,i)=>x*a[i+1]).slice(0,-1))
// }
