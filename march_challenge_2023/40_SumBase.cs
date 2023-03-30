public class Solution {
    public int SumBase(int n, int k) {
        int ans = 0;

        while(n != 0)
        {
            int digit = n % k;
            ans += digit;
            n = n / k;
        }

        return ans;
    }
}