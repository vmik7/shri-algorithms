const a = [7, 1, 3, 4, 11];
console.log('input:', a);

const ans = bubbleSort(a);
console.log('output:', ans);

function bubbleSort(a) {
    const res = [...a];
    for (let i = 0; i < res.length; i++) {
        for (let j = i + 1; j < res.length; j++) {
            if (res[j - 1] > res[j]) {
                [res[j], res[j - 1]] = [res[j - 1], res[j]];
            }
        }
    }
    return res;
}
