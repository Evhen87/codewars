//Task

// Dot Calculator
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.
//
//     Here are the following valid operators :
//
//     + Addition
//     - Subtraction
//     * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.
//
// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""

//Solution

function dotCalculator(equation) {
    const arr = equation.split(' ')
    const operator = arr[1]
    switch (operator) {
        case '+':
            return arr[0] + arr[2]
        case '-':
            const lengthSubtraction = arr[0].length - arr[2].length
            return arr[0].slice(0, lengthSubtraction)
        case '*':
            const lengthOfMultiplication = arr[0].length * arr[2].length
            return '.'.repeat(lengthOfMultiplication)
        case '//':
            const lengthOfDivision = arr[0].length / arr[2].length
            return '.'.repeat(lengthOfDivision)
    }
}