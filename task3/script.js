const brakets = [
    { open: '{', close: '}' },
    { open: '[', close: ']' },
    { open: '(', close: ')' },
];

function isCorrect(s, brakets) {
    let stack = [];
    for (const c of s) {
        for (const b of brakets) {
            if (c === b.open) {
                stack.push(c);
                break;
            } else if (c === b.close) {
                if (stack.length === 0 || stack.pop() !== b.open) {
                    return false;
                }
                break;
            }
        }
    }
    return stack.length === 0;
}
