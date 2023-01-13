function sumPrimes(num) {


    let sieve = [];
    let primes = [];
    for (let i = 2; i <= num; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (let j = i << 1; j <= num; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes.reduce((acc, current) => acc + current);
}
