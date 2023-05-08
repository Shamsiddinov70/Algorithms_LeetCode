public class Solution {
    public int DiagonalSum(int[][] mat) {
        int odd = mat.Length % 2 != 0 ? mat.Length / 2 : -1;
        int sum = 0;

        for (int i = 0; i < mat.Length; i++)
        {
            int start = mat[i][i];
            int end = mat[i][mat.Length - (i + 1)];
            sum += start + end;

            if (i == odd) sum -= mat[i][i];
        }

        return sum;
    }
}