public class Solution {
    public int CountNegatives(int[][] grid) {
        int ans = 0;

        for(int i = 0; i < grid.Length; i++)
        {
            int[] g = grid[i];
            for(int j = 0; j < g.Length; j++)
            {
                if(g[j] < 0) ans++;
            }
        }
        return ans;
    }
}