function factorial(n) {
    if (n < 0 || n > 12) {
        throw new RangeError(-1);
    }

    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}