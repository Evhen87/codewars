//Task

// Wilson primes satisfy the following condition. Let
// P
// P represent a prime number.
//
//     Then,
//
//     (
//         P
// −
// 1
// )
// !
//     +
//         1
// P
// ∗
// P
// P∗P
// (P−1)!+1
// ​
//
// should give a whole number, where
// P
// !
//     P! is the factorial of
// P
// P.
//
//     Your task is to create a function that returns true if the given number is a Wilson prime and false otherwise.

//Solved with AI

function amIWilson(p) {
    function isPrime(n) {
        if (n < 2) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;

        for (let i = 3; i * i <= n; i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    }

    if (!isPrime(p)) return false;

    if (p < 5) return false;

    let factorialMod = 1;
    const pSquared = p * p;

    for (let i = 2; i <= p - 1; i++) {
        factorialMod = (factorialMod * i) % pSquared;
    }

    return (factorialMod + 1) % pSquared === 0;
}
