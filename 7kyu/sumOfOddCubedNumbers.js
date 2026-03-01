//Task

// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

//Solution

function cubeOdd(arr) {
    const res = arr.map(el => el ** 3).reduce((acc, el) => el % 2 !== 0 ? acc + el : acc, 0 )
    return isNaN(res) ? undefined : res
}

