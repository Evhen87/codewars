//Task

// No Story
//
// No Description
//
// Only by Thinking and Testing
//
// Look at result of testcase, guess the code!

//Solution

// function testit(a,b){
//     return [...(new Set(a)), ...new Set(b)].sort((a, b) => a - b);
// }

//Solution 2

const testit = (a,b) => [...(new Set(a)), ...new Set(b)].sort((a, b) => a - b)