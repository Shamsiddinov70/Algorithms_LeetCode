function generateHashtag(str) {
    let arr = str.split(' ');
    let filteredArr = arr.filter((e) => e);

    if (filteredArr.length === 0) return false;

    let ans = "#";
    for (const word of filteredArr) {
        ans += word[0].toUpperCase() + word.substring(1);
    }

    return ans.length > 140 ? false : ans;
}