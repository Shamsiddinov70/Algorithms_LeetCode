public class Solution {
    public int KItemsWithMaximumSum(int numOnes, int numZeros, int numNegOnes, int k) {
        if (numOnes >= k) return k;

        int onesZeros = numOnes + numZeros;
        if(onesZeros >= k) return numOnes;

        int minus = k - onesZeros;
        return numOnes - minus;
    }
}