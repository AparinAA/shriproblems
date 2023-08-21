function rightBr(str) {
    const n = str.length;
    const q = [];

    const br = {
        "]": "[",
        ")": "(",
        "}": "{",
    };

    const right = new Set(Object.values(br));

    for (let i = 0; i < n; i++) {
        const c = str[i];
        if (br[c]) {
            const temp = q.pop();
            if (br[c] !== temp) {
                return false;
            }
        } else if (right.has(c)) {
            q.push(c);
        }
    }

    return !q.length;
}

const tests = [
    "}{",
    "{1213[32(asd)d32],[]}",
    "{sdfd[(fd)]}",
    "{([{])}}",
    "[ ({}) {[[()]]} ]",
    "{",
    "{}",
    "",
    "(foo[0][0[0]])",
];

tests.forEach((t) => console.info(t, rightBr(t)));
