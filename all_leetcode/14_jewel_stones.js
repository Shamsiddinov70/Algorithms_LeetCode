var numJewelsInStones = function (jewels, stones) {
    let count = '';

    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (stones[i] === jewels[j]) {
                count += stones[i]
            }
        }
    }

    return count.length;
};