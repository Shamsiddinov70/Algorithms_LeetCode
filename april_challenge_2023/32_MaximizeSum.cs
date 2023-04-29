public class Solution {
    public int MaximizeSum(int[] nums, int k) {
        int max = nums.Max();
        int ans = 0;

        while (k > 0)
        {
            ans += max;
            max++;
            k--;
        }

        return ans;
    }
}