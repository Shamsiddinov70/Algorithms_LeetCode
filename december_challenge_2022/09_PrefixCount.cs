public class Solution {
    public int PrefixCount(string[] words, string pref) {
        int prefLen = pref.Length;
        int count = 0;

        foreach(string word in words)
        {

            if(word.Length >= prefLen)
            {
                string prefWord = word.Substring(0, prefLen);
                if(prefWord == pref) count += 1;
            }
        }

        return count;
    }
}