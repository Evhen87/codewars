//

// Write function heron which calculates the area of a triangle with sides a, b, and c.
//
//     Heron's formula:
//
// Notes
// All inputs are valid triangles with integer sides.
//     You do not need to round anything. Answers will be tested for correctness within a margin of 0.01.

//Solution

function heron(a, b, c) {
    const s = (a + b + c) / 2
    return (s * (s - a) * (s - b) * (s - c)) ** (1 / 2);
}