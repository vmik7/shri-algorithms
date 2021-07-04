function inverseList(input) {
    if (input.next === undefined) {
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
