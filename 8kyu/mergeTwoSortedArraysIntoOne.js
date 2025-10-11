//Task

// You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:
//
//     The resulting array is sorted in ascending order.
//
//     Any duplicate values are removed, so each integer appears only once.
//
//     If both input arrays are empty, return an empty array.
//
//     No input validation is needed, as both arrays are guaranteed to contain zero or more integers.
//
// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

//Solution

function mergeArrays(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        !arr1.includes(arr2[i]) ? arr1.push(arr2[i]) : arr1
    }
    return arr1.sort((a, b) => a - b)
}

//Best practice

// function mergeArrays(arr1, arr2) {
//     return Array.from(new Set([...arr1,...arr2])).sort((a,b)=>a-b);
// }