var kidsWithCandies = function (candies, extraCandies) {
    let max = Math.max(...candies);
    let result = [];

    for (const k of candies) {
        let add = k + extraCandies;

        if (add >= max) result.push(true);

        else result.push(false);
    }

    return result
}