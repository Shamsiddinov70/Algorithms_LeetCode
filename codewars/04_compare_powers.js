function comparePowers(n1, n2) {
    let arrOneFirstIndex = n1[0];
    let arrOneSecondIndex = n1[1];

    let arrTwoFirstIndex = n2[0];
    let arrTwoSecondIndex = n2[1];

    let powerOne = Math.log(arrOneFirstIndex) * arrOneSecondIndex;
    let powerTwo = Math.log(arrTwoFirstIndex) * arrTwoSecondIndex;

    if (powerOne > powerTwo) return -1;
    if (powerOne === powerTwo) return 0;

    return 1;
}