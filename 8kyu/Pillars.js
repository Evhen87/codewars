//Task
//
// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
//
//     number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

//Solution

function pillars(numPill, dist, width) {
    let distBetwPill = 0
    for (let i = 0; i < numPill - 1; i++) {
        distBetwPill = dist * (numPill - 1) * 100 + width * (numPill - 2)
    }
    return distBetwPill
}

//Best practice

// p - number of pillars.
// d - distance between pillars.
// w - width of each pillar.
// const pillars = (p, d, w) => p > 1 ? (p-1) * (d * 100) + (p-2) * w : 0;