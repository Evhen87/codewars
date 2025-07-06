//Task
// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
//
//     Your function will accept three arguments:
//     The first and second argument should be numbers.
//     The third argument should represent a sign indicating the operation to perform on these two numbers.
//
//     You should return the result of applying the given operation to these numbers.
//
//     Note: In dynamically typed languages (JS, PHP, Python), the first and second arguments can be not numbers. In that case, return "unknown value".
//Solution
function calculator(a,b,sign){
    // Your code here...
    if (typeof a === 'number') {
        if (typeof b === 'number') {
            if (sign === "+") {
                return a + b
            }
            if (sign === "-") {
                return a - b
            }
            if (sign === "*") {
                return a * b
            }
            if (sign === "/") {
                return a / b
            } else {return "unknown value"}
        } else {return "unknown value"}
    } else {return "unknown value"}
}
//Best practices
// function calculator(a,b,sign){
//     if ((typeof a === "number") && (typeof b === "number")) {
//         switch (sign) {
//             case "+":
//                 return a + b;
//             case "-":
//                 return a - b;
//             case "*":
//                 return a * b;
//             case "/":
//                 return a / b;
//         }
//     }
//     return "unknown value";
// }