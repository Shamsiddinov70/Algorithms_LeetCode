// C#
public class Solution
{
    public int MaxDistance(int[] colors)
    {
        int maxDistance = 0;
        for (int i = 0; i < colors.Length; i++)
        {
            for (int j = i + 1; j < colors.Length; j++)
            {
                if (colors[i] != colors[j])
                {
                    int distance = Math.Abs(i - j);
                    maxDistance = Math.Max(maxDistance, distance);
                }
            }
        }

        return maxDistance;
    }
}


// PYTHON SOLUTION
/* class Solution:
    def maxDistance(self, colors: List[int]) -> int:
        max_dis = 0

        for i in range(len(colors)):
            for j in range(i + 1, len(colors)):
                if colors[i] != colors[j]:
                    max_dis = max(max_dis, abs(i - j))

        return max_dis */
