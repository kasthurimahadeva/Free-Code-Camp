// Sum All Primes

/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself.
For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
 */

function sumPrimes(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++){
        if(isPrime(i)){
            console.log(i);
            sum += i;
        }
    }
    return sum;
}

function isPrime(x){
    let count = 0;
    for(let i = 1; i <= x / 2; i++){
        if(x % i === 0){
            count += 1;
        }
    }
    if(count === 1){
        return true;
    }

    return false;
}

sumPrimes(977);