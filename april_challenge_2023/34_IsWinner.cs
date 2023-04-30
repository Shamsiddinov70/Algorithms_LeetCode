public class Solution {
    public int IsWinner(int[] player1, int[] player2) {
        int p1 = getSum(player1);
        int p2 = getSum(player2);

        return p1 > p2 ? 1 : p2 > p1 ? 2 : 0;
    }

    public int getSum(int[] player)
    {
        int n = player.Length;
        int sum = 0;
        for (int i = 0; i < n; i++)
        {
            if (i > 0 && player[i-1] == 10 || i > 1 && player[i-2] == 10)
                sum += player[i] * 2;
            else
                sum += player[i];
        }

        return sum;
    }
}