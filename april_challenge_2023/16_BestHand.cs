public class Solution
{
    public string BestHand(int[] ranks, char[] suits)
    {
        Dictionary<int, int> rankDic = new Dictionary<int, int>();
        Dictionary<char, int> suitDic = new Dictionary<char, int>();

        for (int i = 0; i < ranks.Length; i++)
        {
            if (rankDic.ContainsKey(ranks[i]))
                rankDic[ranks[i]] += 1;
            else
                rankDic[ranks[i]] = 1;

            if (suitDic.ContainsKey(suits[i]))
                suitDic[suits[i]] += 1;
            else
                suitDic[suits[i]] = 1;
        }

        int mostCommonRank = rankDic.Values.Max();
        int mostCommonSuit = suitDic.Values.Max();

        if (mostCommonSuit == 5)
            return "Flush";
        else if (mostCommonRank >= 3)
            return "Three of a Kind";
        else if (mostCommonRank == 2)
            return "Pair";
        else
            return "High Card";
    }
}


/*
PYTHON solution
class Solution:
    def bestHand(self, ranks: List[int], suits: List[str]) -> str:
        rank = Counter(ranks).most_common()[0][1]
        suit = Counter(suits).most_common()[0][1]

        if suit == 5:
            return "Flush"
        elif rank >= 3:
            return "Three of a Kind"
        elif rank == 2:
            return "Pair"
        else:
            return "High Card"
 */