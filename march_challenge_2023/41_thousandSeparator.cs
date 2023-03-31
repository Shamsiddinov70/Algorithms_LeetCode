public class Solution {
    public string ThousandSeparator(int n) {
        string s = n.ToString();
        int l = s.Length;

        StringBuilder sb = new StringBuilder();
        int dot = 1;

        for (int i = l - 1; i >= 0; i--, dot++)
        {
            sb.Append(s[i]);
            if (dot == 3 && i > 0) {
                sb.Append('.');
                dot = 0;
            }
        }

        char[] ans = sb.ToString().ToCharArray();
        Array.Reverse(ans);
        return new string(ans);
    }
}