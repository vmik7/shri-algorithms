const a = [7, 1, 3, 4, 11];
console.log('input:', a);

const ans = selectionSort(a);
console.log('output:', ans);

function selectionSort(a) {
    const res = [...a];
    for (let i = 0; i < res.length; i++) {
        for (let j = i + 1; j < res.length; j++) {
            if (res[j] < res[i]) {
                [res[j], res[i]] = [res[i], res[j]];
            }
        }
    }
    return res;
}
