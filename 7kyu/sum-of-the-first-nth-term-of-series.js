//Task
// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

//Solution

function SeriesSum(n) {
    // Happy Coding ^_^
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += 1 / (1 + 3 * i)
    }
    return sum.toFixed(2)
}