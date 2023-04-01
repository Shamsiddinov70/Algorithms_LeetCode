public class Solution {
    public bool CheckRecord(string s) {
        int absent = 0;
        int late = 0;
        int maxLate = 0;
        for(int i = 0; i < s.Length; i++)
        {
            if(s[i] == 'A') absent += 1;

            if(s[i] == 'L')
            {
                late += 1;
                maxLate = Math.Max(maxLate, late);
            }
            else late = 0;
        }

        return absent < 2 && maxLate < 3;
    }
}