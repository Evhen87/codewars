//Task

// Story
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.
//
//     But some of the rats are deaf and are going the wrong way!
//
//     Kata Task
// How many deaf rats are there?
//
//     Legend
//     P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats
//
// ex2 P O~ O~ ~O O~ has 1 deaf rat
//
// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

//Solution

const countDeafRats = function (town) {
    const stripped = town.replace(/\s/g, '')
    const piedPiperPosition = stripped.indexOf('P')
    let countDeafRats = 0

    for (let i = 0; i < piedPiperPosition; i += 2) {
        const rat = stripped.substring(i, i + 2);
        if (rat === 'O~') {
            countDeafRats++
        }
    }

    for (let i = piedPiperPosition + 1; i < stripped.length; i += 2) {
        const rat = stripped.substring(i, i + 2);
        if (rat === '~O') {
            countDeafRats++
        }
    }

    return countDeafRats
};

//solved with the help of AI