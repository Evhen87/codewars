//Task

// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.
//
//     @ @@ @ @@ @ @@ @ @@ @ @@ @
//
//     Implement a function returning the number of red beads.
//     If there are less than 2 blue beads return 0.

//Solution

// function countRedBeads(n) {
//     if (n < 2) {
//         return 0
//     } else {
//         return (n - 1) * 2
//     }
//     //your code here
// }

//Solution 2

// const countRedBeads = (n) => n < 2 ? 0 : (n - 1) * 2

//Solution 3

const countRedBeads = (n) => n && (n - 1) * 2