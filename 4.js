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
    const q = [node];
    while (q.length) {
        const temp = q.pop();

        result.push(node.val);

        console.info(temp);
        if (temp.left) {
            q.push(temp.left);
        }

        if (node.right) {
            q.push(temp.right);
        }
    }

    return result;
}

console.info(dfs(tree, []));
