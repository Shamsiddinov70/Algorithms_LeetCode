public class Solution {
    public int CountCharacters(string[] words, string chars) {
        var charDic = MakeDic(chars);
        int ans = 0;

        foreach (var word in words)
        {
            var wordDic = MakeDic(word);

            int count = 0;
            foreach (var charItem in charDic)
            {
                foreach (var wordItem in wordDic)
                {
                    if (charItem.Key == wordItem.Key
                    && charItem.Value >= wordItem.Value)
                        count++;
                }
            }

            var setWord = new HashSet<char>(word);
            if (count == setWord.Count)
            {
                ans += word.Length;
            }
        }

        return ans;
    }

    public Dictionary<char, int> MakeDic(string word)
    {
        var dic = new Dictionary<char, int>();

        foreach (var w in word)
        {
            if (dic.ContainsKey(w))
                dic[w]++;
            else
                dic[w] = 1;
        }

        return dic;
    }
}