class Solution:
    def numberOfMatches(self, n: int) -> int:
        copy = n
        result = 0
        while n > 1:
            if copy % 2 != 0:
                matches = (n - 1) / 2
                teams = (n - 1) / 2 + 1
                result += matches
                n = teams
            else:
                matches = n / 2
                teams = n / 2
                result += matches
                n = teams

        return round(result)


# JS
"""
/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let copy = n;
    let ans = 0;
    while (n > 1) {
        if (copy % 2 !== 0) {
            let matches = (n - 1) / 2;
            let teams = (n - 1) / 2 + 1;
            ans += matches;
            n = teams;
        }
        else {
            let matches = n / 2;
            let teams = n / 2;
            ans += matches;
            n = teams;
        }
    }

    return Math.round(ans);
};
"""
