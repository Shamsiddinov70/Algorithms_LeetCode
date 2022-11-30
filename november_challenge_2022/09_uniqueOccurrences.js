var uniqueOccurrences = function (arr) {
    let hash = {}

    for (let num of arr) {
        if (!hash[num]) hash[num] = 0
        hash[num]++
    }

    let key = new Set(Object.entries(hash).map((e) => e[0]));
    let value = new Set(Object.values(hash));

    return [...key].length === [...value].length;
};