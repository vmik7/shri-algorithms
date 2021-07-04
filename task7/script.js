function inverseList(list) {
    if (list.next === undefined) {
        return list;
    }

    let prev = null;
    let current = list;

    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}
