/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let arr = [];
    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                arr.push([list1[i], (i + j)])
            }
        }
    }

    let min = arr.sort((a, b) => a[1] - b[1])[0][1];

    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] === min) {
            ans.push(arr[i][0]);
        }
    }
    return ans;
};