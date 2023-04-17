public class Solution {
    public int NumTeams(int[] rating) {
        int ans = 0;
        int len = rating.Length;

        for (int i = 0; i < len; i++) {
            int x = rating[i];

            for (int j = i + 1; j < len; j++) {
                int y = rating[j];

                for (int k = j + 1; k < len; k++) {
                    int z = rating[k];

                    if (x < y && y < z || x > y && y > z) {
                        ans += 1;
                    }
                }
            }
        }

        return ans;
    }
}