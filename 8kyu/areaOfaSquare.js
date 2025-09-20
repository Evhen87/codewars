//Task

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
//
//     Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)


//Solution

// function squareArea(A){
//     const radius = 2 * A / Math.PI
//     return radius ** 2
// }

//Solution 2

const squareArea = (A) => Math.round((2 * A / Math.PI) ** 2 * 100) / 100
