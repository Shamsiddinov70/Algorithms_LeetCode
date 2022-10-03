function smallEnough(a, limit) {

    let result = [];

    for (const key of a) {
        if (key < limit || key === limit) {
            result.push(key);
        }
    }

    return result.length === a.length;
}