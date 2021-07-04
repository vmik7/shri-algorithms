function insertionSort(input) {
    let result = [];
    input.forEach((item) => {
        let pos = 0;
        while (pos < result.length && result[pos] < item) {
            pos++;
        }
        result.splice(pos, 0, item);
    });
    return result;
}
