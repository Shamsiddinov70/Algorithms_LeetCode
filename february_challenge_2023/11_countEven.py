class Solution:
    def countEven(self, num: int) -> int:
        ans = 0
        for i in range(2, num+1):
            temp = 0

            while i != 0:
                digit = i % 10
                temp += digit
                i //= 10

            if temp % 2 == 0:
                ans += 1

        return ans


# JS solution
"""
/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let nums = [];
    for (let i = 2; i <= num; i++) {
        nums.push(i);
    }

    let ans = 0;
    for (let n of nums) {
        let temp = 0;
        while (n != 0) {
            let digit = n % 10;
            temp += digit;
            n = Math.floor(n / 10);
        }

        if (temp % 2 === 0) {
            ans += 1;
        }
    }
    return ans;
};
"""
