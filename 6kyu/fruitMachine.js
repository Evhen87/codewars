//Task

// You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.
//     Rules
// 1. There are always exactly three reels
//
// 2. Each reel has 10 different items.
//
// 3. The three reel inputs may be different.
//
// 4. The spin array represents the index of where the reels finish.
//
// 5. The three spin inputs may be different
//
// 6. Three of the same is worth more than two of the same
//
// 7. Two of the same plus one "Wild" is double the score.
//
// 8. No matching items returns 0.

//Solution

function fruit(reels, spins){
    const scoring = {
        Wild: 10,
        Star: 9,
        Bell: 8,
        Shell: 7,
        Seven: 6,
        Cherry: 5,
        Bar: 4,
        King: 3,
        Queen: 2,
        Jack: 1
    }
    const item1 = reels[0][spins[0]]
    const item2 = reels[1][spins[1]]
    const item3 = reels[2][spins[2]]
    const items = [item1, item2, item3]
    const obj = {}
    for (let item of items) {
        if (!obj[item]) {
            obj[item] = 1
        } else {
            obj[item]++
        }
    }
    let score = 0
    for (let el in obj) {
        if (obj[el] === 3) {
            score = scoring[el] * 10
        } else if (obj[el] === 2) {
            score = scoring[el] * ((obj['Wild'] && obj['Wild'] !== 2) ? 2 : 1)
        }
    }
    return score
}