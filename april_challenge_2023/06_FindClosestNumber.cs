public class Solution {
    public int FindClosestNumber(int[] nums) {
        int min = int.MaxValue;

        foreach(int num in nums)
        {
            int n = Math.Abs(num);
            min = Math.Min(min, n);
        }

        return !nums.Contains(min) ? -min : min;
    }
}