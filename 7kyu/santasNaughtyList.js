//Task

// Christmas is coming, and Santa has a long list to go through, to find who deserves presents for the big day. Go through a list of children, and return a list containing every child who appeared on Santa's list. Do not add any child more than once. Output should be sorted.
//
// Comparison should be case sensitive and the returned list should contain only one copy of each name: "Sam" and "sam" are different, but "sAm" and "sAm" are not.

//Solution

function findChildren(santasList, children) {
    const longer = santasList.length >= children.length ? santasList : children
    const shorter = longer === santasList ? children : santasList
    const res = []
    for (let child of longer) {
        if (shorter.includes(child)) {
            if (!res.includes(child)) {
                res.push(child)
            }
        }
    }
    return res.sort()
}