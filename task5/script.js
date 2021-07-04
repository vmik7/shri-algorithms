function getPrimes(n) {
    const ans = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            ans.push(i);
        }
    }
    return ans;
}

function isPrime(num) {
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
