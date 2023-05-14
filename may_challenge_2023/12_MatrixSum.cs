public class Solution {
    public int MatrixSum(int[][] nums) {
        int ans = 0;
        for (int i = 0; i < nums.Length; i++)
        {
            Array.Sort(nums[i]);
        }

        for (int i = 0; i < nums[0].Length; i++)
        {
            int max = nums[0][i];

            for (int j = 1; j < nums.Length; j++)
            {
                if (nums[j][i] > max)
                    max = nums[j][i];
            }

            ans += max;
        }

        return ans;
    }
}