public class Solution {
    public int MaxDivScore(int[] nums, int[] divisors) {
        int max = -1;
        int ans = int.MaxValue;

        foreach (int d in divisors)
        {
            int counter = 0;

            foreach (int n in nums)
            {
                if (n % d == 0)
                    counter++;

                if (counter == max)
                    ans = Math.Min(ans, d);

                if (counter > max)
                {
                    max = counter;
                    ans = d;
                }
            }
        }

        return ans;
    }
}