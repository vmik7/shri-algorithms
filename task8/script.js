function leftBinarySearch(arr, value) {
    if (arr.length === 0) {
        return -1;
    }

    // Инвариант: l < r
    // Инвариант: arr[l] < value
    // Инвариант: arr[r] >= value

    let l = -1,
        r = arr.length;

    while (r - l > 1) {
        let m = Math.floor((l + r) / 2);
        if (arr[m] < value) {
            l = m;
        } else {
            r = m;
        }
    }

    return arr[r] === value ? r : -1;
}
