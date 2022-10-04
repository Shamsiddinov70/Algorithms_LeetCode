function twiceAsOld(dadYearsOld, sonYearsOld) {
    let y = dadYearsOld - sonYearsOld * 2;
    return y < 0 ? y - y - y : y;
}