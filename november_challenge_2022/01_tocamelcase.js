function toCamelCase(str) {
    let s1 = str.split('-');
    let s2 = str.split('_');

    let arr = s1.length > s2.length ? s1 : s2;

    let ans = arr[0];
    for (let i = 1; i < arr.length; i++) {
        ans += arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
    }

    return ans;
}