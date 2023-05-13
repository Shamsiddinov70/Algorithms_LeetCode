public class Solution {
    public int CountSeniors(string[] details) {
        int ans = 0;
        foreach (var detail in details)
        {
            var a = detail[11] - '0';
            var b = detail[12] - '0';
            bool greater = a * 10 + b > 60;
            if (greater) ans++;
        }
        return ans;
    }
}