var countSegments = function (s) {
    let count = 0;
    s.split(' ').filter((e) => {
        if (e) count++;
    });
    return count;
};