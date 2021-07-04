function selectionSort(input) {
    const res = [...input];
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
