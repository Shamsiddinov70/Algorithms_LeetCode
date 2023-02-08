class Solution:
    def removeOccurrences(self, s: str, part: str) -> str:
        while part in s:
            s = s.replace(part, "", 1)

        return s


'''
JS

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    while (s.includes(part)) {
        s = s.replace(part, '');
    }
    return s;
};
'''
