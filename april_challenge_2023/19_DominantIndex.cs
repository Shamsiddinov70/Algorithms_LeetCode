public class Solution {
    public int DominantIndex(int[] nums) {
        int max = nums.Max();
        int idx = Array.IndexOf(nums, max);

        foreach (var n in nums)
        {
            if (n != max && n * 2 > max) return -1;
        }

        return idx;
    }
}