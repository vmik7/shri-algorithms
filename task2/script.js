const a = [7, 1, 3, 4, 11];
console.log('input:', a);

const ans = selectionSort(a);
console.log('output:', ans);

function selectionSort(a) {
    const res = [...a];
    for (let i = 0; i < res.length; i++) {
        let posOfMin = i;
        for (let j = i + 1; j < res.length; j++) {
            if (res[j] < res[posOfMin]) {
                posOfMin = j;
            }
        }
        [res[i], res[posOfMin]] = [res[posOfMin], res[i]];
    }
    return res;
}
