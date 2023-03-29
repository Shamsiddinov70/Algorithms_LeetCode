public class Solution {
    public int MaxPower(string s) {
        int max = 0;
        int count = 0;
        for(int i = 0; i < s.Length; i++)
        {
            for (int j = i+1; j < s.Length; j++)
            {
                if (s[i] == s[j])
                {
                    count++;
                    max = Math.Max(max, count);
                }
                else
                {
                    count = 0;
                }
                break;
            }
        }
        return max + 1;
    }
}