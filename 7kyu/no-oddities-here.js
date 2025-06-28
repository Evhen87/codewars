//Task
// Write a small function that returns the values of an array that are not odd.
//
//     All values in the array will be integers. Return the good values in the order they are given.
// Solution
function noOdds( values ){
    // Return all non-odd values

    return values.filter(num => num % 2 === 0 )
}

//Best practices
//const noOdds= ( values ) => values.filter( num => num % 2 === 0 )