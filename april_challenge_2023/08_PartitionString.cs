public class Solution {
    public int PartitionString(string s) {
        string part = string.Empty;
        int ans = 1;
        foreach(char c in s)
        {
            if(part.Contains(c))
            {
                part = string.Empty;
                ans += 1;
            }
            part += c;
        }
        return ans;
    }
}