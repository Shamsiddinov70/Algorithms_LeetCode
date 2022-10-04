var findGCD = function (nums) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);

    let ans = [];

    for (let i = 0; i <= max; i++) {
        if (max % i === 0 && min % i === 0) ans.push(i);
    }

    return Math.max(...ans);
};