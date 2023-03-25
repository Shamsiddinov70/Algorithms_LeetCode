public class Solution {
    public bool ThreeConsecutiveOdds(int[] arr) {
        int count = 0;
        foreach(int num in arr)
        {
            if(count == 3) return true;
            if(num % 2 != 0) count += 1;
            else count = 0;
        }
        return count == 3;
    }
}
