function dfs(tree) {
    const res = [tree.value];
    if (tree.children) {
        for (let child of tree.children) {
            res.push(...dfs(child));
        }
    }
    return res;
}
