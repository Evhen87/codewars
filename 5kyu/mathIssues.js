//Task

// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.
//
// Here is a list of functions, we need:
//
//     Math.round()
// Math.ceil()
// Math.floor()

//Solution

Math.round = function(number) {
    if (number === 0) {
        return 0
    }
    const arr = number.toString().split('.')
    if (arr.length === 1) return +arr[0]
    if (+arr[1][0] < 5) return +arr[0]
    return +arr[0] + 1
};

Math.ceil = function(number) {
    if (number === 0) return 0
    const arr = number.toString().split('.')
    if (arr.length === 1) return +arr[0]
    return +arr[0] + 1
};

Math.floor = function(number) {
    if (number === 0) return 0
    const arr = number.toString().split('.')
    return +arr[0]
};

//Best practice

// Math.round = function(number) {
//     return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
// };
//
// Math.ceil = function(number) {
//     return (parseInt(number) === number) ? number : parseInt(number) + 1;
// };
//
// Math.floor = function(number) {
//     return parseInt(number);
// };