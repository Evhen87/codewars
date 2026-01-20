//Task

// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.
//
//     The sorting should NOT be case sensitive

//Solution

function sorter(textbooks) {
    let arr = [...textbooks].map( el => el.toLowerCase()).sort()
    const res = []
    for (let i = 0; i < textbooks.length; i++) {
        res.push(textbooks.find(el => el.toLowerCase() === arr[i] ))
    }
    return res;
}