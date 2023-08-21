function sortSelect(nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        let indexMin = i;
        for (let j = i; j < n; j++) {
            if (nums[j] < nums[indexMin]) {
                indexMin = j;
            }
        }
        const temp = nums[indexMin];
        nums[indexMin] = nums[i + 1];
        nums[i + 1] = temp;
    }

    return nums;
}

const tests = [
    [3, 2, 1, 0, -1],
    [-1, 0, 2, 3, 4, 5],
    [1, 1],
    [-1, 23, 5, 3, 0, -10],
];

tests.forEach((t) => console.info(sortSelect(t)));
