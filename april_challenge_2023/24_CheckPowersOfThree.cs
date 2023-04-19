public class Solution {
    public bool CheckPowersOfThree(int n) {
        while (n > 0)
        {
            int remain = n % 3; // 12 % 3 = 0
            if (remain == 2) return false;
            n = n / 3;
        }
        return true;
    }
}