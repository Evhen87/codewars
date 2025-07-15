//Task

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
//
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
//
// If the score < 0, return 0.

//Solution

function checkExam(array1, array2) {
    let sum = 0
    for (let i = 0; i < array2.length; i++) {
        console.log(sum)
        console.log(array2[i])
        console.log(array1[i])


        if (array2[i] === array1[i]) {
            sum += 4
        } if (array2[i] === '') {
            sum = sum
        } if (array2[i] !== array1[i]) {
            sum --
        }
    }
    return sum
}