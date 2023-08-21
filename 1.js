function sortBbl(nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (nums[j] > nums[j + 1]) {
                const temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }

    return nums;
}

const tests = [
    [3, 2, 1, 0, -1],
    [-1, 0, 2, 3, 4, 5],
    [1, 1],
    [-1, 23, 5, 3, 0, -10],
];

tests.forEach((t) => console.info(sortBbl(t)));
