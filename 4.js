const tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        },
    },
    right: {
        val: 3,
        left: {
            val: 4,
            left: null,
            right: null,
        },
        right: {
            val: 5,
            left: null,
            right: null,
        },
    },
};

function dfs(node, result) {
    if (!node) {
        return [];
    }

    result.push(node.val);
    if (node.left) {
        dfs(node.left, result);
    }

    if (node.right) {
        dfs(node.right, result);
    }

    return result;
}

console.info(dfs(tree, []));
