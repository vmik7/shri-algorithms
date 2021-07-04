function bfs(tree) {
    let res = [];

    let queue = [tree];
    let pos = 0;

    while (pos < queue.length) {
        res.push(queue[pos].value);
        if (queue[pos].children) {
            for (let child of queue[pos].children) {
                queue.push(child);
            }
        }
        pos++;
    }

    return res;
}
