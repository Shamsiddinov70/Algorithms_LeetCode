function maskify(cc) {
    let lastFourEl = cc.slice(-4);
    let leng = cc.length - 4;

    let hashCode = '';

    for (let i = 0; i < leng; i++) {
        hashCode += "#";
    }

    return hashCode.concat(lastFourEl);
}