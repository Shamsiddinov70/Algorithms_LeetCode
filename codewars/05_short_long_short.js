function solution(a, b) {

    let arr1 = a.split('');
    let arr2 = b.split('');

    if (a.length < b.length) {
        return [...arr1, ...arr2, a].join('');
    }

    if (a.length > b.length) {
        return [...arr2, ...arr1, b].join('');
    }
}