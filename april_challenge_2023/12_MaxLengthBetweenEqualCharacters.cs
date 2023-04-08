public class Solution {
    public int MaxLengthBetweenEqualCharacters(string s) {
        int ans = 0;
        for (int i = 0; i < s.Length; i++)
        {
            for (int j = i + 1; j < s.Length; j++)
            {
                if (s[i] == s[j])
                {
                    int distance = Math.Abs(i - j);
                    ans = Math.Max(ans, distance);
                }
            }
        }

        return ans > 0 ? ans - 1 : -1;
    }
}