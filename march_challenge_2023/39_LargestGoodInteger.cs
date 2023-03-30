public class Solution {
    public string LargestGoodInteger(string s) {
        int max = -1;
        string temp = string.Empty;

        for (int i = 0; i < s.Length; i++)
        {
            for (int j = i + 1; j < s.Length; j++)
            {
                if (s[i] == s[j]) temp += s[i];
                else temp = string.Empty;

                break;
            }

            if (temp.Length > 1)
            {
                string strNum = String.Concat(temp, temp[0]);
                if (strNum.Length > 3) strNum = strNum.Substring(0, 3);

                int n = int.Parse(strNum);
                max = Math.Max(max, n);
            }
        }

        return max == 0 ? "000" : max == -1 ? "" : max.ToString();
    }
}