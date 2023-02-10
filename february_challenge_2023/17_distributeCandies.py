class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        limit_candy = int(len(candyType) / 2)
        unique_candies = int(len(set(candyType)))

        if limit_candy == unique_candies:
            return limit_candy
        elif limit_candy < unique_candies:
            return limit_candy
        else:
            return unique_candies
