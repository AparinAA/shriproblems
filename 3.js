function sortInsertion(nums) {
    const n = nums.length;
    for (let i = 1; i < n; i++) {
        if (nums[i - 1] > nums[i]) {
            let curIndex = i - 1;
            let cur = nums[i];
            while (curIndex > 0 && nums[curIndex] > cur) {
                nums[curIndex + 1] = nums[curIndex];
                curIndex--;
            }
            console.info(cur, curIndex);
            nums[curIndex] = cur;
        }
    }

    return nums;
}

const tests = [
    [3, 2, 1, 0, -1],
    // [-1, 0, 2, 3, 4, 5],
    // [1, 1],
    // [-1, 23, 5, 3, 0, -10],
    // [0, 1],
    // [1, 0],
];

tests.forEach((t) => console.info(sortInsertion(t)));
