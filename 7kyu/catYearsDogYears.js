//Task

// This is related to my other Kata about cats and dogs.
//
//     Kata Task
// I have a cat and a dog which I got as kitten / puppy.
//
//     I forget when that was, but I do know their current ages as catYears and dogYears.
//
//     Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]
//
// NOTES:
//
//     Results are truncated whole numbers of "human" years
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

//Solution

const ownedCatAndDog = function (catYears, dogYears) {
    let ownedCat = 0
    let ownedDog = 0

    if (catYears >= 15) {
        ownedCat += 1
        catYears -= 15
        if (catYears >= 9) {
            ownedCat += 1
            catYears -= 9
            if (catYears >= 4) {
                ownedCat += Math.floor(catYears / 4)
            }
        }
    }

    if (dogYears >= 15) {
        ownedDog += 1
        dogYears -= 15
        if (dogYears >= 9) {
            ownedDog += 1
            dogYears -= 9
            if (dogYears >= 5) {
                ownedDog += Math.floor(dogYears / 5)
            }
        }
    }

    return [ownedCat, ownedDog];
};
