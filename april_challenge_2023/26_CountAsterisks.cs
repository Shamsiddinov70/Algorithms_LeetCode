public class Solution {
    public int CountAsterisks(string s) {
        int bars = 0;
        int asterisks = 0;

        for (int i = 0; i < s.Length; i++)
        {
            if (s[i] == '|')
                bars++;
            if (s[i] == '*' && bars % 2 == 0)
                asterisks++;
        }

        return asterisks;
    }
}