public class Solution {
    public string RemoveStars(string s) {
        List<char> ans = new List<char>();

        foreach(char c in s)
        {
            if(c == '*')
                ans.RemoveAt(ans.Count - 1);
            else
                ans.Add(c);
        }

        return string.Join("", ans.ToArray());
    }
}