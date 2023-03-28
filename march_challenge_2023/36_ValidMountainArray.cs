public class Solution {
    public bool ValidMountainArray(int[] arr) {
        int maxNum = arr.Max();
        var maxIndex = Array.FindIndex(arr, n => n == maxNum);

        if(maxIndex == 0 || maxIndex == arr.Length-1)
        {
            return false;
        }

        int currentRight = arr[maxIndex];
        for (int i = maxIndex + 1; i < arr.Length; i++)
        {
            bool ans = currentRight > arr[i];
            if (!ans) return false;
            currentRight = arr[i];
        }

        int currentLeft = arr[0];
        for (int j = 1; j < maxIndex; j++)
        {
            bool ans = currentLeft < arr[j];
            if (!ans) return false;
            currentLeft = arr[j];
        }

        return true;
    }
}