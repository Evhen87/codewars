//Task

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
//
//     Rules for a smiling face:
//
//     Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//     Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.
//
//     Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
//
// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

//Solution

function countSmileys(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++ ) {
        const smile = arr[i]
        if (smile.startsWith(';') || smile.startsWith(':')) {
            if (smile.endsWith(')') || smile.endsWith('D')) {
                if (smile.length === 2) {
                    count++
                }
                if (smile.length === 3) {
                    if (smile[1] === '-' || smile[1] === '~') {
                        count++
                    }
                }
            }
        }
    }
    return count;
}
