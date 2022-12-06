using System;

public class Solution {
    public int MinimumSum(int num) {
        string[] str = num.ToString().Select(c => c.ToString()).ToArray();
        Array.Sort(str);

        return Convert.ToInt32(str[0] + str[2]) + Convert.ToInt32(str[1] + str[3]);
    }
}