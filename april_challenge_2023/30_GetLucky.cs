public class Solution {
    public int GetLucky(string s, int k) {
        bool isOne = k == 1;
        string alpha = "abcdefghijklmnopqrstuvwxyz";
        int ans = 0;

        for (int i = 0; i < s.Length; i++)
        {
            int digit = alpha.IndexOf(s[i]) + 1;

            if (digit > 9)
            {
                while (digit > 0)
                {
                    int d = digit % 10;
                    ans += d;
                    digit = digit / 10;
                }
            }
            else
            {
                ans += digit;
            }
        }

        if (isOne) return ans;

        int temp = 0;

        while ((k - 1) > 0)
        {
            while (ans > 0)
            {
                int d = ans % 10;
                temp += d;
                ans = ans / 10;
            }

            ans = temp;
            temp = 0;
            k--;
        }

        return ans;
    }
}