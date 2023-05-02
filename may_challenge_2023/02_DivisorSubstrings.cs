public class Solution {
    public int DivisorSubstrings(int num, int k) {
        string s = num.ToString();
        int len = s.Length;
        int ans = 0, i = 0;

        while (i <= len - k)
        {
            var n = Convert.ToInt32(s.Substring(i, k));
            if (n != 0 && num % n == 0) ans++;
            i++;
        }

        return ans;
    }
}