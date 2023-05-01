public class Solution {
    public int MaxNumberOfBalloons(string text) {
        var pattern = new Dictionary<char, int>()
        {
            { 'b', 1 },
            { 'a', 1 },
            { 'l', 2 },
            { 'o', 2 },
            { 'n', 1 },
        };

        var dic = new Dictionary<char, int>();

        for (int i = 0; i < text.Length; i++)
        {
            if (dic.ContainsKey(text[i]))
                dic[text[i]]++;
            else
                dic[text[i]] = 1;
        }

        int ans = int.MaxValue;
        int allChar = 0;
        foreach (var item in dic)
        {
            if (item.Key == 'l' && item.Value < 2
            || item.Key == 'o' && item.Value < 2)
                return 0;

            foreach (var item2 in pattern)
            {
                if (item.Key == item2.Key)
                {
                    int i1 = item.Value;
                    int i2 = item2.Value;

                    if (i1 > i2)
                        ans = Math.Min(ans, item.Value / item2.Value);
                    else
                        ans = Math.Min(ans, item2.Value / item.Value);

                    allChar++;
                }
            }

        }

        return allChar < 5 ? 0 : ans;
    }
}
