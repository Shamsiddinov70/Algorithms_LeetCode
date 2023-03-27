public class Solution {
    public int ArraySign(int[] nums) {
        int odd = 0;
        foreach(int n in nums)
        {
            if(n == 0) return 0;
            if(n < 0) odd += 1;
        }
        if(odd % 2 != 0) return -1;
        return 1;
    }
}