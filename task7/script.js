function inverseList(input) {
    if (input.value === undefined) {
        return {};
    }
    let result = null;

    let current = input;
    while (current) {
        let newResult = {
            value: current.value,
            next: result,
        };
        result = newResult;
        current = current.next;
    }

    return result;
}
