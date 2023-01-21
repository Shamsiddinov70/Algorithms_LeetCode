class Solution:
    def countMatches(items, ruleKey, ruleValue) -> int:
        ans = 0
        for item in items:
            Type = item[0]
            Color = item[1]
            Name = item[2]

            if ruleKey == "type" and ruleValue == Type:
                ans += 1
            if ruleKey == "color" and ruleValue == Color:
                ans += 1
            if ruleKey == "name" and ruleValue == Name:
                ans += 1

        return ans


# JS solution
"""
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let ans = [];
    for (let i = 0; i < items.length; i++) {
        let type = items[i][0]
        let color = items[i][1]
        let name = items[i][2]

        if (ruleKey === "type" && type === ruleValue) {
            ans.push(items[i]);
        }
        if (ruleKey === "color" && color === ruleValue) {
            ans.push(items[i]);
        }
        if (ruleKey === "name" && name === ruleValue) {
            ans.push(items[i]);
        }
    }
    return ans.length;
};
"""
