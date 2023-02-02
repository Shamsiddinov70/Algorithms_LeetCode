class Solution:
    def busyStudent(startTime, endTime, queryTime) -> int:
        result = 0

        for i in range(len(startTime)):
            for j in range(startTime[i], endTime[i]+1):
                if j == queryTime:
                    result += 1

        return result
