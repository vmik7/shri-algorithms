function getPrimes(n) {
    const ans = [2];
    for (let i = 3; i <= n; i += 2) {
        let isPrime = true;
        for (let j = 0; j < ans.length && ans[j] * ans[j] <= i; j++) {
            if (i % ans[j] === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            ans.push(i);
        }
    }
    return ans;
}
