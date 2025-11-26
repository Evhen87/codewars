//Task

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
//
//     If two words have the same last letter, the returned array should show them in the order they appeared in the given string.
//
//     All inputs will be valid.

//Solution

function last(x){
    return x.split(' ').sort((a, b) => {
        const lastCharA = a.slice(-1);
        const lastCharB = b.slice(-1);

        if (lastCharA < lastCharB) return -1;
        if (lastCharA > lastCharB) return 1;
        return 0;
    });
}