public class Solution {
    public int MinDeletionSize(string[] strs) {
        string alpha = "abcdefghijklmnopqrstuvwxyz";
        int n = strs[0].Length;
        int answer = 0;

        for (int i = 0; i < n; i++)
        {
            string str = string.Empty;
            for (int j = 0; j < strs.Length; j++)
            {
                str += strs[j][i];
            }

            int prevIndex = -1;
            int indexCounter = 0;

            for (int k = 0; k < str.Length; k++)
            {
                int currentIndex = alpha.IndexOf(str[k]);

                if (currentIndex >= prevIndex)
                {
                    indexCounter += 1;
                    prevIndex = currentIndex;
                }
            }

            if (indexCounter < str.Length)
                answer += 1;
        }

        return answer;
    }
}