//Task

// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:
//
// 3 -->    15  (  3 * 5¹)
// 10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
// 0 -->     0  (  0 * 5¹)
// -3 -->   -15  ( -3 * 5¹)

//Solution
//
// const  multiply = (number) => number > 0 ?
//     number * Math.pow(5, number.toString().split('').length) :
//     number * Math.pow(5, number.toString().split('').length - 1 )

// Best practice

const  multiply = (number) => number * Math.pow(5, Math.abs(number).toString().split('').length)