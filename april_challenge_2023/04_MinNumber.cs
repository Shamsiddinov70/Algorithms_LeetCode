public class Solution
{
    public int MinNumber(int[] nums1, int[] nums2)
    {
        int min = int.MaxValue;

        for (int i = 0; i < nums1.Length; i++)
        {
            for (int j = 0; j < nums2.Length; j++)
            {
                if (nums1.Contains(nums2[j]))
                {
                    min = Math.Min(min, nums2[j]);
                }
            }
        }

        int m1 = nums1.Min(), m2 = nums2.Min();
        int minNum = m1 < m2 ? m1 * 10 + m2 : m2 * 10 + m1;

        return min < 10 ? min : minNum;
    }
}