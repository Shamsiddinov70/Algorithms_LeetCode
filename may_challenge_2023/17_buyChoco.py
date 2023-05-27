class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        N = len(prices)

        if N < 2:
            return money

        m1 = min(prices)
        prices.remove(m1)
        m2 = min(prices)

        return money - (m1 + m2) if (m1 + m2) <= money else money
