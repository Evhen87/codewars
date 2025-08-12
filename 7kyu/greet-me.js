//Task
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
//
//     Example:
//
// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

//Solution

// const greet = function (name) {
//     return `Hello ${name.toLowerCase().split('').map(((el, ind) => ind === 0 ? el.toUpperCase() : el)).join('')}!`
// };

//Solution 2

const greet = (name) => `Hello ${name.toLowerCase().split('').map(((el, ind) => ind === 0 ? el.toUpperCase() : el)).join('')}!`