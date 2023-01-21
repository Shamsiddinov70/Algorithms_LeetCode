class Solution:
    def createTargetArray(nums, index):
        target = []

        for i in range(len(nums)):
            target.insert(index[i], nums[i])

        return target


# JS solution
"""
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < index.length; j++) {
            target.splice(index[i], 0, nums[i]);
            break;
        }
    }
    return target;
};
"""
