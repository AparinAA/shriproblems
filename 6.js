function rightBr(str) {
    const n = str.length;
    const q = [];

    const br = {
        "]": "[",
        ")": "(",
        "}": "{",
    };

    for (let i = 0; i < n; i++) {
        const c = str[i];
        if (c === "]" || c === ")" || c === "}") {
            const temp = q.pop();
            if (br[c] !== temp) {
                return false;
            }
        } else if (c === "(" || c === "[" || c === "{") {
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
];

tests.forEach((t) => console.info(rightBr(t)));