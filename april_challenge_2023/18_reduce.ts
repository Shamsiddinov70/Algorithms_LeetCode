type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    if (nums.length == 0) return init;

    let ans = init;

    for (let i = 0; i < nums.length; i++) {
        ans = fn(ans, nums[i]);
    }

    return ans;
};