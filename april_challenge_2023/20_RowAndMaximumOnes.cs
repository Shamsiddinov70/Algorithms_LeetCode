public class Solution {
    public int[] RowAndMaximumOnes(int[][] mat) {
        int index = 0;
        int maxOne = 0;

        for (int i = 0; i < mat.Length; i++)
        {
            var row = mat[i];
            int tempOnes = 0;
            for (int j = 0; j < row.Length; j++)
            {
                if (row[j] == 1) tempOnes++;
            }

            if (tempOnes > maxOne)
            {
                maxOne = tempOnes;
                index = i;
            }
        }

        return new int[] {index, maxOne};
    }
}