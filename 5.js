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

function bfs(node) {
    const result = [];
    const q = [node];

    while (q.length) {
        const len = q.length;
        for (let i = 0; i < len; i++) {
            const temp = q.shift();
            result.push(temp.val);

            if (temp.left) {
                q.push(temp.left);
            }

            if (temp.right) {
                q.push(temp.right);
            }
        }
    }

    return result;
}

console.info(bfs(tree, []));
